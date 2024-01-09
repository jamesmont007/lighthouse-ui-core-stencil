import { newE2EPage } from '@stencil/core/testing';

describe('st-core-growth-plan', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-core-growth-plan></st-core-growth-plan>');

    const element = await page.find('st-core-growth-plan');
    expect(element).toHaveClass('hydrated');
  });
});
