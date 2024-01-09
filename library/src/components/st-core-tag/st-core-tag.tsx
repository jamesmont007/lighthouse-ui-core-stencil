import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'st-core-tag',
  styleUrl: 'st-core-tag.scss',
  shadow: true,
})
export class StCoreTag {
  @Prop() tag: string;
  @Prop() close = true;
  @Prop() element;

  @Event() removeElement: EventEmitter<any>;

  handleRemove(element){
    this.removeElement.emit(element);
  }

  render() {
    return (
      <Host>
        <div class="tagsInputs-container-tags">
          <div class="tagsInputs-container-tags-content">
            <div class="tagsInputs-container-tags-content__text">
                {this.tag}
            </div>
          {
            this.close &&
            <button
              type="button"
              class="close"
              aria-label="Close"
              hidden={this.element.hidden}
              onClick={() => this.handleRemove(this.element)}
            >
              <i class="icon-close-1"></i>
            </button>
          }
          </div>
        </div>
      </Host>
    );
  }
}
