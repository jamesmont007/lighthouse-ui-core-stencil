import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'st-core-tooltip-skill',
  styleUrl: 'tooltip-skill.scss',
  shadow: true,
})
export class TooltipSkill implements ComponentInterface {
  @Prop() text = '';
  @Prop() position = 'rigth';
  @Prop() hasDescriptionClass = false;
  @Prop() suggested : boolean;

  render() {
    return (
      <Host>
        <div part="tooltip-skill" class={`tooltip-skill ${this.position === 'bottom' ? 'tooltip__bottom' : ''}`}>
          <img src={'../../../../../assets/icons/tooltip.svg'} alt="Tooltip" />
          <span
            class={`${this.hasDescriptionClass ? 'tooltip-skill-description': ''}`}
            part='tooltip-text'
            style={{ position: this.suggested ? 'relative' : 'absolute' }}
          >
            {this.text}
          </span>
        </div>
      </Host>
    );
  }
}
