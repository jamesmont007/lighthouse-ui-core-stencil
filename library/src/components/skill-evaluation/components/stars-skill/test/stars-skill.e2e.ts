import { newE2EPage } from '@stencil/core/testing';

describe('stars-skill', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stars-skill></stars-skill>');

    const element = await page.find('stars-skill');
    expect(element).toHaveClass('hydrated');
  });
});
