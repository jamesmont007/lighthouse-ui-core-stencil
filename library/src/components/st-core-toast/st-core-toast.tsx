import {
  Component,
  ComponentInterface,
  Host,
  h,
  State,
  Prop,
} from '@stencil/core';


@Component({
  tag: 'st-core-toast',
  styleUrl: 'st-core-toast.scss',
  shadow: true,
})
export class StCoreToast implements ComponentInterface {
  @Prop() type: string;
  @Prop() header: string;
  @Prop() message: string;
  @Prop() percentage = 10;
  @State() isVisible = true;
  @State() timer: number;

  componentWillLoad() {
    this.timer = this.percentage;
    let nInterv = setInterval(() => {
      if (!this.percentage) {
        this.isVisible = false;
        clearInterval(nInterv);
        nInterv = null;
        return;
      }
      this.percentage -= 1;
    }, 800);
  }

  render() {
    return (
      <Host>
        {this.isVisible && (
          <div
            class={`d-flex align-items-center mb-3 px-3 bg-white shadow-sm border-${this.type} rounded-sm notification overflow-hidden`}
            style={ { animation: `disappear ${this.timer - 1}s ease-out forwards` } }
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class={`toast-bar bg-back-${this.type}`}></div>
            <div
              class={`toast-bar toast-bar__movement bg-${this.type}`}
              style={{ animation: `moveToLeft ${this.timer}s ease-out forwards` }}
            ></div>
            <div class="notification-body">
              <h3 class="notification-body_title">
                {this.header}
              </h3>
              <span class="notification-body_text">
                {this.message}
              </span>
            </div>
            <button
              type="button"
              class="close"
              data-dismiss="notification"
              aria-label="Close"
              onClick={() => (this.isVisible = false)}
            >
              &times;
            </button>
          </div>
        )}
      </Host>
    );
  }
}
