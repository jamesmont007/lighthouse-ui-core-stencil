import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';

import { searchSkill } from '../../utils/utils';

@Component({
  tag: 'st-core-autocomplete',
  styleUrl: 'autocomplete.scss',
  shadow: false,
  scoped: true
})
export class Autocomplete implements ComponentInterface {
  @Prop() displayField: string;
  @Prop() valueField: string;
  @Prop() inputClassField = 'form-control';
  @Prop() emitMode = true;
  @Prop() data: any[] = [];
  @Prop() value: string;
  @Prop() isDisabled: boolean;
  @Prop() searchLength = 2;
  @Event() selectValue: EventEmitter<any>;
  @Event() inputValue: EventEmitter<any>;

  @State() isDisabledState = false;
  @State() innerEmitMode = true;
  @State() actualValue = '';
  @State() actualData: any[] = [];
  @State() filteredData: any[] = [];

  inputRef: HTMLInputElement;

  componentWillLoad() {
    this.innerEmitMode = this.emitMode;
    this.actualValue = this.value;
    this.actualData = this.data;
    this.isDisabledState = this.isDisabled;
  }

  @Watch('emitMode')
  emitModeWillUpdate(newValue: boolean) {
    this.innerEmitMode = newValue;
  }

  @Watch('value')
  valueWillUpdate(newValue) {
    this.actualValue = newValue;
  }

  @Watch('data')
  dataWillUpdate(newValue) {
    this.actualData = newValue;
    if (this.innerEmitMode && this.actualValue && !this.isDisabledState) {
      return this.filteredData = newValue;
    }
    if (this.actualValue) {
      this.filteredData = searchSkill(this.actualValue, this.searchLength, this.actualData,this.displayField);
    }
  }

  @Watch('isDisabled')
  setIsDisabled(newValue: boolean) {
    this.isDisabledState = newValue;
  }

  @Method()
  async cleanDatalist() {
    this.filteredData = [];
    this.inputRef.value = '';
    this.actualValue = '';
  }

  // Search skill
  onSearchSkill(e) {
    if (!this.innerEmitMode) {
      this.filteredData = searchSkill(e.target.value, this.searchLength, this.actualData,this.displayField);
    }
    const search = (e.target as HTMLInputElement).value;
    this.inputValue.emit(search);
    search.length > this.searchLength && (this.actualValue = search);
    search.length === 0 && (this.actualValue = '');
  }

  // Select skillId
  onSelectSkill(value,display) {
    this.filteredData = [];
    this.selectValue.emit(value);
    this.actualValue = display;
  }

  render() {
    return (
      <Host>
        <input
          id="search-skill"
          type="text"
          value={this.actualValue}
          class={this.inputClassField}
          autoComplete="off"
          onInput={this.onSearchSkill.bind(this)}
          disabled={this.isDisabledState}
          readOnly={this.isDisabledState}
          ref={(el) => (this.inputRef = el)}
        />
        <datalist id="inputListOptions" class="list-group" part="auto-complete">
          {this.filteredData.map((item) => (
            <option
              key={item[this.valueField]}
              class="list-group__item notranslate"
              onClick={() => this.onSelectSkill(item[this.valueField],item[this.displayField])}
            >
              {item[this.displayField]}
            </option>
          ))}
        </datalist>
      </Host>
    );
  }
}
