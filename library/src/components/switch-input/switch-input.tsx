import {
  Component,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'st-core-switch-input',
  styleUrl: 'switch-input.scss',
  shadow: true,
})
export class SwitchInput {
  @Prop() value: boolean;
  @Prop() readOnly: boolean;
  @Prop() texts: { enabled: string; disabled: string };
  @Prop() size: 'normal' | 'small' | 'x-small' = 'normal';
  @Prop() dataAutomation: string;
  @State() innerValue = false;
  @Event() switchHandler: EventEmitter<boolean>;

  @Watch('value')
  watchValue(newValue: boolean) {
    this.innerValue = newValue;
  }

  componentWillLoad() {
    this.innerValue = this.value;
  }

  switchClick() {
    if (!this.readOnly) {
      this.innerValue = !this.innerValue;
      this.switchHandler.emit(this.innerValue);
    }
  }

  render() {
    return (
      <label class={`switch ${this.size}`} part="switch-label">
        <input
          part="switch-input"
          type="checkbox"
          checked={this.innerValue}
          disabled={this.readOnly}
        />
        <span class="switch-bg" part="switch-span" onClick={() => this.switchClick()} />
        <p class="switch-text text-center" part="switch-text" onClick={() => this.switchClick()}>
          {this.innerValue ? this.texts?.enabled : this.texts?.disabled }
        </p>
      </label>
    );
  }
}
