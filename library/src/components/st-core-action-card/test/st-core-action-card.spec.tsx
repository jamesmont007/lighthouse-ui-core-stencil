import { newSpecPage } from '@stencil/core/testing';
import { StCoreActionCard } from '../st-core-action-card';

describe('st-core-action-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StCoreActionCard],
      html: `<st-core-action-card></st-core-action-card>`,
    });
    expect(page.root).toBeDefined();
  });
});
