import { newE2EPage } from '@stencil/core/testing';

describe('st-core-skill-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-core-skill-table></st-core-skill-table>');

    const element = await page.find('st-core-skill-table');
    expect(element).toHaveClass('hydrated');
  });
});
