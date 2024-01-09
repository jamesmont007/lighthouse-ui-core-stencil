import { h, FunctionalComponent } from '@stencil/core';

interface TableHeadProps {
  thead: any[];
}

export const TableHead: FunctionalComponent<TableHeadProps> = ({ thead }) => (
  <tr>
    {thead.map((value, index) => (
      <th scope="col" key={index} class={value.className}>
        {value.name}
      </th>
    ))}
  </tr>
);
