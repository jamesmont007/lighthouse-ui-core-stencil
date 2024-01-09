import { newE2EPage } from '@stencil/core/testing';

describe('st-core-goal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-core-goal></st-core-goal>');

    const element = await page.find('st-core-goal');
    expect(element).toHaveClass('hydrated');
  });
});
