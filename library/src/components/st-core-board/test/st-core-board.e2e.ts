import { newE2EPage } from '@stencil/core/testing';

describe('st-core-board', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-core-board></st-core-board>');

    const element = await page.find('st-core-board');
    expect(element).toHaveClass('hydrated');
  });
});
