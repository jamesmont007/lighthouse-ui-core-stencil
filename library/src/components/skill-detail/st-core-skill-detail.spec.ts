import { newSpecPage } from '@stencil/core/testing';

import { SkillDetail } from './st-core-skill-detail';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SkillDetail],
      html: `<st-core-skill-detail></st-core-skill-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <st-core-skill-detail>
        <mock:shadow-root>
        </mock:shadow-root>
      </st-core-skill-detail>
    `);
  });
});
