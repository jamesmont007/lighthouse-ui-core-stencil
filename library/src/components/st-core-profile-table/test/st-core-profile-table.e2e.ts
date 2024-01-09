import { newE2EPage } from '@stencil/core/testing';

describe('st-core-profile-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-core-profile-table></st-core-profile-table>');

    const element = await page.find('st-core-profile-table');
    expect(element).toHaveClass('hydrated');
  });
});
