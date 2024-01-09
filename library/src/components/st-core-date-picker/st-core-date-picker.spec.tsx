import { newSpecPage } from '@stencil/core/testing';
import { StCodeDatePicker } from './st-core-date-picker';

xdescribe('st-code-date-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StCodeDatePicker],
      html: `<st-code-date-picker></st-code-date-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <st-code-date-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </st-code-date-picker>
    `);
  });
});
