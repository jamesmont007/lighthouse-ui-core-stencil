import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  State,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'st-core-switch-skill',
  styleUrl: 'switch-skill.scss',
  shadow: false,
})
export class SwitchSkill implements ComponentInterface {
  @Prop() name: string;
  @Prop() value: string | number | string[];
  @Prop() changeEvent;
  @Prop() defaultChecked: boolean;
  @Prop() disabledCheck: boolean;

  @State() innerName: string;
  @State() innerValue: string | number | string[];
  @State() innerDisabled = false;

  componentWillLoad() {
    this.watchName(this.name);
    this.watchValue(this.value);
    this.watchDisabled(this.disabledCheck);
  }

  @Watch('name')
  watchName(newName: string) {
    this.innerName = newName ? newName : undefined;
  }

  @Watch('value')
  watchValue(newValue: string | number | string[]) {
    this.innerValue = newValue ? newValue : undefined;
  }

  @Watch('disabledCheck')
  watchDisabled(newDisabled: boolean) {
    this.innerDisabled = Boolean(newDisabled);
  }

  render() {
    const {
      innerName,
      innerValue,
      changeEvent,
      defaultChecked,
      innerDisabled,
    } = this;
    return (
      <Host>
        <label class="switch-skill">
          <input
            class="switch-skill-input"
            type="radio"
            name={innerName}
            value={innerValue}
            onChange={changeEvent}
            defaultChecked={defaultChecked}
            disabled={innerDisabled}
          />
          <span class="switch-skill-span"></span>
        </label>
      </Host>
    );
  }
}
