import {
  Component,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  State,
  Watch,
  ComponentInterface,
} from '@stencil/core';

import { searchSkill } from '../../utils/utils';

@Component({
  tag: 'st-core-autocomplete-tags',
  styleUrl: 'autocomplete-tags.scss',
  shadow: true,
})
export class StCoreAutocompleteTags implements ComponentInterface {
  @Prop() tagsToSuggest: string[] = [];
  @Prop() tags: string[];
  @Prop() placeholder: string;
  @Prop() cleanFilter = [];
  @Prop() canEnter = false;
  @Prop() searchLength = 2;
  @Event() selectElements: EventEmitter<string[]>;
  @State() actualData: string[] = [];
  @State() filteredData: string[] = [];
  @State() tagsToShow: string[] = [];

  datalistRef: HTMLDataListElement;
  counter = 0;

  @Watch('cleanFilter')
  clearTags(newValue) {
    if (!newValue.length) {
      this.tagsToShow = [];
    }
  }
  @Watch('tagsToSuggest')
  dataWillUpdate(newValue) {
    this.actualData = newValue;
  }

  @Watch('tags')
  updateTags(){
    this.tagsToShow = [...this.tags];
  }

  componentWillLoad() {
    this.actualData = this.tagsToSuggest;
    this.tags && (this.tagsToShow = [...this.tags]);
  }

  onSelectSkill(value: string) {
    this.filteredData = [];
    const tagInArray = this.tagsToShow.some(
      (tag: string) => tag.toLowerCase() === value.trim().toLowerCase()
    );
    !tagInArray && (this.tagsToShow = [...this.tagsToShow, value.trim()]);
    this.selectElements.emit(this.tagsToShow);
  }

  setElements(categories: CustomEvent) {
    this.tagsToShow = categories.detail.map(tag => tag.value);
    this.selectElements.emit(this.tagsToShow);
  }

  searchSkills(e) {
    this.filteredData = searchSkill(e.detail.target.value, this.searchLength, this.actualData, null);
  }

  upAndDownKeysActions(e: CustomEvent) {
    const options = this.datalistRef.options;
    if (e.detail) {
      if ( this.counter === 0 && !options[options.length - 1].classList.contains('selected')) {
        options[options.length - 1]?.classList.add('selected');
        options[this.counter]?.classList.remove('selected');
        this.counter = options.length - 1;
      } else {
        options[this.counter]?.classList.remove('selected');
        this.counter = this.counter > 0 ? --this.counter : 0;
        options[this.counter]?.classList.add('selected');
      }
      return;
    }
    if (this.counter === 0 && !options[this.counter]?.classList.contains('selected')) {
      options[this.counter]?.classList.add('selected');
    } else {
      options[this.counter]?.classList.remove('selected');
      this.counter = this.counter < options.length - 1 ? ++this.counter : 0;
      options[this.counter]?.classList.add('selected');
    }
  }

  addSelectedClass(e) {
    this.datalistRef.options[this.counter]?.classList.remove('selected');
    this.counter = e.target.value;
    this.datalistRef.options[this.counter]?.classList.add('selected');
  }

  removeSelectedClass() {
    this.datalistRef.options[this.counter]?.classList.remove('selected');
    this.counter = 0;
  }

  addElement(e: CustomEvent) {
    this.datalistRef.options[this.counter]?.classList.contains('selected')
      ? this.onSelectSkill(this.datalistRef.options[this.counter].text)
      : e.detail.value && this.onSelectSkill(e.detail.value);
  }

  render() {
    return (
      <Host>
        <div class="position-relative">
          <st-core-tags-inputs
            data={this.tagsToShow}
            placeholder={this.tagsToShow.length ? '' : this.placeholder}
            onAutoInput={(e) => this.searchSkills(e)}
            onSetElements={(e) => this.setElements(e)}
            canEnter={this.canEnter}
            isInTable={true}
            onUpKey={(e) => this.upAndDownKeysActions(e)}
            onAddElement={(e) => this.addElement(e)}
          />
          <datalist
            id="inputListOptions"
            class="list-group"
            part="auto-complete"
            ref={(el) => (this.datalistRef = el)}
            onMouseOver={(e) => this.addSelectedClass(e)}
            onMouseOut={() => this.removeSelectedClass()}
          >
            {this.filteredData.map((item, i) => {
              this.removeSelectedClass();
              return (
                <option
                  key={item}
                  value={i}
                  class="list-group__item notranslate"
                  onClick={() => this.onSelectSkill(item)}
                >
                  {item}
                </option>
              );
            })}
          </datalist>
        </div>
      </Host>
    );
  }
}
