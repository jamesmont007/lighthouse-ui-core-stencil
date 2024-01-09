import { newSpecPage } from '@stencil/core/testing';
import { TooltipSkill } from './tooltip-skill';

describe('st-core-tooltip-skill', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TooltipSkill],
      html: `<st-core-tooltip-skill text="Apertura"></st-core-tooltip-skill>`,
    });
    expect(page.root).toEqualHtml(`
      <st-core-tooltip-skill text="Apertura">
        <mock:shadow-root>
          <div class="tooltip-skill" part="tooltip-skill">
            <img src="../../../../../assets/icons/tooltip.svg" alt="Tooltip" />
            <span part="tooltip-text" style="position: absolute;">Apertura</span>
          </div>
        </mock:shadow-root>
      </st-core-tooltip-skill>
    `);
  });
});
