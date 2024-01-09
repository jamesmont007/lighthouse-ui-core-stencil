import { newSpecPage } from '@stencil/core/testing';
import { StCoreToast } from './st-core-toast';

xdescribe('st-core-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StCoreToast],
      html: `<st-core-toast></st-core-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <st-core-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </st-core-toast>
    `);
  });
});
