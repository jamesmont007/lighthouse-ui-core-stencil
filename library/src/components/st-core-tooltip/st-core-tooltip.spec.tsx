import { newSpecPage } from '@stencil/core/testing';
import { StCoreTooltip } from './st-core-tooltip';

describe('st-core-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StCoreTooltip],
      html: `<st-core-tooltip></st-core-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <st-core-tooltip>
        <mock:shadow-root>
          <div class="card m-0">
            <div class="invisible-block" part="invisible-div" tabindex="0" style="background-color: transparent;"></div>
          </div>
        </mock:shadow-root>
      </st-core-tooltip>
    `);
  });
});
