import {
  Component,
  ComponentInterface,
  h,
  Prop,
  EventEmitter,
  Event,
  State,
} from '@stencil/core';

import { SortEvent } from '../../models/sort-event.model';

export type SortDirection = 'asc' | 'desc';

@Component({
  tag: 'st-core-sort',
  styleUrl: 'st-core-sort.scss',
  shadow: false,
})
export class StCoreSort implements ComponentInterface {
  @Prop() column = '';
  @Prop() sortable: string;
  @Event() sort: EventEmitter<SortEvent>;
  @State() direction = 'asc';

  private rotate: { [key: string]: SortDirection } = {
    asc: 'desc',
    desc: 'asc',
  };

  private alignSort = () => {
    switch (this.direction) {
      case 'asc':
        return <img class='mr-2 red-icon sort-icon-size' src={'../../../../../assets/icons/sort-down.svg'}></img>;
      case 'desc':
        return <img class='mr-2 red-icon sort-icon-size' src={'../../../../../assets/icons/sort-up.svg'}></img>;
      default:
        return <img class='mr-2 red-icon sort-icon-size' src={'../../../../../assets/icons/sort-down.svg'}></img>;
    }
  };

  private setColumn = () => {
    const newDirection = this.rotate[this.direction];
    this.direction = newDirection;
    this.sort.emit({ sortable: this.sortable, direction: newDirection });
  };

  render() {
    return (
      <div class="d-flex align-items-center cursor-pointer" onClick={this.setColumn}>
        <th class="th-sort">
          {this.alignSort()} {this.column}
        </th>
      </div>
    );
  }
}
