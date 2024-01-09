import { newE2EPage } from '@stencil/core/testing';

describe('st-core-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-core-toast></st-core-toast>');

    const element = await page.find('st-core-toast');
    expect(element).toHaveClass('hydrated');
  });
});
