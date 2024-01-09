import { Component, Prop, h, Host, Watch } from '@stencil/core';

import { UserSkillModel } from '../../models';

@Component({
  tag: 'st-core-skill-detail',
  styleUrl: 'st-core-skill-detail.scss',
  shadow: true,
})
export class SkillDetail {
  @Prop({ mutable: true }) info: {
    userSkill: UserSkillModel;
    index: number;
  };
  @Prop() levelsEnum: any;

  @Watch('info')
  setInfo(newValue) {
    this.info = newValue;
  }

  render() {
    if (!this.info) return null;
    const { info: { userSkill, index }, levelsEnum } = this;
    return (
      <Host>
        <h2 class="h2 notranslate">{userSkill.displayName}</h2>
        {userSkill?.historic[index]?.details?.length ? (
          <table class="w-100 border-top mb-3 skill-detail-table">
            <thead>
              <tr>
                <th class="px-4 py-3 text-dark">Detail</th>
                <th class="px-4 py-3 text-dark text-center">Assessment</th>
              </tr>
            </thead>
            <tbody>
              {userSkill.historic[index].details.map(({ answer, detail }, index) => (
                <tr class="bg-x-light" key={index}>
                  <td class="px-4 py-3">{detail}</td>
                  <td class="px-4 py-3 w-25">
                    <div
                      class="
                        w-100 bg-white p-2 text-dark text-center font-weight-bold rounded d-flex justify-content-center align-items-center">
                      <st-core-stars-skill
                          class="mb-1"
                          level={answer}
                          definedLevel={true}
                        />
                      <span class="ml-1">
                        {levelsEnum[answer || 0]}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
        {!!userSkill?.historic[index]?.comment?.length && <h4 class="h4 mb-3">Comments</h4>}
        {!!userSkill?.historic[index]?.comment?.length && <p class="bg-x-light p-4 rounded">{userSkill.historic[index].comment}</p>}
      </Host>
    );
  }
}
