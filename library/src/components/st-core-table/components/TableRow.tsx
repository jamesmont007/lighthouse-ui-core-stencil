import { FunctionalComponent, h } from '@stencil/core';

interface TableRowProps {
  row: {
    className: string[];
    id: string;
  };
}

export const TableRow: FunctionalComponent<TableRowProps> = (
  { row },
  children
) => [
  <tr
    class={[
      row.className
    ].join(' ')}
  >
    {children}
  </tr>,
];
