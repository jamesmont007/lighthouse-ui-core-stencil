import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'st-core-tags-inputs',
  styleUrl: 'st-core-tags-inputs.scss',
  shadow: true,
})
export class StCoreTagsInputs implements ComponentInterface {
  @Prop() data = [];
  @Prop() isHidden = false;
  @Prop() placeholder: string;
  @Prop() isInTable = false;
  @Prop() canEnter = false;
  @State() elements = [];
  @Event() setElements: EventEmitter<string[]>;
  @Event() autoInput: EventEmitter<string>;
  @Event() upKey: EventEmitter<boolean>;
  @Event() addElement: EventEmitter<any>;
  @Listen('selectElements', { target: 'body' })
  clearInput(){
    this.inputRef.value = '';
  }

  private counter = 0;
  private inputRef: HTMLInputElement;

  componentWillLoad() {
    this.updateElements();
  }

  @Watch('data')
  updateData(){
    this.updateElements();
  }

  @Watch('placeholder')
  updateInputWidth(){
    this.placeholder.length && (this.inputRef.style.width = '100%');
  }

  updateElements(){
    this.elements = this.data.map((value) => ({
      key: `${this.counter++}-value`,
      value,
      hidden: this.isHidden,
    }));
  }

  private removeElement(element): void {
    this.elements = this.elements.filter((value) => value.key !== element.key);
    this.setElements.emit(this.elements);
  }

  private addNewElement(e): void {
    switch (e.keyCode) {
      case 38:
        this.upKey.emit(true);
        break;
      case 40:
        this.upKey.emit(false);
        break;
      case 13: {
        const newElement = this.canEnter
          ? { key: `${this.counter++}-value`, value: e.target.value }
          : {};
        this.addElement.emit(newElement);
        this.canEnter && (this.inputRef.value = '');
        break;
      }
      default:
        break;
    }
  }

  calculateInputWidth(){
    this.inputRef.style.width = this.inputRef.value.length + 5 + 'ch';
    !this.inputRef.value.length && this.placeholder.length && (this.inputRef.style.width = '20rem');
  }

  emitAutoEvent(e){
    this.autoInput.emit(e);
    this.calculateInputWidth();
  }

  inputFocus(){
    this.inputRef.focus();
  }

  render() {
    return (
      <Host>
        <div class={this.isInTable ? 'tags-inputs-form' : 'tags-inputs'}>
          <div class={this.isInTable ? 'tags-inputs-form__container' : 'tags-inputs__container'} onClick={() => this.inputFocus()}>
            {this.elements.map((element,i) => (
              <st-core-tag
                key={i}
                tag={element.value}
                element={element}
                onRemoveElement={(e) => this.removeElement(e.detail)}
              />
            ))}
            <input
              class={'form-control'}
              type="text"
              placeholder={this.placeholder}
              onKeyDown={(e) => this.addNewElement(e)}
              ref={(el) => (this.inputRef = el)}
              onInput={(e) => this.emitAutoEvent(e)}
              style={{ 'width': `${this.elements.length ? '5ch': '100%'}` }}
            />
          </div>
          {!this.isInTable && <div class="tags-inputs-separator" />}
        </div>
      </Host>
    );
  }
}
