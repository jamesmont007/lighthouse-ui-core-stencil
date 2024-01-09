import { newSpecPage } from '@stencil/core/testing';
import { CorePaginator } from './st-core-paginator';

xdescribe('core-paginator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CorePaginator],
      html: `<st-core-paginator></st-core-paginator>`,
    });
    expect(page.root).toEqualHtml(`
      <st-core-paginator>
        <mock:shadow-root>
        <div class="align-items-center d-flex">
          <div class="mr-auto"></div>
            <st-core-pagination></st-core-pagination>
          </div>
        </mock:shadow-root>
      </st-core-paginator>
    `);
  });
});
