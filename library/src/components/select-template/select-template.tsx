import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  Watch,
  Element,
  State,
} from '@stencil/core';

import { TemplateFilter } from '../../models';
import { TemplateColumnEnum } from '../../models/template-column.enum';
import { TemplateSortColumn } from '../../models/template-sort.model';
import { AssesFormat } from '../../utils/interfaces';
import { getLocaleComponentStrings } from '../../utils/locate';

@Component({
  tag: 'st-core-select-template',
  styleUrl: 'select-template.scss',
  shadow: true,
})
export class SelectTemplate implements ComponentInterface {
  @Prop() data: AssesFormat[] = [];
  @Prop() page = 1;
  @Prop() pageSize = 20;
  @Prop() totalItems: number;
  @Prop() disableEdit = false;
  @State() editDisabled: boolean;
  @State() filteredData: AssesFormat[] = [];
  @State() pageState: number;
  @State() pageSizeState: number;
  @State() totalItemsState: number;
  @Event() sendTemplateId: EventEmitter<string>;
  @Event() sendFilters: EventEmitter<TemplateFilter>;
  @Event() changePageSize: EventEmitter;
  @Event() changePage: EventEmitter;
  @Element() element: HTMLElement;
  translate: any;
  private columnName: typeof TemplateColumnEnum = TemplateColumnEnum;
  private disciplineInput: HTMLInputElement;
  private formInput: HTMLInputElement;
  private columnSortOrder: TemplateSortColumn = {
    sortColumn: TemplateColumnEnum.discipline,
    ascOrder: true,
  };
  private filtersValue: TemplateFilter = {
    columnSortOrder: this.columnSortOrder,
  };
  @State() disciplineAscOrder = true;
  @State() formAscOrder = true;

  @Watch('data')
  updateFilteredData(newValue) {
    this.filteredData = newValue;
  }

  @Watch('page')
  updatePage(newValue: number) {
    this.pageState = newValue;
  }

  @Watch('pageSize')
  updateSize(newValue: number) {
    this.pageSizeState = newValue;
  }

  @Watch('totalItems')
  updateTotal(newValue: number) {
    this.totalItemsState = newValue;
  }

  @Watch('disableEdit')
  updateDisableEdit(newValue: boolean) {
    this.editDisabled = newValue;
  }

  // Load data
  async componentWillLoad() {
    this.translate = await getLocaleComponentStrings(this.element);
    this.filteredData = this.data;
    this.pageState = this.page;
    this.pageSizeState = this.pageSize;
    this.totalItemsState = this.totalItems;
    this.editDisabled = this.disableEdit;
  }

  // Emit Filter template list event
  onFilterTemplates(event: Event, filterType: TemplateColumnEnum) {
    const element = event.target as HTMLInputElement;
    this.filtersValue[filterType] = element.value;
    this.sendFilters.emit(this.filtersValue);
  }

  onResetFilters() {
    this.filtersValue = {};
    this.sendFilters.emit(this.filtersValue);
    this.disciplineInput.value = '';
    this.formInput.value = '';
  }

  // Send templateId
  onSendTemplate(id: string) {
    this.sendTemplateId.emit(id);
  }

  onSendSortOrder(column: TemplateColumnEnum) {
    if (this.columnSortOrder.sortColumn === column) {
      this.columnSortOrder.ascOrder = !this.columnSortOrder.ascOrder;
    } else {
      this.columnSortOrder.sortColumn = column;
      this.columnSortOrder.ascOrder = true;
    }
    this.filtersValue.columnSortOrder = this.columnSortOrder;
    this.disciplineAscOrder = this.calculateSortOrientation(TemplateColumnEnum.discipline);
    this.formAscOrder = this.calculateSortOrientation(TemplateColumnEnum.form);
    this.sendFilters.emit(this.filtersValue);
  }

  calculateSortOrientation(column: TemplateColumnEnum) {
    if(this.columnSortOrder.sortColumn !== column){
      return true;
    } else {
      return this.columnSortOrder.ascOrder;
    }
  }

  render() {
    return (
      <Host class="card p-4 shadow-sm">
        <p>{this.translate?.principal_label}</p>
        <br></br>
        <div class="assess-table">
          <table>
            <thead>
              <tr>
                <th>
                  <st-core-form-input
                    label-text="Discipline"
                    classForm="bold-font"
                    showSort={true}
                    sortAsc={this.disciplineAscOrder}
                    onSendAscOrder={() =>
                      this.onSendSortOrder(this.columnName.discipline)
                    }
                  >
                    <input
                      class="form-control"
                      onInput={(e: UIEvent) =>
                        this.onFilterTemplates(e, this.columnName.discipline)
                      }
                      ref={(el: HTMLInputElement) =>
                        (this.disciplineInput = el)
                      }
                    />
                  </st-core-form-input>
                </th>
                <th>
                  <st-core-form-input
                    label-text="Form"
                    classForm="bold-font"
                    showSort={true}
                    sortAsc={this.formAscOrder}
                    onSendAscOrder={() =>
                      this.onSendSortOrder(this.columnName.form)
                    }
                  >
                    <input
                      class="form-control"
                      onInput={(e: UIEvent) =>
                        this.onFilterTemplates(e, this.columnName.form)
                      }
                      ref={(el: HTMLInputElement) => (this.formInput = el)}
                    />
                  </st-core-form-input>
                </th>
                <th>
                  <div class="header-title">
                    <st-core-form-input
                      classForm="bold-font"
                      class="fit-input"
                      label-text="Access to form"
                    >
                      <button
                      class="btn btn-secondary"
                      onClick={this.onResetFilters.bind(this)}>
                      <img
                        src="../../assets/icons/clear.svg"
                        alt="sort descending"/>
                        Clear filter
                    </button>
                    </st-core-form-input>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.filteredData?.map((template) => (
                <tr key={template.form.formId}>
                  <td>{template?.discipline?.name}</td>
                  <td>{template?.form?.name}</td>
                  <td class="center-column">
                    <button
                      class="btn btn-link"
                      onClick={this.onSendTemplate.bind(
                        this,
                        template.form.formId
                      )}
                      disabled={this.editDisabled}
                    >
                      <img
                        src="../../assets/icons/edit.svg"
                        alt="sort descending"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <st-core-paginator
          page={this.pageState}
          pageSize={this.pageSizeState}
          totalItems={this.totalItemsState}
          onChangePage={(e)=>{this.changePage.emit(e);}}
          onChangePageSize={(e)=>{this.changePageSize.emit(e);}}
        >
        </st-core-paginator>
      </Host>
    );
  }
}
