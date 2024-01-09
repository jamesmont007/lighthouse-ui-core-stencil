import { newSpecPage } from '@stencil/core/testing';
import { StCoreTable } from './st-core-table';

xdescribe('st-core-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StCoreTable],
      html: `<st-core-table></st-core-table>`,
    });
    expect(page.root).toEqualHtml(`
      <st-core-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </st-core-table>
    `);
  });
});
