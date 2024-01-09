import {
  Component,
  Host,
  h,
  Prop,
  State,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';
import _ from 'lodash';

@Component({
  tag: 'st-core-profile-table',
  styleUrl: 'st-core-profile-table.scss',
  shadow: true,
})
export class StCoreProfileTable {
  @Prop() data: { discipline: string; forms: { id: string; name: string }[] }[] = [];
  @Prop() isAdmin = false;

  @State() filter = {
    discipline: '',
    form: '',
  };
  @State() dataToRender: {
    discipline: string;
    forms: { name: string; id: string }[];
  }[] = [];

  @Event() deleteForm: EventEmitter<string>;

  dataToFilter: {
    discipline: string;
    forms: { name: string; id: string }[];
  }[] = [];

  forms = [];

  autocompleteRef: HTMLStCoreAutocompleteElement;
  autocompleteFormRef: HTMLStCoreAutocompleteElement;

  cleanFilters() {
    this.filter = {
      discipline: '',
      form: '',
    };
    (async() => await this.autocompleteRef.cleanDatalist())();
  }

  @Watch('filter')
  filterData(newValue: { discipline: string; form: string }) {
    const dataToFilterCopy = _.cloneDeep(this.dataToFilter);
    this.dataToRender =
      dataToFilterCopy
        .filter((item) => (
            item.discipline
              .toLowerCase()
              .indexOf(newValue.discipline.toLowerCase()) > -1 &&
            item.forms.filter(
              (form) =>
                form.name.toLowerCase().indexOf(newValue.form.toLowerCase()) >
                -1
            ).length > 0
          ))
        .map((item) => {
          if (newValue.form) {
            item.forms = item.forms.filter(
              (form) =>
                form.name.toLowerCase().indexOf(newValue.form.toLowerCase()) >
                -1
            );
          }
          return item;
        });
  }

  componentWillLoad() {
    this.updateData();
  }

  @Watch('data')
  updateData() {
    this.forms = this.data.flatMap(item => item.forms);
    this.dataToFilter = [ ...this.data ];
    this.dataToRender = [ ...this.data ];
  }

  async getDisciplines(e) {
    await this.autocompleteRef.cleanDatalist();
    this.filter = { ...this.filter, discipline: e.detail };
  }

  getDisciplinesInput(e) {
    this.filter = { ...this.filter, discipline: e.detail };
  }

  async getForms(e) {
    await this.autocompleteFormRef.cleanDatalist();
    this.filter = { ...this.filter, form: e.detail };
  }

  getFormsInput(e) {
    this.filter = { ...this.filter, form: e.detail };
  }

  setOrder({ sortable, direction }: { sortable: string; direction: string }) {
    if (sortable === 'discipline') {
      direction === 'asc'
        ? (this.dataToRender = _.cloneDeep(this.dataToRender).sort((a, b) =>
            a.discipline.localeCompare(b.discipline)
          ))
        : (this.dataToRender = _.cloneDeep(this.dataToRender).sort((a, b) =>
            b.discipline.localeCompare(a.discipline)
          ));
    } else {
      direction === 'asc'
        ? (this.dataToRender = _.sortBy(
            _.cloneDeep(this.dataToRender),
            (data) => data.forms.sort((a, b) => a.name.localeCompare(b.name))
          ))
        : (this.dataToRender = _.sortBy(
            _.cloneDeep(this.dataToRender),
            (data) => data.forms.sort((a, b) => b.name.localeCompare(a.name))
          ));
    }
  }

  render() {
    return (
      <Host>
        <section class="interviewers">
          <table class="table">
            <thead>
              <tr>
                <th scope='col'>
                  <st-core-sort
                    column={'Discipline'}
                    sortable="discipline"
                    onSort={(e) => this.setOrder(e.detail)}
                  />
                </th>
                <th scope='col'>
                  <st-core-sort
                    column={'Form'}
                    sortable="form"
                    onSort={(e) => this.setOrder(e.detail)}
                  />
                </th>
                <th></th>
              </tr>
              <tr>
                <th>
                  <st-core-autocomplete
                      ref={(el)=> (this.autocompleteRef = el)}
                      data={this.data}
                      input-class-field="form-control"
                      display-field="discipline"
                      value-field="discipline"
                      emitMode={false}
                      value={this.filter?.discipline || ''}
                      onInputValue={(e) => this.getDisciplinesInput(e)}
                      onSelectValue={(e) => this.getDisciplines(e)}
                      searchLength={0}
                  />
                </th>
                <th>
                  <st-core-autocomplete
                      ref={(el)=> (this.autocompleteFormRef = el)}
                      data={this.forms}
                      input-class-field="form-control"
                      display-field="name"
                      value-field="name"
                      emitMode={false}
                      value={this.filter?.form || ''}
                      onInputValue={(e) => this.getFormsInput(e)}
                      onSelectValue={(e) => this.getForms(e)}
                      searchLength={0}
                  />
                </th>
                <th>
                  <div>
                    <button
                      class="btn btn-secondary"
                      onClick={() => this.cleanFilters()}
                    >
                      <i class="icon icon-clear"></i>
                      Clear filter
                    </button>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {this.dataToRender.map((item) => (
                <tr key={item.discipline}>
                  <td>{item.discipline}</td>
                  <td colSpan={2}>
                    <table class="forms-table table">
                      {item.forms.map((form) => (
                        <tr key={form.id}>
                          <td>{form.name}</td>
                          <td class="d-flex justify-content-end">
                            {
                              this.isAdmin &&
                              <div
                                class="delete-section"
                                onClick={() => this.deleteForm.emit(form.id)}
                              >
                                <i class="icon icon-trash"></i>
                                <span>Eliminate</span>
                              </div>
                            }
                          </td>
                        </tr>
                      ))}
                    </table>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Host>
    );
  }
}
