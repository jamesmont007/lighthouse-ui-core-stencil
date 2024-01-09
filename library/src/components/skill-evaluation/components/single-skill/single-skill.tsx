import { Component, ComponentInterface, Host, h, Prop, State } from '@stencil/core';

import {
  NO_INFO,
} from '../../../../helpers/constants';
import { SkillDetailsModel, SkillModel } from '../../../../models';

@Component({
  tag: 'st-core-single-skill',
  styleUrl: 'single-skill.scss',
  shadow: false,
})
export class SingleSkill implements ComponentInterface {
  @Prop() identification: string;
  @Prop() readOnly = false;
  @Prop() skill: SkillModel;
  @Prop() inputChangeEvent;
  @Prop() translation;
  @State() details: SkillDetailsModel[][];

  componentWillLoad() {
    this.details = this.skill.details?.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 2);

      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);
  }

  render() {
    const { identification, skill, details } = this;
    const className = this.skill.mandatory ? 'required' : '';
    return (
      <Host>
        <div class="card mb-3" id={identification}>
          <table class="w-100">
            <thead class="border-bottom">
              <tr>
                <th class="pt-4 pl-4 pr-4 pb-2">
                  <div class="d-flex flex-column align-items-start justify-content-start">
                    <h3 class={`notranslate mb-0 title-skill-table ${className}`}>
                      {skill.displayName}
                    </h3>
                    <p class="skill-description">{skill.description || NO_INFO}</p>
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody class="border-bottom">
                {details?.map((group, qIndex) => (
                  <tr class="detail" key={qIndex}>
                    {group?.map((detail) => (
                      <td>{detail?.description}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} class="p-4">
                    <div class="form-group">
                      <label class="form-label required">{this.translation?.observations}</label>
                      <textarea
                        name={`${skill.skillId}-_-comments`}
                        class="form-control"
                        onInput={(event: UIEvent) =>
                          this.inputChangeEvent(event, skill, true)
                        }
                        disabled={this.readOnly}
                        rows={2}
                        value={skill.comments}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot class="border-bottom">
                <tr>
                  <td class="py-4 px-3 small text-right font-weight-bold text-nowrap" colSpan={2}>
                    <div class="d-flex justify-content-end">
                      <p class="required mr-1">{this.translation?.rating}</p>
                      <st-core-stars-skill
                        name={`${skill.skillId}-_-level`}
                        size={'md'}
                        showZeroLevel={true}
                        level={skill.selectedLevel}
                        definedLevel={this.readOnly}
                        onSelectedStar={(event) => this.inputChangeEvent({ target: { value: event.detail } }, skill)}
                      />
                    </div>
                  </td>
                </tr>
              </tfoot>
          </table>
        </div>
      </Host>
    );
  }
}
