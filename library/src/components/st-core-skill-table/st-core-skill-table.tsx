import {
  Component,
  Host,
  h,
  Prop,
  EventEmitter,
  Event,
  State,
  Watch,
  Element,
} from '@stencil/core';
import moment from 'moment';

import {
  DisplayEvaluationTypeEnum,
  EvaluationTypeEnum,
  LEVEL_DESCRIPTION,
} from '../../helpers/constants';
import { SelfAssessmentModel, SortEvent, UserSkillModel } from '../../models';
import { Fragment } from '../../utils/fragment';
import {
  getLocaleComponentStrings,
  getComponentClosestLanguage,
} from '../../utils/locate';

@Component({
  tag: 'st-core-skill-table',
  styleUrl: 'st-core-skill-table.scss',
  shadow: true,
})
export class StCoreSkillTable {
  @Prop() userSkills: UserSkillModel[] = [];
  @Prop() hasSoftSkills = false;
  @Prop() isEditable = true;

  @State() userFilterArray: UserSkillModel[] = [];
  @State() userFilter = {
    displayName: '',
    date: '',
    level: '',
    type: '',
    observation: '',
    discipline: ''
  };
  @State() isBigCol: boolean[] = [];
  selectLevel!: HTMLSelectElement;
  selectType: HTMLSelectElement;

  @Event() sort: EventEmitter<SortEvent>;
  @Event() setSelfAssessment: EventEmitter<SelfAssessmentModel>;

  @Event() filters: EventEmitter<{
    displayName: string;
    date: string;
    level: string;
    type: string;
    observation: string;
    discipline: string;
  }>;
  @Event() seeHistorical: EventEmitter<{
    skillId: string;
  }>;

  @Element() element: HTMLElement;

  translate: any;
  lang: string;

  async componentWillLoad() {
    this.translate = await getLocaleComponentStrings(this.element);
    this.lang = getComponentClosestLanguage(this.element);
    this.setState();
  }

  setState() {
    this.userFilterArray = [...this.userSkills];
  }

  @Watch('userSkills')
  setArrayFilter(newArray) {
    this.setState();
    this.userFilterArray = [...newArray];
  }

  getDate(date: string) {
    return moment(date).format('ll');
  }

  handleSelectLevel(e) {
    this.userFilter = { ...this.userFilter, level: e.target.value };
    this.filters.emit(this.userFilter);
  }

  handleSelectType(e) {
    this.userFilter = { ...this.userFilter, type: e.target.value };
    this.filters.emit(this.userFilter);
  }

  cleanFilters() {
    this.userFilter = {
      displayName: '',
      date: '',
      level: '',
      type: '',
      observation: '',
      discipline: ''
    };
    this.selectLevel.value = '';
    this.selectType.value = '';
    this.filters.emit(this.userFilter);
  }

  handleDisplayName(e) {
    this.userFilter = { ...this.userFilter, displayName: e.target.value };
    this.filters.emit(this.userFilter);
  }

  handleDisciplineName(e) {
    this.userFilter = { ...this.userFilter, discipline: e.target.value };
    this.filters.emit(this.userFilter);
  }

  handleDate(e) {
    this.userFilter = { ...this.userFilter, date: e.target.value };
    this.filters.emit(this.userFilter);
  }

  disabled() {
    return !Object.values(this.userFilter).some((skill) =>
      !skill ? skill : !!skill.toString()
    );
  }

  validateSize(col): boolean {
    const sizeCol = col ? col.length : 0;
    const isBig = sizeCol >= 165;
    return isBig;
  }

  handleHistorical(skill: UserSkillModel) {
    this.seeHistorical.emit({ skillId: skill.skillId });
  }

  skillDetailsShowHandler(skill: UserSkillModel) {
    this.userFilterArray = this.userFilterArray.map((skillEl) => ({
      ...skillEl,
      isVisible:
        skillEl.skillId === skill.skillId
          ? !skillEl.isVisible
          : skillEl.isVisible,
    }));
  }

  setSelectLevelValue(value: string) {
    return value.toUpperCase().trim().replace(/\s/g, '_');
  }

  changeObservationVisibility(i: number) {
    this.isBigCol[i] = !this.isBigCol[i];
    this.isBigCol = this.isBigCol.map((value) => !!value);
  }

  handleEmitSelfAssessment(e): void {
    this.userFilter = {
      displayName: '',
      date: '',
      level: '',
      type: '',
      observation: '',
      discipline: ''
    };
    this.selectLevel.value = '';
    this.selectType.value = '';
    this.setSelfAssessment.emit(e.detail);
  }

  render() {
    return (
      <Host>
        <form class={`user-skills__table`} onSubmit={(e) => e.preventDefault()}>
          <table class={`table`}>
            <thead>
              <tr>
                <th scope="col">
                  <st-core-sort
                    column={this.translate?.discipline_col}
                    sortable="discipline"
                    onSort={() => this.sort}
                  />
                </th>
                <th scope="col">
                  <st-core-sort
                    column={this.translate?.skill_col}
                    sortable="displayName"
                    onSort={() => this.sort}
                  />
                </th>
                <th scope="col">
                  <st-core-sort
                    column={this.translate?.type}
                    sortable="type"
                  />
                </th>
                <th scope="col">
                  <st-core-sort
                    column={this.translate?.level_col}
                    sortable="level"
                    onSort={() => this.sort}
                  />
                </th>
                <th scope="col">
                  <st-core-sort
                    column={this.translate?.date_col}
                    sortable="date"
                    onSort={() => this.sort}
                  />
                </th>
                <th scope="col"></th>
                <th scope="col">
                  <div class="content">{this.translate?.show_col}</div>
                </th>
              </tr>
              <tr>
                <th class={`user-skills__table-filter th-name`}>
                  <input
                    type="text"
                    class={`form-control`}
                    onInput={(e) => this.handleDisciplineName(e)}
                    value={this.userFilter.discipline}
                  />
                </th>
                <th class={`user-skills__table-filter th-name`}>
                  <input
                    type="text"
                    class={`form-control`}
                    onInput={(e) => this.handleDisplayName(e)}
                    value={this.userFilter.displayName}
                  />
                </th>
                <th class={`user-skills__table-filter`}>
                  {
                    <select
                      class={`form-control`}
                      ref={(el) => (this.selectType = el)}
                      onInput={(e) => this.handleSelectType(e)}
                    >
                      <option selected disabled hidden value=""></option>
                      {Object.values(DisplayEvaluationTypeEnum).map(
                        (type, i) => (
                          <option
                            key={i}
                            value={Object.keys(DisplayEvaluationTypeEnum)[i]}
                          >
                            {type}
                          </option>
                        )
                      )}
                    </select>
                  }
                </th>
                <th class={`user-skills__table-filter th-type`}>
                  {
                    <select
                      class={`form-control`}
                      ref={(el) => (this.selectLevel = el)}
                      onInput={(e) => this.handleSelectLevel(e)}
                    >
                      <option selected disabled hidden value=""></option>
                      {Object.values(LEVEL_DESCRIPTION).map((value) => (
                        <option
                          key={value}
                          value={this.setSelectLevelValue(value)}
                        >
                          {value}
                        </option>
                      ))}
                    </select>
                  }
                </th>
                <th class={`user-skills__table-filter`}>
                  <input
                    type="date"
                    class={`form-control`}
                    onInput={(e) => this.handleDate(e)}
                    value={this.userFilter.date}
                  />
                </th>
                <th class={`user-skills__table-filter`}>
                  <button
                    class={`btn btn-secondary`}
                    type="button"
                    onClick={() => this.cleanFilters()}
                    disabled={this.disabled()}
                  >
                    <i class={`icon icon-clear`}></i>
                    <span class={`user-skills__delete-btn`}>
                      {this.translate?.clear_label}
                    </span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.userFilterArray.map((skill, i) => (
                <Fragment key={i}>
                  <tr class={'user-skills__table-tr'}>
                    <td class={`position-relative`}>
                      <div class={`user-skill__icon-skill notranslate`}>
                      {skill.discipline?.name}
                      </div>
                    </td>
                    <td class={`position-relative`}>
                      <div class={`user-skill__icon-skill notranslate`}>
                        {skill.displayName}
                      </div>
                    </td>
                    <td>{DisplayEvaluationTypeEnum[skill.type] || ''}</td>
                    <td class={`position-relative`}>
                      <div class={`d-flex align-items-center`}>
                        <st-core-stars-skill
                          level={skill.level}
                          definedLevel={true}
                        />
                        <span class={`user-skills__level-description`}>
                        {skill.level === 0.5
                            ? LEVEL_DESCRIPTION[1]
                            : LEVEL_DESCRIPTION[Math.floor(skill?.level || 0)]}
                        </span>
                      </div>
                    </td>
                    <td class={`position-relative`}>
                      <span>{this.getDate(skill.date)}</span>
                    </td>
                    <td class={`user-skills__categories`}>
                      {this.validateSize(skill.observation) ? (
                        <Fragment>
                          <div
                            class={`${
                              this.isBigCol[i]
                                ? 'user-skills__categories--open'
                                : 'user-skills__categories--close'
                            }`}
                          >
                            {skill.observation}
                          </div>
                          <div>
                            <a
                              class='view-more'
                              onClick={() => this.changeObservationVisibility(i)}
                            >
                              {this.isBigCol[i] ? 'See Less' : 'See More'}
                            </a>
                          </div>
                        </Fragment>
                      ) : (
                        <div>{skill.observation}</div>
                      )}
                    </td>
                    <td class={`position-relative`}>
                      <div
                        class={'d-flex align-items-center justify-content-end'}
                      >
                        {!this.hasSoftSkills &&
                          skill.evaluationType &&
                          this.isEditable && (
                            <st-core-self-assessment-tooltip
                              skill={skill}
                              onSendSelfAssessment={(e) =>
                                this.handleEmitSelfAssessment(e)
                              }
                            />
                          )}
                        <span
                          class='btn btn-show-details'
                          onClick={(_) => this.skillDetailsShowHandler(skill)}
                        >
                          {skill.isVisible ? (
                            <i class='icon icon-arrow-up ml-2' />
                          ) : (
                            <i class='icon icon-arrow-down ml-2' />
                          )}
                        </span>
                      </div>
                    </td>
                  </tr>
                  {skill.isVisible && (
                    <Fragment>
                      <tr>
                        <td colSpan={7}>
                          <table class={'table'}>
                            <thead class={'text-left'}>
                              <th>
                                {this.translate?.assessment_type_details_col}
                              </th>
                              <th>{this.translate?.assessor_details_col}</th>
                              <th>{this.translate?.level_details_col}</th>
                              <th>{this.translate?.date_details_col}</th>
                              <th></th>
                              <th class={'user-skills__table-th-width'}>
                                <div class="user-skills__table-info">
                                  <span
                                    class={'btn btn-academy-link'}
                                    onClick={(_) =>
                                      this.handleHistorical(
                                        skill
                                      )
                                    }
                                  >
                                    {this.translate?.see_historical}
                                  </span>
                                </div>
                              </th>
                            </thead>
                            <tbody>
                              {skill.evaluationType.map((assessment, key) => (
                                <tr key={key}>
                                  <td>
                                    {DisplayEvaluationTypeEnum[
                                      assessment.type
                                    ] || ''}
                                  </td>
                                  <td
                                    class={`${
                                      EvaluationTypeEnum[
                                        assessment.type.toString()
                                      ] === 1 && 'opacity'
                                    }`}
                                  >
                                    {EvaluationTypeEnum[
                                      assessment.type.toString()
                                    ] === 1
                                      ? 'Average assessment'
                                      : assessment.evaluator}
                                  </td>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <st-core-stars-skill
                                        class="mb-1"
                                        definedLevel={true}
                                        level={assessment.level}
                                      />
                                      <span
                                        class={`user-skills__level-description`}
                                      >
                                        {assessment.level === 0.5
                                          ? LEVEL_DESCRIPTION[1]
                                          : LEVEL_DESCRIPTION[Math.floor(assessment.level || 0)]}
                                      </span>
                                    </div>
                                  </td>
                                  <td>{this.getDate(assessment.date)}</td>
                                  <td colSpan={2}></td>
                                </tr>
                              ))}
                              <tr></tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </Fragment>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </Host>
    );
  }
}
