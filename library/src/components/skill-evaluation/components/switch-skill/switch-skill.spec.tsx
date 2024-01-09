import { newSpecPage } from '@stencil/core/testing';
import { SwitchSkill } from './switch-skill';

describe('switch-skill', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwitchSkill],
      html: `<st-core-switch-skill
        name="skillApertura"
        value="1"
        changeEvent="() => {}"
        defaultChecked="false"
        disabledCheck="true"></st-core-switch-skill>`,
    });
    expect(page.root).toEqualHtml(`
      <st-core-switch-skill
        name="skillApertura"
        value="1"
        changeEvent="() => {}"
        defaultChecked="false"
        disabledCheck="true">
        <label class="switch-skill">
          <input
            class="switch-skill-input"
            type="radio"
            name="skillApertura"
            value="1"
          />
        <span class="switch-skill-span"></span>
      </label>
      </st-core-switch-skill>
    `);
  });
});
