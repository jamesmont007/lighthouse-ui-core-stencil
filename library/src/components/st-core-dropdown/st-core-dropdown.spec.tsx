import { newSpecPage } from '@stencil/core/testing';
import { StCoreDropdown } from './st-core-dropdown';

xdescribe('st-core-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StCoreDropdown],
      html: `<st-core-dropdown></st-core-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <st-core-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </st-core-dropdown>
    `);
  });
});
