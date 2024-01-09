import { Component, Host, h, ComponentInterface, Prop, State, EventEmitter, Event, Method, Watch } from '@stencil/core';


@Component({
  tag: 'st-core-stars-skill',
  styleUrl: 'stars-skill.scss',
  shadow: true,
})
export class StarsSkill implements ComponentInterface {
  @Prop() name: string;
  @Prop() level: number | undefined;
  @Prop() position = 'center';
  @Prop() size: 'sm' | 'md' | 'xs' = 'xs';
  @Prop() definedLevel = false;
  @Prop() showZeroLevel = false;
  @Event() selectedStar: EventEmitter<number>;
  @State() isInLeftSide = false;
  @State() selectedLevel: number;
  @State() levels = [
    { level: 1, title: 'Very Low' },
    { level: 2, title: 'Low' },
    { level: 3, title: 'Medium' },
    { level: 4, title: 'High' },
    { level: 5, title: 'Very High' },
  ];

  starsGroup: any;

  @Method()
  async resetStars() {
    [...this.starsGroup.children].forEach((htmlEl, index: number) => {
      const imgElement = htmlEl.children[0];
      const path = !index ? '../../../../assets/icons/zeroicon-gray.svg' : '../../../../assets/icons/star-empty.svg';
      imgElement.setAttribute('src', path);
    });
  }

  @Watch('level')
  setLevel(newValue: number) {
    this.selectedLevel = newValue;
  }

  componentWillLoad() {
    if (typeof this.level === 'number') {
      this.selectedLevel = this.level;
    }
  }

  paintStars(event: MouseEvent, lastLevelCaptured: number) { // when mouse move between buttons
    const imgs = [...this.starsGroup.children];
    let iconToPaint = 'star-empty';

    imgs.forEach((htmlEl, i: number) => {
      const [imgElement] = htmlEl.children;

      // If the level captured is zero, only empty stars should be painted
      if(lastLevelCaptured === 0) {
        return imgElement.setAttribute('src', `../../../../assets/icons/${lastLevelCaptured === i ? 'zeroicon-red' : 'star-empty'}.svg`);
      }

      if (!i) {
        return imgElement.setAttribute('src', '../../../../assets/icons/zeroicon-gray.svg');
      }

      const posX = event.clientX - (event.target as HTMLElement).getBoundingClientRect().left; // Mouse x-position relative to the element
      const width = imgElement.offsetWidth;

      // Check if mouse is in the left side or not to paint half star
      if (posX > (width / 2)) {
        this.isInLeftSide = false;
      } else {
        this.isInLeftSide = true;
      }


      if (i === lastLevelCaptured) {
        iconToPaint = !this.isInLeftSide ? 'star-full' : 'star-half'; // !0 = true | !0.5 = false
      }
      else if (i < lastLevelCaptured) {
        iconToPaint = 'star-full';
      }

      imgElement.setAttribute('src', `../../../../assets/icons/${iconToPaint}.svg`);
      iconToPaint = 'star-empty'; // reset
    });
  }

  getAsset(targetLevel: number, currentLevel: number): string {
    if (typeof targetLevel !== 'number') return 'star-blocked';

    if (currentLevel === Math.ceil(targetLevel)) {
      return (targetLevel % 1) ? 'star-half' : 'star-full';
    }
    if (currentLevel < Math.ceil(targetLevel)) {
      return 'star-full';
    }
    return 'star-empty';
  }

  resetSrc() { // When is just hover and mouse is leave
    const imgs = [...this.starsGroup.children];

    imgs.forEach((htmlEl, i) => {
      const [imgElement] = htmlEl.children;
      if (!i) {
        return imgElement.setAttribute('src', `../../../../assets/icons/zeroicon-${this.selectedLevel === 0 ? 'red': 'gray'}.svg`);
      }
      const iconToPaint = this.getAsset(this.selectedLevel, i);
      imgElement.setAttribute('src', `../../../../assets/icons/${iconToPaint}.svg`);
    });
  }

  onSelectLevel(event: MouseEvent, selectedLevel: number | undefined) { // When select a level (complete | half)
    let newLevel: number;
    if (selectedLevel === 0) {
      newLevel = 0;
    } else {
      newLevel = this.isInLeftSide ? selectedLevel - 0.5 : selectedLevel;
    }
    this.selectedLevel = this.selectedLevel === newLevel ? undefined : newLevel; // Reset level when double-clicking
    this.paintStars(event as MouseEvent, selectedLevel);
    this.selectedStar.emit(this.selectedLevel);
  }

  render() {
    return (
      <Host>
        <div
          class={`stars-container d-flex justify-content-${this.position}`}
          onMouseLeave={(_) => !this.definedLevel && this.resetSrc()}
          ref={(el) => (this.starsGroup = el)}
        >
          <button
            onMouseMove={(e) => (!this.definedLevel && this.showZeroLevel) && this.paintStars(e, 0)}
            name={this.name}
            key={0}
            class={`
              ${this.definedLevel ? 'btn-star-defined' : 'btn-star'}
              star-${this.size}
              ${!this.showZeroLevel || this.definedLevel ? 'star-hidden' : ''}
              `}
            onClick={(e) => !this.definedLevel && this.onSelectLevel(e, 0)}
            title={'No knowledge'}
            type="button"
          >
            <img
              class={`star-${this.size}`}
              src={`../../../../assets/icons/zeroicon-${this.selectedLevel === 0 ? 'red': 'gray'}.svg`}
              alt="No knowledge"
            />
          </button>
          {
            this.levels
              .map(({ level, title }) => (
                <button
                  key={level}
                  onMouseMove={(e) => !this.definedLevel && this.paintStars(e, level)}
                  name={this.name}
                  class={`${this.definedLevel ? 'btn-star-defined': 'btn-star'}`}
                  onClick={(e) => !this.definedLevel && this.onSelectLevel(e, level)}
                  title={title}
                  type="button"
                >
                  <img
                    class={`star-${this.size}`}
                    src={`../../../../assets/icons/${this.getAsset(this.selectedLevel, level)}.svg`}
                    alt={title}
                  />
                </button>
            ))
          }
        </div>
      </Host>
    );
  }

}
