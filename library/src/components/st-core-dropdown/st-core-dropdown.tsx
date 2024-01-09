import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  State,
  Watch,
  Method,
} from '@stencil/core';
import _ from 'lodash';

@Component({
  tag: 'st-core-dropdown',
  styleUrl: 'st-core-dropdown.scss',
  shadow: true,
})
export class StCoreDropdown<T> implements ComponentInterface {
  @Prop() isOneRegister: boolean;
  @Prop() isImg: boolean;
  @Prop() list: any[] = [];
  @Prop() data: any[] = [];
  @Prop() valueFilter: string;
  @Prop() isDisabled: boolean;
  @Prop() clearData: boolean;
  @Prop() disableFilterLogic = false;
  @Prop() searchLength = 3;
  @State() isDisabledState = false;
  @State() filters: any[] = [];
  @State() selects: any[] = [];

  @Event() selections: EventEmitter<any>;
  @Event() inputHandle: EventEmitter<string>;

  inputRef: HTMLInputElement;
  buttonRef: HTMLButtonElement;

  componentWillLoad() {
    this.selects = [...this.data];
    this.isDisabledState = this.isDisabled;
  }

  @Watch('clearData')
  clearAllData() {
    if (!this.clearData) return;
    const clearSelected = this.selects.map((element) => {
      delete element.selected;
      return element;
    });
    this.list = [...this.list, ...clearSelected];
    this.selects = [];
  }

  @Method()
  async clear(){
    const clearSelected = this.selects.map((element) => {
      delete element.selected;
      return element;
    });
    this.list = [...this.list, ...clearSelected];
    this.selects = [];
    this.inputRef.value = '';
    this.filters = [];
  }

  @Method()
  async clearInput(){
    this.inputRef.value = '';
    this.filters = [];
  }

  @Watch('data')
  setData(newValue: any[]) {
    this.selects = [...newValue];
  }

  @Watch('isDisabled')
  setIsDisabled(newValue: boolean) {
    this.isDisabledState = newValue;
  }

  @Watch('list')
  updateList(newList: any[]) {
    if(this.disableFilterLogic) {
      this.filters = newList ? newList : [];
    }
  }

  private onSearch(e: Event) {
    const input = (e.target as HTMLInputElement).value;
    if (!input || input.length < this.searchLength) {
      return this.filters = [];
    }
    this.inputHandle.emit(input);

    if(!this.disableFilterLogic) {
      const search = input.split(/(\s+)/);
      this.filters = _.filter(this.list, (col) =>
        search.every((word) => col[this.valueFilter].toLowerCase().includes(word.toLowerCase()))
      ).slice(0, 20);
    }
  }

  private removeElement(element) {
    delete element.selected;
    this.list = [...this.list, element];
    this.selects = this.selects.filter(
      (select) =>
        select[this.valueFilter].toLowerCase() !==
        element[this.valueFilter].toLowerCase()
    );
    this.selections.emit(this.selects);
  }

  private addElement(valueSelected: T) {
    const newSelection = {
      ...valueSelected,
      selected: true,
    };
    this.selects = [...this.selects, newSelection];
    this.list = this.list.filter(
      (value) =>
        value[this.valueFilter].toLowerCase() !==
        newSelection[this.valueFilter].toLowerCase()
    );
    this.selections.emit(this.selects);
    this.inputRef.value = '';
    this.filters = [];
  }

  render() {
    return (
      <Host>
        <slot>
          <div class="dropdown">
            <div class="dropdown__container">
              {this.selects.map((select) => (
                <div class="dropdown__container-content--card">
                  <div class="dropdown__container-content">
                    {this.isImg && (
                      <img
                        class="dropdown__container-content--card--img"
                        src={select.img}
                      />
                    )}
                    <div class={`dropdown__container-content--card--text ${!this.isImg && 'w-100'}`}>
                      {select[this.valueFilter]}
                    </div>
                    <button
                      type="button"
                      class="close"
                      aria-label="Close"
                      onClick={() => this.removeElement(select)}
                    >
                      <i class="icon-close-1"></i>
                    </button>
                  </div>
                </div>
              ))}
              <input
                class="form-control"
                type="text"
                autocomplete="off"
                ref={(el) => (this.inputRef = el)}
                hidden={this.isOneRegister && this.selects.length > 0}
                onInput={this.onSearch.bind(this)}
                disabled={this.isDisabledState}
              />
            </div>
            {this.filters.length >= 1 && (
              <div class="dropdown__options">
                {this.filters.map(
                  (filter) =>
                    !filter.selected && (
                      <div
                        class="dropdown__options--option"
                        onClick={() => this.addElement(filter)}
                      >
                        <div class="dropdown__card">
                          {this.isImg && (
                            <img src={filter.img} class="dropdown__card--img" />
                          )}
                          <p class="dropdown__card--text">
                            {filter[this.valueFilter]}
                          </p>
                        </div>
                      </div>
                    )
                )}
              </div>
            )}
            <div class="dropdown-separator" />
          </div>
        </slot>
      </Host>
    );
  }
}
