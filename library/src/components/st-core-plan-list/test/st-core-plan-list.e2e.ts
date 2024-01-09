import { newE2EPage } from '@stencil/core/testing';

describe('st-core-plan-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-core-plan-list></st-core-plan-list>');

    const element = await page.find('st-core-plan-list');
    expect(element).toHaveClass('hydrated');
  });
});
