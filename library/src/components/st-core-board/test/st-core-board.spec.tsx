import { newSpecPage } from '@stencil/core/testing';
import { StCoreBoard } from '../st-core-board';

describe('st-core-board', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StCoreBoard],
      html: `<st-core-board></st-core-board>`,
    });
    expect(page.root).toBeDefined();
  });
});
