import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Element,
  Watch,
} from '@stencil/core';

import { SkillItem } from '../../utils/interfaces';
import { getLocaleComponentStrings } from '../../utils/locate';

@Component({
  tag: 'st-core-select-skill',
  styleUrl: 'select-skill.scss',
  shadow: true,
})
export class SelectSkill implements ComponentInterface {
  skillNameInput: HTMLInputElement;

  @Prop() name = '';
  @Prop() data: SkillItem[] = [];
  @State() innerData: SkillItem[] = [];
  @State() skillId = '';
  @Event() sendSkillId: EventEmitter<string>;
  @Event() sendSearch: EventEmitter<string>;
  @Element() element: HTMLElement;
  translate: any;

  async componentWillLoad() {
    this.translate = await getLocaleComponentStrings(this.element);
  }

  @Watch('name')
  handleChangeName(newValue: string) {
    this.name = newValue;
  }

  @Watch('data')
  handleData(newValue: SkillItem[]) {
    this.innerData = newValue;
  }

  // Search skill
  onSearchSkill(e: Event) {
    e.preventDefault();
    this.skillId = '';
    const search = (e.target as HTMLInputElement).value;
    this.sendSearch.emit(search);
  }

  // Select skillId
  onSelectSkill(e: Event, skillId: string) {
    this.skillNameInput.value = (e.target as HTMLElement).textContent;
    this.skillId = skillId;
    this.innerData = [];
  }

  // Send skillId
  onSendSkill(e: Event) {
    e.preventDefault();
    this.sendSkillId.emit(this.skillId);
  }

  render() {
    return (
      <Host class="card p-4 shadow-sm">
        <form onSubmit={this.onSendSkill.bind(this)}>
          <p>{this.translate?.principal_label.replace('___', this.name || 'someone')}</p>
          <div class="form-group">
            <label htmlFor="search-skill" class="form-label">
              {this.translate?.search_label}
            </label>
            <div class="d-flex">
              <div class="col-5 mr-3 p-0">
                <input
                  id="search-skill"
                  type="text"
                  class="form-control"
                  ref={(el) => (this.skillNameInput = el)}
                  onInput={this.onSearchSkill.bind(this)}
                  autoComplete="off"
                />
                <ul class="list-group notranslate">
                  {this.innerData.map((skill) => (
                    <li
                      key={skill.skillId}
                      class="list-group-item"
                      onClick={(e) => this.onSelectSkill(e, skill.skillId)}
                    >
                      {skill.displayName}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="submit"
                class="btn d-flex justify-content-center align-items-center btn-primary"
                disabled={!this.skillId || !this.name}
              >
                {this.translate?.button_text}
              </button>
            </div>
          </div>
        </form>
      </Host>
    );
  }
}
