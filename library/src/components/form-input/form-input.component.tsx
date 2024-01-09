import {
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'st-core-form-input',
  styleUrl: 'form-input.component.scss',
  shadow: true,
})
export class FormInput implements ComponentInterface {
  @Prop() labelText: string;
  @Prop() errors: any;
  @Prop() errorMsg: any;
  @Prop() showRequired: boolean;
  @Prop() classForm: string = null;
  @Prop() showSort = false;
  @Prop() sortAsc = true;

  @State() labelTextState: string;
  @State() errorsState: any;
  @State() errorMsgState: any;
  @State() showRequiredState = false;
  @State() showSortState: boolean;
  @State() sortAscState = true;

  @Event() sendAscOrder: EventEmitter<boolean>;

  @Watch('labelText')
  labelTextWillLoad(newValue: string) {
    this.labelTextState = newValue;
  }

  @Watch('errors')
  errorsWillLoad(newValue) {
    newValue
      ? (this.errorsState = { ...newValue })
      : (this.errorsState = undefined);
  }

  @Watch('errorMsg')
  errorMsgWillLoad(newValue) {
    newValue
      ? (this.errorMsgState = { ...newValue })
      : (this.errorMsgState = undefined);
  }

  @Watch('showRequired')
  showRequiredWillLoad(newValue: boolean) {
    this.showRequiredState = newValue;
  }

  @Watch('showSort')
  showSortWillLoad(newValue: boolean) {
    this.showSortState = newValue;
  }

  @Watch('sortAsc')
  sortAscWillLoad(newValue: boolean) {
    this.sortAscState = newValue;
  }

  componentWillLoad() {
    this.labelTextWillLoad(this.labelText);
    this.errorsWillLoad(this.errors);
    this.errorMsgWillLoad(this.errorMsg);
    this.showRequiredWillLoad(this.showRequired);
    this.showSortWillLoad(this.showSort);
    this.sortAscWillLoad(this.sortAsc);
  }

  renderError = () => {
    if (this.errorsState && this.errorMsgState) {
      return Object.keys(this.errorsState).map((key) => (
        <span class="form-group__text-error" part="text">{this.errorMsgState[key]}</span>
      ));
    }
    return null;
  };

  toggleOrder() {
    this.sendAscOrder.emit(this.sortAscState);
  }

  showSortButton = () => (
    <button class="" onClick={this.toggleOrder.bind(this)}>
      {this.sortAscState ? (
        <img class='mr-2 red-icon sort-icon-size' src={'../../../../../assets/icons/sort-down.svg'}></img>
      ) : (
        <img class='mr-2 red-icon sort-icon-size' src={'../../../../../assets/icons/sort-up.svg'}></img>
      )}
    </button>
  );
  render() {
    return (
      <Host>
        <div class={`form-group ${this.classForm}`}>
          <label class="form-group__label">
            <div>
              {this.showSortState ? this.showSortButton() : null}
              {this.labelTextState}
              {this.showRequiredState ? <span class="required"></span> : null}
            </div>

          </label>
          <div class={this.errorsState ? 'form-group__has-error' : ''}>
            <slot></slot>
            {this.renderError()}
          </div>
        </div>
      </Host>
    );
  }
}
