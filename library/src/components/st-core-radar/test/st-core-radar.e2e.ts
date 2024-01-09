import { newE2EPage } from '@stencil/core/testing';

describe('st-core-radar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-core-radar></st-core-radar>');

    const element = await page.find('st-core-radar');
    expect(element).toHaveClass('hydrated');
  });
});
