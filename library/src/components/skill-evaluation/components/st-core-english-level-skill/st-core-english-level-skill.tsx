import { Component, Host, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'st-core-english-level-skill',
  styleUrl: 'st-core-english-level-skill.scss',
  shadow: true,
})
export class StCoreEnglishLevelSkill {
  private readonly PATH = '../../../../assets/icons/english-levels/';

  @Prop() level: number | undefined;
  @Prop() disabled = false;
  @Prop() size: 'sm' | 'md' | 'xs' = 'xs';

  @State() levelsGroup: HTMLDivElement;
  @State() innerLevel: number | undefined;
  @State() innerDisabled = false;
  @State() levels = [
    { level: 1, label: 'A1', title: 'Very Low' },
    { level: 2, label: 'A2', title: 'Low' },
    { level: 3, label: 'B1', title: 'Medium' },
    { level: 4, label: 'B2', title: 'High' },
    { level: 4.5, label: 'C1', title: 'Very High' },
    { level: 5, label: 'C2', title: 'Very High' },
  ];

  @Event() selectedLevel: EventEmitter<{ level: number | undefined; label: string | undefined } | undefined>;

  componentWillLoad(): void {
    this.innerLevel = this.level;
    this.innerDisabled = this.disabled;
  }

  @Watch('level')
  initialValueWillUpdate(newValue: number): void {
    this.innerLevel = newValue;
  }

  @Watch('disabled')
  disabledValueWillUpdate(newValue: boolean): void {
    this.innerDisabled = newValue;
  }

  levelIsHighlight(src: string): boolean {
    return src.includes('r.svg');
  }

  onChangeImageLevel(lastLevelCaptured: number | undefined): void {
    const imgs = [...Array.from(this.levelsGroup.children)];

    imgs.forEach((htmlEl: Element, i: number) => {
      const [imgElement] = Array.from(htmlEl.children);
      const currLevel = this.levels[i];
      const label = currLevel.label;
      const currImg = imgElement.getAttribute('src');

      if (lastLevelCaptured === currLevel.level) {
        imgElement.setAttribute('src', `${this.PATH}${label}r.svg`);
      } else if (this.levelIsHighlight(currImg)) {
        imgElement.setAttribute('src', `${this.PATH}${label}.svg`);
      }
    });
  }

  onSelectLevel(newLevel: number): void {
    this.innerLevel = newLevel === this.innerLevel ? undefined : newLevel;
    this.onChangeImageLevel(this.innerLevel);
    const levelInfo = this.levels.find((item) => item.level === newLevel);
    this.selectedLevel.emit({ level: newLevel, label: levelInfo.label });
  }

  render() {
    return (
      <Host>
        <div
          class="english-level-rating"
          ref={(el) => (this.levelsGroup = el)}
          onMouseLeave={(_) => !this.disabled && this.onChangeImageLevel(this.innerLevel)}
        >
        {
          this.levels.map((item, i) => (
            <button
              key={i}
              class="english-level-rating__button"
              onMouseMove={(_) => !this.disabled && this.onChangeImageLevel(item.level)}
              onClick={(_) => !this.disabled && this.onSelectLevel(item.level)}
              type="button"
            >
              <img
                class={`button--img__${this.size}`}
                src={`${this.PATH}${item.label}${this.innerLevel === item.level ? 'r': ''}.svg`}
                alt={item.title}
              />
            </button>
          ))
        }
        </div>
      </Host>
    );
  }

}
