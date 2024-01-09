import { h, FunctionalComponent } from '@stencil/core';

import { Lights } from './Lights';

interface TableColumnProps {
  row: {
    className: string;
    id: string;
    actions: any;
  };
  rowValue: any;
  headValue: any;
  className: string;
  isComponent: boolean;
}

export const TableColumn: FunctionalComponent<TableColumnProps> = ({
  rowValue,
  headValue,
  row,
  className,
  isComponent,
}) => (
  <td class={className}>
    {isComponent ? (
      <span id={row.id} />
    ) : (
      <span class="text-cell">{rowValue}</span>
    )}
    <Lights id={headValue} data={row} />
  </td>
);
