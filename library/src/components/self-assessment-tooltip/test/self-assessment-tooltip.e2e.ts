import { newE2EPage } from '@stencil/core/testing';

describe('self-assessment-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<self-assessment-tooltip></self-assessment-tooltip>');

    const element = await page.find('self-assessment-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
