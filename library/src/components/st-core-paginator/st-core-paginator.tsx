import {
  Component,
  ComponentInterface,
  h,
  Prop,
  EventEmitter,
  Event,
  Watch,
  State,
} from '@stencil/core';


import { OptionsModel } from '../../models/options.model';
import { generateOptionsFromNumberArray } from '../../utils/utils';

import { Pagination } from './components';

@Component({
  tag: 'st-core-paginator',
  styleUrl: 'st-core-paginator.scss',
  shadow: true,
})
export class CorePaginator implements ComponentInterface {
  @Prop() totalItems: number;
  @Prop() page = 1;
  @Prop() pageSize = 5;

  @Event({ composed: true }) changePageSize: EventEmitter;
  @Event({ composed: true }) changePage: EventEmitter;

  @State() total: number;
  @State() first: number;
  @State() last: number;

  @State() opts: OptionsModel[];

  componentWillLoad(): void {
    this.setState();
    this.opts = generateOptionsFromNumberArray([5, 10, 20]);
  }

  @Watch('page')
  updatePage(newValue: number) {
    this.setState(newValue);
  }

  @Watch('pageSize')
  updateSize(newValue: number) {
    this.setState(this.page, newValue);
  }

  @Watch('totalItems')
  updateTotal(newValue: number) {
    this.setState(this.page, this.pageSize, newValue);
  }

  setState(
    page = this.page,
    pageSize = this.pageSize,
    totalItems = this.totalItems
  ): void {
    this.first = (page - 1) * pageSize + 1;
    this.last =
      page * pageSize < this.totalItems ? page * pageSize : this.totalItems;
    this.total = totalItems;
  }

  handledChangeSize({ detail }) {
    this.pageSize = +detail;
    this.changePageSize.emit(detail);
  }

  handledChangePage(value) {
    this.page = value;
    this.changePage.emit(value);
  }

  render() {
    const pageCount = this.page * this.pageSize - (this.pageSize - 1);
    return this.total > 2 && (
      <div class="paginator">
        <span class="paginator-text">
          Showing {pageCount} - {(this.page * this.pageSize) > this.total ? this.total : (this.page * this.pageSize) } of{' '}
          {this.total}
        </span>
        <div class="paginator-view">
          <st-core-selector
            name="pageSize"
            options={this.opts}
            selected={this.pageSize}
            onSelectElement={this.handledChangeSize.bind(this)}
          />
        </div>
        <span class="paginator-text">records per page</span>
        <Pagination
          totalItems={this.total}
          pageSize={this.pageSize}
          currentPage={this.page}
          clickPage={this.handledChangePage.bind(this)}
        />
      </div>
    );
  }
}
