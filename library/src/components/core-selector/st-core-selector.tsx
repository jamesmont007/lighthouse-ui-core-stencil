import { Component, ComponentInterface, h, Prop, EventEmitter, Event, Watch, State, Host } from '@stencil/core';

import { OptionsModel } from '../../models/options.model';

@Component({
  tag: 'st-core-selector',
  styleUrl: 'st-core-selector.scss',
  shadow: false,
  scoped: true
})
export class CoreSelector implements ComponentInterface {
  @Prop() name: string;
  @Prop() options: OptionsModel[];
  @Prop() placeholder: string;
  @Prop() value: any;
  @Prop() selected: any;
  @Prop() isDisabled = false;
  @Prop() classSelect: string;
  @Event() selectElement: EventEmitter;
  @State() currentName: string;
  @State() currentOptions: OptionsModel[] = [];
  @State() currentPlaceholder: string;
  @State() currentValue: any;

  componentWillLoad(): void {
    this.setState();
  }

  @Watch('name')
  updateName(newValue: string) {
    this.setState(newValue);
  }

  @Watch('options')
  updateOptions(newValue: OptionsModel[]) {
    this.setState(this.name, newValue);
  }

  @Watch('placeholder')
  updatePlaceholder(newValue: string) {
    this.setState(this.name, this.options, newValue);
  }

  @Watch('value')
  updateValue(newValue: any) {
    this.setState(this.name, this.options, this.value, newValue);
  }

  setState(name = this.name, options = this.options, placeholder = this.placeholder, value = this.value): void {
    this.currentName = name;
    this.currentOptions = options ? options : [];
    this.currentPlaceholder = placeholder;
    this.currentValue = value;
  }

  selectChanged(event): void {
    this.selectElement.emit(event.target.value);
  }

  render() {
    return (
      <Host>
        <select
          class={`custom-select ${this.classSelect}`}
          id={this.currentValue}
          name={this.currentName}
          onChange={(event: UIEvent) => this.selectChanged(event)}
          disabled={this.isDisabled}
        >
          {this.currentPlaceholder && (
            <option value="" disabled>
              {this.currentPlaceholder}
            </option>
          )}
          {this.currentOptions.map(({ label, value }, i) => (
            <option key={i} value={value} selected={String(value) === String(this.selected)}>
              {label}
            </option>
          ))}
        </select>
      </Host>
    );
  }
}
