import { newSpecPage } from '@stencil/core/testing';
import { StarsSkill } from '../stars-skill';

describe('stars-skill', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StarsSkill],
      html: `<stars-skill></stars-skill>`,
    });
    expect(page.root).toEqualHtml(`
      <stars-skill></stars-skill>
    `);
  });
});
