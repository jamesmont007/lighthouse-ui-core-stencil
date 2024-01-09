import {
  Component,
  ComponentInterface,
  FunctionalComponent,
  h,
  Host,
  Method,
  Prop,
  State,
} from '@stencil/core';

@Component({
  tag: 'st-core-modal',
  styleUrl: 'modal.component.scss',
  shadow: true,
})
export class ModalComponent implements ComponentInterface {
  @Prop() position = 'right';
  @State() visible: boolean;

  @Method()
  async closeModal() {
    this.visible = false;
  }

  @Method()
  async openModal() {
    this.visible = true;
  }


  renderBackDropVisibility = () => (this.visible ? <div class="modal-backdrop fade show"></div> : null);
  renderVisibility = () => (this.visible ? 'modal fade show d-block' : 'modal');

  render() {
    return (
      <Host>
        <Visibility visible={this.visible}>
          <div class={this.renderVisibility()} tabindex="-1" role="dialog">
            <div class="modal-dialog" part={this.position === 'right' ? 'dialog' : ''} role="document">
              <div class="modal-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </Visibility>
      </Host>
    );
  }
}
interface VisibilityProps {
  visible: boolean;
}

const Visibility: FunctionalComponent<VisibilityProps> = ({ visible }, children) =>
  visible ? (
    <div>
      <div class="modal-backdrop fade show"></div>
      {children}
    </div>
  ) : null;
