import { Component, Host, h, Prop, Element, State, Event, EventEmitter } from '@stencil/core';

import { SelfAssessmentModel, UserSkillModel } from '../../models';
import { getLocaleComponentStrings } from '../../utils/locate';
import { PositionOptions } from '../st-core-tooltip/models';

@Component({
  tag: 'st-core-self-assessment-tooltip',
  styleUrl: 'self-assessment-tooltip.scss',
  shadow: true,
})
export class StCoreSelfAssessmentTooltip {
  @Prop() isAdmin = false;
  @Prop() skill: UserSkillModel;
  @Prop() showText = true;
  @Element() element: HTMLElement;
  @Event() sendSelfAssessment: EventEmitter<SelfAssessmentModel>;
  @State() selfAssessmentRating = 0;
  translate: any;
  starsRef: HTMLStCoreStarsSkillElement;
  tooltipRef: HTMLStCoreTooltipElement;

  async componentWillLoad(){
    this.translate = await getLocaleComponentStrings(this.element);
  }

  handleSelectSelfAssessmentLevel(newLevel: number) {
    this.selfAssessmentRating = newLevel;
  }

  async handleSelfAssessment(e, skill, moreDetails: boolean) {
    e.preventDefault();
    this.sendSelfAssessment.emit({
      skill,
      newLevel: this.selfAssessmentRating,
      moreDetails
    });
    this.selfAssessmentRating = 0;
    await this.starsRef?.resetStars();
    await this.tooltipRef?.handlerChangeVisibility();
  }
  render() {
    return (
      <Host>
        <div class="user-skills__update d-flex align-items-center justify-content-center">
          <div class="position-relative">
            <st-core-tooltip
              class="position-absolute user-skills__tooltip-self-assessment"
              positionTooltip={PositionOptions.bottom}
              backgroundColor="white"
              size="md"
              ref={(el) => (this.tooltipRef = el) }
            >
              <p
                class="user-skills__tooltip-self-assessment__question mb-2 mt-2"
              >
                {this.translate?.assessment_tooltip_question}
              </p>
              <st-core-stars-skill
                onSelectedStar={(event) => this.handleSelectSelfAssessmentLevel(event.detail)}
                showZeroLevel={false}
                ref={(el)=> this.starsRef = el}
              />
              <button
                class="btn btn-primary mt-3 mb-2"
                type="button"
                onClick={(e) => this.handleSelfAssessment(e, this.skill, false)}
                disabled={!this.selfAssessmentRating}>
                <i class="icon icon-check mr-1"></i>
                {this.translate?.assessment_tooltip_ok_label}
              </button>
              { this.showText && <p class="mt-3 mb-0">{this.translate?.assessment_tooltip_message_label}</p> }
              { this.showText &&
                <p
                  class="user-skills__tooltip-self-assessment__link p-0"
                  onClick={(e) => this.handleSelfAssessment(e, this.skill, true)}
                >
                  {this.translate?.assessment_tooltip_cancel_label}
                </p>
              }
            </st-core-tooltip>
            <i class="icon icon-pen px-3"></i>
          </div>
          <span class={'user-skills__tooltip-self-assessment__label'}>
            {this.isAdmin ? this.translate?.change_level_label.replace('__', '') : this.translate?.assessment_label}
          </span>
        </div>
      </Host>
    );
  }

}
