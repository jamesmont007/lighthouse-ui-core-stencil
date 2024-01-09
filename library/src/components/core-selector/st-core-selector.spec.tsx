import { newSpecPage } from '@stencil/core/testing';
import { CoreSelector } from './st-core-selector';

describe('core-selector', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreSelector],
      html: `<st-core-selector></st-core-selector>`,
    });
    console.log(page.root.ELEMENT_NODE);
    expect(page.root).toEqualHtml(`
      <st-core-selector>
        <select class="custom-select undefined"></select>
      </st-core-selector>
    `);
  });
  it('should call function initialize state', () => {
    const selector = new CoreSelector();
    // tslint:disable-next-line: no-empty
    spyOn(selector, 'setState').and.callFake(() => {});
    selector.componentWillLoad();
    expect(selector.setState).toHaveBeenCalled();
  });
  it('should emit value selected for the user', () => {
    const selector = new CoreSelector();
    // tslint:disable-next-line: no-empty
    spyOn(selector.selectElement, 'emit').and.callFake(() => {});
    const event = {
      target: {
        value: 'adjhsajhskahjsai'
      }
    };
    selector.selectChanged(event);
    expect(selector.selectElement.emit).toHaveBeenCalledWith('adjhsajhskahjsai');
  });
});
