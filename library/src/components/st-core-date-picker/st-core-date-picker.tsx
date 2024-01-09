import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  EventEmitter,
  Event,
  Method,
} from '@stencil/core';

@Component({
  tag: 'st-core-date-picker',
  styleUrl: 'st-core-date-picker.scss',
  shadow: false,
  scoped: true
})
export class StCodeDatePicker implements ComponentInterface {
  @Prop() min = '';
  @Prop() max = '';
  @Prop() value = '';
  @Prop() classDate = '';
  @Prop() isDisabled = false;
  @Event() changeDate: EventEmitter<any>;

  inputRef: HTMLInputElement;

  handleChange(event) {
    this.changeDate.emit(event.target.value);
  }

  @Method()
  async cleanInput() {
    this.inputRef.value = '';
  }

  render() {
    return (
      <Host>
        <div class="datepicker">
          <input
            ref={(element: HTMLInputElement) => (this.inputRef = element)}
            type="date"
            class={`form-control ${this.classDate}`}
            max={this.max}
            min={this.min}
            value={this.value}
            disabled={this.isDisabled}
            onChange={(event: UIEvent) => this.handleChange(event)}
          />
          <i class="icon-calendar" />
        </div>
      </Host>
    );
  }
}
