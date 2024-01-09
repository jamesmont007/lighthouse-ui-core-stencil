import { newSpecPage } from '@stencil/core/testing';
import { SwitchInput } from './switch-input';

describe('st-core-switch-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwitchInput],
      html: `<st-core-switch-input></st-core-switch-input>`,
    });
    expect(page.root).toEqualHtml(`
    <st-core-switch-input>
        <mock:shadow-root>
          <label class="normal switch" part="switch-label">
            <input part="switch-input" type="checkbox">
            <span class="switch-bg" part="switch-span"></span>
            <p class="switch-text text-center" part="switch-text"></p>
          </label>
        </mock:shadow-root>
      </st-core-switch-input>
    `);
  });
});
