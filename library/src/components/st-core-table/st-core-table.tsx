import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

import { TableColumn, TableHead, TableRow } from './components';

@Component({
  tag: 'st-core-table',
  styleUrl: 'st-core-table.scss',
  shadow: true,
})
export class StCoreTable implements ComponentInterface {
  @Prop() data: any;
  @Prop() thead: any[];
  @Prop() classTableName = '';
  @Prop() isCustomBody = false;

  render() {
    return (
      <Host>
        <table class={`table ${this.classTableName}`}>
          <thead>
            <TableHead thead={this.thead} />
          </thead>
          {this.isCustomBody ? (
            <slot name="body" />
          ) : (
            <tbody>
              {this.data.map((row) => (
                <TableRow row={row}>
                  {this.thead.map((value) => (
                    <TableColumn
                      row={row}
                      rowValue={row[value.key]}
                      headValue={value.key}
                      className={value.className}
                      isComponent={value.isComponent}
                    />
                  ))}
                </TableRow>
              ))}
            </tbody>
          )}
          <tfoot>
            <tr>
              <td colSpan={this.thead.length}>
                <slot name="footer" />
              </td>
            </tr>
          </tfoot>
        </table>
      </Host>
    );
  }
}
