import { newSpecPage } from '@stencil/core/testing';
import { StCoreProfileTable } from '../st-core-profile-table';

describe('st-core-profile-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StCoreProfileTable],
      html: `<st-core-profile-table></st-core-profile-table>`,
    });
    expect(page.root).toEqualHtml(`
      <st-core-profile-table>
        <mock:shadow-root>
        <section class="interviewers">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <st-core-sort column="Discipline" sortable="discipline"></st-core-sort>
                </th>
                <th scope="col">
                  <st-core-sort column="Form" sortable="form"></st-core-sort>
                </th>
                <th></th>
              </tr>
              <tr>
                <th>
                  <st-core-autocomplete display-field="discipline" input-class-field="form-control" searchlength="0" value="" value-field="discipline"></st-core-autocomplete>
                </th>
                <th>
                  <st-core-autocomplete display-field="name" input-class-field="form-control" searchlength="0" value="" value-field="name"></st-core-autocomplete>
                </th>
                <th>
                  <div>
                    <button class="btn btn-secondary">
                      <i class="icon icon-clear"></i>
                      Clear filter
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </section>
        </mock:shadow-root>
      </st-core-profile-table>
    `);
  });
});
