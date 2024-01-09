import { newE2EPage } from '@stencil/core/testing';

describe('st-core-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-core-tag></st-core-tag>');

    const element = await page.find('st-core-tag');
    expect(element).toHaveClass('hydrated');
  });
});
