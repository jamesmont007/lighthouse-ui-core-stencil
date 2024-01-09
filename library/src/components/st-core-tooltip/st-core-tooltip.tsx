import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  State,
  Method,
} from '@stencil/core';

import { PositionOptions } from './models';

@Component({
  tag: 'st-core-tooltip',
  styleUrl: 'st-core-tooltip.scss',
  shadow: true,
})
export class StCoreTooltip implements ComponentInterface {
  @Prop() color = 'transparent';
  @Prop() positionTooltip: string = PositionOptions.right;
  @Prop() backgroundColor = 'black';
  @Prop() isDisabled = false;
  @Prop() size: 'md' | '' = '';
  @State() isVisible = false;

  @Method()
  async handlerChangeVisibility() {
    this.isVisible = !this.isVisible;
  }

  render() {
    return (
      <Host>
        <div class="card m-0" onBlur={(_) => this.isVisible = false }>
          <div
            part="invisible-div"
            tabindex="0"
            onClick={(_) => this.handlerChangeVisibility()}
            class={`invisible-block ${this.size} ${this.isDisabled ? 'disabled-div' : ''}`}
            style={{ backgroundColor: this.color }}
          >
          </div>
          {this.isVisible && (
            <span
              part="tooltip-card"
              class={`tooltip-position tooltip-position__${this.positionTooltip}`}
              style={{ 'background': this.backgroundColor, '--dynamic-color': this.backgroundColor }}
            >
              <slot></slot>
            </span>
          )}
        </div>
      </Host>
    );
  }
}
