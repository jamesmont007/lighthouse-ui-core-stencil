import { newSpecPage } from '@stencil/core/testing';
import { SingleSkill } from './single-skill';

xdescribe('single-skill', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SingleSkill],
      html: `<div></div>`,
    });

    const component = page.doc.createElement('st-core-single-skill');

    (component as any).skill = {
      displayName: 'skill',
      description: 'description',
      skillId: 'skillId',
      level: 1,
      details: [],
    };
    page.root.appendChild(component);
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <st-core-single-skill>
      <div class="card mb-3">
        <table class="w-100">
          <thead class="border-bottom">
            <th class="p-4 w-100">
              <div class="align-items-center d-flex">
                <h3 class="mb-0 title-skill-table">
                  skill
                </h3>
                <st-core-tooltip-skill text="description"></st-core-tooltip-skill>
              </div>
            </th>
            <th />
            <th />
            <th />
            <th />
            <th />
            <th class="">
              <div class="p-4 text-center small font-weight-bold text-nowrap d-flex align-items-end">
              <label class="switchBtn">
                <input type="checkbox" />
                <div class="slide round">Activo</div>
              </label>
              </div>
            </th>
          </thead>
          <tbody>
            <tr>
              <td class="p-4" colspan="7">
                <div class="form-group">
                  <label class="form-label">
                    Observaciones *
                  </label>
                  <textarea class="form-control" minlength="10" name="skillId-_-comments" rows="2"></textarea>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot class="border-bottom">
              <th class="p-4 w-100">
                <div class="d-flex align-items-center required">
                  Calificacion general de la competencia
                </div>
              </th>
              <th class="font-weight-bold px-3 py-4 small text-center text-nowrap">
                <div class="mb-2">
                  Muy Alto
                </div>
                <st-core-switch-skill name="skillId-_-level" value="5"></st-core-switch-skill>
              </th>
              <th class="font-weight-bold px-3 py-4 small text-center text-nowrap">
                <div class="mb-2">
                  Alto
                </div>
                <st-core-switch-skill name="skillId-_-level" value="4"></st-core-switch-skill>
              </th>
              <th class="font-weight-bold px-3 py-4 small text-center text-nowrap">
                <div class="mb-2">
                  Medio
                </div>
                <st-core-switch-skill name="skillId-_-level" value="3"></st-core-switch-skill>
              </th>
              <th class="font-weight-bold px-3 py-4 small text-center text-nowrap">
                <div class="mb-2">
                  Bajo
                </div>
                <st-core-switch-skill name="skillId-_-level" value="2"></st-core-switch-skill>
              </th>
              <th class="font-weight-bold px-3 py-4 small text-center text-nowrap">
                <div class="mb-2">
                  Muy bajo
                </div>
                <st-core-switch-skill defaultchecked="" name="skillId-_-level" value="1"></st-core-switch-skill>
              </th>
          </tfoot>
        </table>
      </div>
    </st-core-single-skill>
    `);
  });
});
