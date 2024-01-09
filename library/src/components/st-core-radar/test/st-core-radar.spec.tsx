import { newSpecPage } from '@stencil/core/testing';
import { StCoreRadar } from '../st-core-radar';

describe('st-core-radar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StCoreRadar],
      html: `<st-core-radar></st-core-radar>`,
    });
    expect(page.root).toEqualHtml(`
      <st-core-radar>
        <mock:shadow-root>
          <apex-chart type="radar"></apex-chart>
        </mock:shadow-root>
      </st-core-radar>
    `);
  });
});
