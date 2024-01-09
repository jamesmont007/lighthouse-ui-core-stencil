import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  Element,
} from '@stencil/core';
import _ from 'lodash';
import moment from 'moment';

import { NO_INFO, ENGLISH_NAME } from '../../helpers/constants';
import { CategoryModel, FormModel, OptionsModel, SkillModel, UserModel } from '../../models';
import { Fragment } from '../../utils/fragment';
import { generatorRandomUUID } from '../../utils/generator-random-uuid';
import { getData, removeData, setData } from '../../utils/storage.util';
import {
  createSkillsObj, matchDiscipline, replaceAll, transformString,
} from '../../utils/utils';

@Component({
  tag: 'st-core-skill-evaluation',
  styleUrl: 'skill-evaluation.scss',
  shadow: true,
})
export class SkillEvaluation {
  @Prop() evaluatedName = '';
  @Prop() evaluatorName: string;
  @Prop() formName = '';

  @Prop() isASingleSkill = false;
  @Prop() skill: SkillModel;

  @Prop() formInfo: FormModel;
  @Prop() skills: SkillModel[] = [];
  @Prop() users: UserModel[] = [];
  @Prop() showInfoPanel = true;
  @Prop() readOnly = false;
  @Prop() disciplinesField: OptionsModel[];
  @Prop() initialDiscipline = '';
  @Prop() showDownloadButton = false;

  @Event() submitEvent: EventEmitter;
  @Event() addNewSkill: EventEmitter<string>;
  @Event() inputEmployee: EventEmitter<string>;
  @Event() selectedEmployee: EventEmitter<string>;
  @Event() selectedDate: EventEmitter<string>;
  @Event() selectedDiscipline: EventEmitter<string>;
  @Event() savedPartial: EventEmitter<string>;
  @Event() downloadReport: EventEmitter<string>;

  @State() innerEvaluator: string;
  @State() formData: FormModel;
  @State() initialFormData: FormModel;
  @State() innerSkill: SkillModel;
  @State() availableSkills: SkillModel[] = [];
  @State() availableEmployees: UserModel[] = [];
  @State() innerElementsToShow: OptionsModel[] = [];
  @State() innerDefaultId: string;
  @State() selectedSkillTemp: SkillModel;
  @State() prefix: 'skill' | 'form';
  @State() isImpactMatrix = false;
  @Element() element: HTMLElement;

  private TODAY = moment(new Date()).format('YYYY-MM-DD');
  private readonly IMPACT_MATRIX = 'Impact Matrix';
  private readonly TECHNICAL_IMPACT = 'technical impact';
  private targetDownloadDiscipline: string;

  listElements: HTMLElement[];
  listCategories: HTMLElement[];
  categorySelected = '';
  disciplineSelected = this.initialDiscipline;

  componentWillLoad() {
    this.formName === this.IMPACT_MATRIX && (this.isImpactMatrix = true);
    this.disciplineSelected = this.initialDiscipline;
    this.targetDownloadDiscipline = this.initialDiscipline;
    this.prefix = this.isASingleSkill ? 'skill' : 'form';
    const previousData =
      getData(`${this.prefix}-${transformString(this.evaluatedName)}-${transformString(this.formName)}`);

    if (this.isASingleSkill) {
      const skill = previousData || this.skill;
      this.setSkillData({
        ...skill,
        showInfo: true
      });
      this.availableSkills = this.skills;
    } else {
      previousData && (previousData.categories = previousData.categories.map(category => ({ ...category, visible: null })));
      this.setFormData(previousData || this.formInfo);
      this.skillsWillUpdate(this.skills);
    }

    this.listElements = [];
    this.availableEmployees = this.users;
    this.innerEvaluator = this.evaluatorName;
    this.listCategories = [];
  }

  @Watch('formInfo')
  dataWillUpdate(newValue: FormModel) {
    this.disciplineSelected = this.initialDiscipline;
    this.targetDownloadDiscipline = this.initialDiscipline;
    newValue.name === this.IMPACT_MATRIX && (this.isImpactMatrix = true);
    this.setFormData(newValue);
    this.listElements = [];
    this.listCategories = [];
  }

  @Watch('evaluatorName')
  evaluatorUserWillUpdate(newValue: string) {
    this.innerEvaluator = newValue;
  }

  @Watch('skill')
  innerSkillWillUpdate(newValue: SkillModel) {
    this.setSkillData(newValue);
    this.listElements = [];
    this.listCategories = [];
  }

  @Watch('users')
  usersWillUpdate(newValue: UserModel[]) {
    this.availableEmployees = newValue;
  }


  @Watch('skills')
  skillsWillUpdate(newValue: SkillModel[]) {
    const currSkills = this.formData?.categories
      ?.reduce((acc, current) =>
        [...acc, ...current.skills.map(({ skillId, displayName }) => ({ skillId, displayName }))], []);
    this.availableSkills = _.differenceBy(newValue, currSkills, 'skillId');
  }

  @Method()
  async clearData() {
    removeData(`${this.prefix}-${transformString(this.evaluatedName)}-${transformString(this.formName)}`);
  }

  @Method()
  async savePartial() {
    setData(`${this.prefix}-${transformString(this.evaluatedName)}-${transformString(this.formName)}`, this.formData);
    this.savedPartial.emit();
  }

  handleInputChange(e, skill: SkillModel, isAComment = false, isEnglishRating = false) {
    const input = e?.target?.value;
    let newSkill: SkillModel;
    if (isEnglishRating) {
      const [observation, observationAfterFirstLabelChange] = (
        skill?.comments || ''
      ).split(/^\-\-\s+[A-C]+[1-2]+\s\-\-\s/);
      newSkill = {
        ...skill,
        comments: `-- ${input.label} -- ${observation || observationAfterFirstLabelChange || ''}`,
        selectedLevel: input.level,
        englishLabel: `-- ${input.label} --`
      };
    } else {
      newSkill = {
        ...skill,
        comments: isAComment ? input : skill?.comments,
        selectedLevel: !isAComment ? input : skill?.selectedLevel
      };
    }

    if (this.isASingleSkill) {
      this.setSkillData(newSkill);
      return setData(`${this.prefix}-${transformString(this.evaluatedName)}-${transformString(this.formName)}`, this.innerSkill);
    }
    const newData = {
      ...this.formData,
      categories: this.formData?.categories?.map((category) => ({
        ...category,
        skills:  category.id === newSkill?.categoryId ?
          category?.skills?.map((skill) => skill?.skillId === newSkill?.skillId ? newSkill : skill) :
          category.skills
      }))
    };
    this.setFormData(newData);
    setData(`${this.prefix}-${transformString(this.evaluatedName)}-${transformString(this.formName)}`, this.formData);
  }

  setFormData(form: FormModel) {
    this.innerDefaultId = form.categories
      .find((cat) => cat.name.toLowerCase().trim().replace(' ', '-') === 'additional-skills')?.id || null;

      if (this.readOnly) {
        return this.formData = {
          ...form,
          isImpactMatrix: this.isImpactMatrix,
          categories: form.categories.map((cat) => ({
            ...cat,
            visible: true,
            skills: cat.skills
              .sort((a, b) => a.position - b.position)
              .map((skill) =>
                matchDiscipline(cat.name) ||
                cat.name.replace(/-\s/g, '').toLowerCase().trim() === this.TECHNICAL_IMPACT
                  ? { ...skill, mandatory: true }
                  : skill
              )
          })).sort((a, b) => a.position - b.position)
        };
      }
      this.formData = {
        ...form,
        isImpactMatrix: this.isImpactMatrix,
        categories: form.categories
          .map((cat) => ({
            ...cat,
            visible:
              cat.visible ?? (cat.skills.length
                ? this.isImpactMatrix
                  ? (!matchDiscipline(cat.name) &&
                    cat.name.replace(/-\s/g, '').toLowerCase().trim() !==
                      this.TECHNICAL_IMPACT)
                  : true
                : false),
            skills: cat.skills
              .sort((a, b) => a.position - b.position)
              .map((skill) =>
                matchDiscipline(cat.name) ||
                cat.name.replace(/-\s/g, '').toLowerCase().trim() === this.TECHNICAL_IMPACT
                  ? { ...skill, mandatory: true }
                  : skill
              ),
          }))
          .sort((a, b) => a.position - b.position),
      };

      if (this.disciplineSelected) {
        let initialDisc;
        let found = false;
        this.formData.categories.forEach((category, i) => {
          category.name.replace(/-\s/g, '').toLowerCase().trim() === this.TECHNICAL_IMPACT &&
            (initialDisc = i);
          const categoryName = matchDiscipline(category.name);
          if (categoryName) {
            if (
              this.disciplineSelected.toLowerCase().trim() ===
                replaceAll(categoryName, '-', ' ').trim() &&
              category.skills.length
            ) {
              category.visible = true;
              found = true;
            }
          }
        });

        if (!found && initialDisc !== undefined) {
          this.formData.categories[initialDisc].visible = true;
        }
        this.disciplineSelected = '';
      }

    const newItems: OptionsModel[] = this.formData.categories.reduce(
      (acc, current) =>
        current.visible
          ? [
              ...acc,
              ...current.skills.map((skill) => ({
                value: skill.skillId,
                label: skill.displayName,
              })),
            ]
          : acc,
      []
    );
    this.innerElementsToShow = _.uniqBy([...this.innerElementsToShow, ...newItems], (e) => e.value);
  }

  setSkillData(skill: SkillModel) {
    this.innerSkill = {
      ...skill,
      details: skill.details.sort((a, b) => a.position - b.position)
    };
  }

  handleSubmit() {
    if(this.innerSkill?.displayName.toLowerCase().trim() === ENGLISH_NAME){
      if(!this.innerSkill?.comments.startsWith(this.innerSkill.englishLabel)){
        this.innerSkill = {
          ...this.innerSkill,
          comments: `${this.innerSkill.englishLabel} ${this.innerSkill.comments}`
        };
      }
    }

    if(this.formData?.name.toLowerCase().trim() === ENGLISH_NAME){
      const index = this.formData.categories.findIndex(category => category.name.toLowerCase().trim() === ENGLISH_NAME);
      if(index > -1){
        const englishCategory = this.formData.categories[index];
        const englishSkill = englishCategory?.skills[0];
        if(!englishSkill.comments.startsWith(englishSkill.englishLabel)){
          englishSkill.comments = `${englishSkill.englishLabel} ${englishSkill.comments}`;
          englishCategory[0] = englishSkill;
          this.formData.categories[index] = englishCategory;
        }
      }
    }
    const result = createSkillsObj(
      this.isASingleSkill ? this.innerSkill : this.formData,
      this.isASingleSkill,
      this.handleRoutingNavbar.bind(this)
    );
    this.submitEvent.emit(result);
  }

  @Listen('selectElement')
  handleRoutingNavbar(event) {
    setTimeout(() => {
      const elementFound = this.listElements.find((item: any) => item?.id === event.detail);
      if(elementFound){
        elementFound.scrollIntoView({ block: 'center' });
        setTimeout(() => {
          elementFound.classList.add('skill--focused');
          setTimeout(() => {
            elementFound.classList.remove('skill--focused');
          }, 500);
        }, 300);
      } else {
        if(this.categorySelected){
          const elementFound = this.listCategories.find((item: any) => item?.id === this.categorySelected);
          elementFound.scrollIntoView({ block: 'center' });
          setTimeout(() => {
            elementFound.classList.add('category--focused');
            setTimeout(() => {
              elementFound.classList.remove('category--focused');
            }, 500);
          }, 300);
        }
      }
    }, 50);
  }

  handleSelectDiscipline(e) {
    const { label: discipline } = this.disciplinesField.find(discipline => e.detail === discipline.value);
    let categoryId = '';
    let idx: number;
    let found = false;
    const updatedCategories = this.formData.categories.map((category, i) => {
      const categoryName = matchDiscipline(category.name);
      category.name.toLowerCase().trim() === 'technical - impact' && (idx = i);
      if(!categoryName) return category;
      if (
        discipline.toLowerCase().trim() ===
          replaceAll(categoryName, '-', ' ').trim() &&
        category.skills.length
      ) {
        category.visible = true;
        categoryId = category.id;
        found = true;
      } else {
        category.visible = false;
      }
      return category;
    });
    this.categorySelected = categoryId;
    if (!found && idx !== undefined) {
      updatedCategories[idx].visible = true;
      this.categorySelected = updatedCategories[idx].id;
    } else {
      idx !== undefined && (updatedCategories[idx].visible = false);
    }
    const newForm = { ...this.formData, categories: updatedCategories };
    this.listElements = [];
    this.innerElementsToShow = [];
    this.listCategories = [];
    this.targetDownloadDiscipline = discipline;
    this.selectedDiscipline.emit(discipline);
    this.setFormData(newForm);
  }

  handleInputSkill(event: CustomEvent<string>) {
    this.addNewSkill.emit(event.detail);
  }

  handleChangeSelectedSkill(event: CustomEvent<string>) {
    this.selectedSkillTemp = this.skills.find((s) => s.skillId === event.detail);
  }

  addedSkill() {
    const newValue = this.selectedSkillTemp;

    let id = this.innerDefaultId;
    let newForm: FormModel;
    if (!id) {
      id = generatorRandomUUID();
      this.innerDefaultId = id;
      const categoryDefault: CategoryModel = {
        id,
        name: 'Additional skills',
        enabled: true,
        position: this.formData.categories.length,
        skills: [{ ...newValue, categoryId: id, position: 0 }]
      };
      newForm = {
        ...this.formData,
        categories: [...this.formData?.categories, categoryDefault]
      };
    } else {
      const newCategories = this.formData.categories.map((cat) => ({
        ...cat,
        skills: cat.id === id ? [...cat.skills, { ...newValue, categoryId: id, position: cat.skills.length }] : cat.skills
      }));
      newForm = {
        ...this.formData,
        categories: [...newCategories]
      };
    }

    this.setFormData(newForm);
    this.availableSkills = [];
    this.listElements = [];
    this.selectedSkillTemp = null;
  }

  handleInputEmployee(event: CustomEvent<string>) {
    this.inputEmployee.emit(event.detail);
  }

  addedEmployee(event: CustomEvent<string>) {
    this.selectedEmployee.emit(event.detail);
  }

  handleInputDate(event: CustomEvent<string>) {
    this.selectedDate.emit(event.detail);
  }

  handleChangeVisibility(selectedSkill: SkillModel) {
    if (this.isASingleSkill) {
      return this.innerSkill = {
        ...this.innerSkill,
        showInfo: this.innerSkill.skillId === selectedSkill.skillId && !this.innerSkill.showInfo
      };
    }
    this.formData = {
      ...this.formData,
      categories: this.formData.categories.map((cat) => ({
        ...cat,
        skills: cat.skills.map((skill) => ({
          ...skill,
          showInfo: skill.skillId === selectedSkill.skillId && !skill.showInfo
        }))
      }))
    };
  }

  render() {
    if (!this.formData && !this.innerSkill) return null;
    return (
      <Host>
        <div class="skill-evaluation">
        {
          (this.isImpactMatrix && !this.readOnly) &&
          <a class='btn-save' onClick={() => this.savePartial()}><img src={'../../../../../assets/icons/save.svg'}></img></a>
          }
          {!this.readOnly &&
            <form class="skill-evaluation__filters">
              {!this.isASingleSkill &&
                <Fragment>
                  {
                    this.isImpactMatrix &&
                    <div class="select select--disciplines">
                      <label class="form-group__label">Disciplines</label>
                      <st-core-selector
                        name='disciplines'
                        options={this.disciplinesField}
                        selected={
                          this.disciplinesField.find(
                            (disc) => disc.value === this.initialDiscipline
                          )?.value || this.disciplinesField[0].value
                        }
                        onSelectElement={(s) => this.handleSelectDiscipline(s)}
                      ></st-core-selector>
                    </div>
                  }
                  <div class="select select--skills">
                    <label class="form-group__label">Skills</label>
                    <st-core-selector
                      name='skills'
                      options={this.innerElementsToShow}
                      selected={this.innerElementsToShow[0].value}
                    >
                    </st-core-selector>
                  </div>
                  {
                    this.isImpactMatrix && this.showDownloadButton &&
                    <div>
                      <button
                        type="button"
                        class={'btn btn-primary select select--button'}
                        onClick={() => this.downloadReport.emit(this.targetDownloadDiscipline)}
                      >
                        Download report
                      </button>
                    </div>
                  }
                  { this.showInfoPanel && (
                    <Fragment>
                      <st-core-form-input classForm="" class="autocomplete autocomplete--skills" labelText='Add Skill'>
                      <st-core-autocomplete
                        data={this.availableSkills}
                        isDisabled={this.readOnly}
                        input-class-field="form-control"
                        display-field="displayName"
                        value-field="skillId"
                        emitMode={false}
                        value={this.selectedSkillTemp?.displayName || ''}
                        onInputValue={(e) => this.handleInputSkill(e)}
                        onSelectValue={(e) => this.handleChangeSelectedSkill(e)}
                        searchLength={0}
                      >
                      </st-core-autocomplete>
                    </st-core-form-input>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      disabled={!this.selectedSkillTemp}
                      onClick={() => this.addedSkill()}
                    >
                      Add
                    </button>
                  </Fragment>
                  )}
                </Fragment>
              }
              {this.showInfoPanel && (
                <Fragment>
                  <st-core-form-input classForm="" class="autocomplete autocomplete--employees" labelText='Assessed by'>
                    <st-core-autocomplete
                      data={this.availableEmployees}
                      isDisabled={this.readOnly}
                      input-class-field="form-control"
                      display-field="fullName"
                      value-field="id"
                      value={this.innerEvaluator}
                      onInputValue={(e) => this.handleInputEmployee(e)}
                      onSelectValue={(e) => this.addedEmployee(e)}
                    >
                    </st-core-autocomplete>
                  </st-core-form-input>
                  <st-core-form-input labelText='Assessment date'>
                    <st-core-date-picker
                      max={this.TODAY}
                      value={this.TODAY}
                      onChangeDate={(e) => this.handleInputDate(e)}
                    >
                    </st-core-date-picker>
                  </st-core-form-input>
                </Fragment>
              )}
            </form>
          }
          <div class="skill-evaluation--body">
            <h1 class="skill-evaluation--title">{this.formName}</h1>
            {!this.isASingleSkill && this.formData?.categories?.filter(c => c.skills.length).filter(c => c.visible).map((category) => (
              <div key={category.id} id={category.id} class="evaluation-group" ref={(el) => this.listCategories.push(el as HTMLElement)}>
                <div class="evaluation-group--description">
                  {!this.isASingleSkill && <h2 class="evaluation-group--title">{category.name}</h2>}
                  <st-core-tooltip-skill
                    text={category.description || 'No description'}
                    hasDescriptionClass={true}
                  >
                  </st-core-tooltip-skill>
                </div>
                <table class="table table--skills">
                  <thead class="header--skills">
                    <tr>
                      <th>Skill</th>
                      <th id="observations">Observations</th>
                      <th class="text-center">Overall skill rating</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {!this.isASingleSkill && category?.skills?.length && category?.skills.map((skill) => (
                      <Fragment key={skill.skillId}>
                        <tr id={skill.skillId} ref={(el) => this.listElements.push(el as HTMLElement)} class="tr--skill">
                          <td class={`td--skill-name ${skill.mandatory ? 'required' : ''}`}>{skill.displayName}</td>
                          <td>
                            <textarea
                              name={`${skill.skillId}-_-comments`}
                              class="form-control"
                              onInput={(event: UIEvent) => this.handleInputChange(event, skill, true)}
                              disabled={this.readOnly}
                              value={skill.comments}
                            ></textarea>
                          </td>
                          <td>
                            {skill.displayName.toLowerCase().trim() !== ENGLISH_NAME ?
                            (<st-core-stars-skill
                              size="sm"
                              showZeroLevel={true}
                              level={skill.selectedLevel}
                              definedLevel={this.readOnly}
                              onSelectedStar={(event) => this.handleInputChange({ target: { value: event.detail } }, skill)}
                            >
                            </st-core-stars-skill>) :
                            (<st-core-english-level-skill
                              size="sm"
                              level={skill.selectedLevel}
                              disabled={this.readOnly}
                              onSelectedLevel={(event) => this.handleInputChange({ target: { value: event.detail } }, skill, false, true)}
                            >
                            </st-core-english-level-skill>)
                            }
                          </td>
                          <td>
                            {!skill.showInfo && <i class="icon icon-arrow-down" onClick={(_) => this.handleChangeVisibility(skill)}></i>}
                            {skill.showInfo && <i class="icon icon-arrow-up" onClick={(_) => this.handleChangeVisibility(skill)}></i>}
                          </td>
                        </tr>
                        {skill.showInfo && <tr>
                          <td colSpan={4}>
                            <div class="container--information">
                              <h3 class="container--information-description--title">Description</h3>
                              <p class="container--information-description--body">{skill.description || NO_INFO}</p>
                              <h3 class="container--information-details--title">Details</h3>
                              {!skill?.details?.length && <p class="container--information-details--body">No details</p>}
                              {skill?.details && (
                                <ol>
                                  {skill?.details?.map((detail) => (
                                    <li class="container--information-details--body" key={detail.id}>{detail.description}</li>
                                  ))}
                                </ol>
                              )}
                            </div>
                          </td>
                        </tr>}
                      </Fragment>
                    ))
                    }
                  </tbody>
                </table>
              </div>
            ))}
            { this.isASingleSkill &&
              <div class="evaluation-group">
                <table class="table table--skills">
                  <thead class="header--skills">
                    <tr>
                      <th>Skill</th>
                      <th id="observations">Observations</th>
                      <th class="text-center">Overall skill rating</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                {this.isASingleSkill && this.innerSkill &&
                    <tr id={this.innerSkill.skillId} ref={(el) => this.listElements.push(el as HTMLElement)}>
                      <td class={`td--skill-name ${this.innerSkill.mandatory ? 'required' : ''}`}>{this.innerSkill.displayName}</td>
                      <td>
                        <textarea
                          name={`${this.innerSkill.skillId}-_-comments`}
                          class="form-control"
                          onInput={(event: UIEvent) => this.handleInputChange(event, this.innerSkill, true)}
                          disabled={this.readOnly}
                          value={this.innerSkill.comments}
                        ></textarea>
                      </td>
                      <td>
                        {this.innerSkill.displayName.toLowerCase().trim() !== ENGLISH_NAME ?
                        (<st-core-stars-skill
                          size="md"
                          showZeroLevel={true}
                          level={this.innerSkill.selectedLevel}
                          definedLevel={this.readOnly}
                          onSelectedStar={(event) => this.handleInputChange({ target: { value: event.detail } }, this.innerSkill)}
                        >
                        </st-core-stars-skill>) :
                        (<st-core-english-level-skill
                          size="md"
                          level={this.innerSkill.selectedLevel}
                          disabled={this.readOnly}
                          onSelectedLevel={(event) =>
                            this.handleInputChange({ target: { value: event.detail } }, this.innerSkill, false, true)}
                        >
                        </st-core-english-level-skill>)
                        }
                      </td>
                      <td>
                        {!this.innerSkill.showInfo &&
                          <i class="icon icon-arrow-down" onClick={(_) => this.handleChangeVisibility(this.innerSkill)}></i>
                        }
                        {this.innerSkill.showInfo &&
                          <i class="icon icon-arrow-up" onClick={(_) => this.handleChangeVisibility(this.innerSkill)}></i>
                        }
                      </td>
                    </tr>
                }
                {this.innerSkill.showInfo &&
                    <tr>
                      <td colSpan={4}>
                        <div class="container--information">
                          <h3 class="container--information-description--title">Description</h3>
                          <p class="container--information-description--body">{this.innerSkill.description || NO_INFO}</p>
                          <h3 class="container--information-details--title">Details</h3>
                          {!this.innerSkill?.details?.length && <p class="container--information-details--body">No details</p>}
                          {this.innerSkill?.details?.map((detail) => (
                            <p class="container--information-details--body" key={detail.id}>{detail.description}</p>
                          ))}
                        </div>
                      </td>
                    </tr>
                }
                </tbody>
              </table>
            </div>
            }
          </div>
          {!this.readOnly &&
            <button
              onClick={() => this.handleSubmit()}
              type="button"
              class="btn btn-primary form-button"
            >
              Send Assessment
            </button>
          }
        </div>
      </Host>
    );
  }
}
