import { newE2EPage } from '@stencil/core/testing';

describe('autocomplete-tags', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<autocomplete-tags></autocomplete-tags>');

    const element = await page.find('autocomplete-tags');
    expect(element).toHaveClass('hydrated');
  });
});
