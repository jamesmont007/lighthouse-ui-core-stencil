import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumbs } from './breadcrumbs.component';

describe('st-core-breadcrumbs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Breadcrumbs],
      html: `<st-core-breadcrumbs></st-core-breadcrumbs>`,
    });
    expect(page.root).toEqualHtml(`
    <st-core-breadcrumbs>
        <mock:shadow-root>
          <ul></ul>
        </mock:shadow-root>
      </st-core-breadcrumbs>
    `);
  });

  it('Validate click', async () => {
    const page = await newSpecPage({
      components: [Breadcrumbs],
      html: `<div></div>`,
    });

    const component = page.doc.createElement('st-core-breadcrumbs');
    (component as any).paths = [
      { text: 'Abuelo', link: 'LinkAbuelo' },
      { text: 'padre', link: 'LinkPadre', dataAutomation: 'auto-link-padre' },
      { text: 'hijo' },
    ];
    component.isValidation = true;
    page.root.appendChild(component);
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <st-core-breadcrumbs>
        <mock:shadow-root>
          <ul>
            <li>
              <a class="item" link="LinkAbuelo" text="Abuelo"></a>
            </li>
            <li>
              <a class="item" link="LinkPadre" dataautomation="auto-link-padre" text="padre"></a>
            </li>
            <li>
              <a class="item item-current" text="hijo"></a>
            </li>
          </ul>
        </mock:shadow-root>
      </st-core-breadcrumbs>
    `);
  });

  it('not validate click', async () => {
    const page = await newSpecPage({
      components: [Breadcrumbs],
      html: `<div></div>`,
    });

    const component = page.doc.createElement('st-core-breadcrumbs');
    (component as any).paths = [
      { text: 'Abuelo', link: 'LinkAbuelo' },
      { text: 'padre', link: 'LinkPadre', dataAutomation: 'auto-link-padre' },
      { text: 'hijo' },
    ];
    page.root.appendChild(component);
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <st-core-breadcrumbs>
        <mock:shadow-root>
        <ul>
          <li>
            <a class="item" href="LinkAbuelo" link="LinkAbuelo" text="Abuelo"></a>
          </li>
          <li>
            <a class="item" href="LinkPadre" link="LinkPadre" dataautomation="auto-link-padre" link="LinkPadre" text="padre"></a>
          </li>
          <li>
            <a class="item item-current" text="hijo"></a>
          </li>
        </ul>
        </mock:shadow-root>
      </st-core-breadcrumbs>
    `);
  });

});
