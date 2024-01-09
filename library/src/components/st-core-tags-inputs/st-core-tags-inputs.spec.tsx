import { newSpecPage } from '@stencil/core/testing';
import { StCoreTagsInputs } from './st-core-tags-inputs';

xdescribe('st-core-tags-inputs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StCoreTagsInputs],
      html: `<st-core-tags-inputs></st-core-tags-inputs>`,
    });
    expect(page.root).toEqualHtml(`
      <st-core-tags-inputs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </st-core-tags-inputs>
    `);
  });
});
