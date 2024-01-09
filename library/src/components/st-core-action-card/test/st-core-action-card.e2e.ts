import { newE2EPage } from '@stencil/core/testing';

describe('st-core-action-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-core-action-card></st-core-action-card>');

    const element = await page.find('st-core-action-card');
    expect(element).toHaveClass('hydrated');
  });
});
