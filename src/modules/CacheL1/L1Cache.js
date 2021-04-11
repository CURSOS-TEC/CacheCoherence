import React from 'react';
import { Table } from 'rsuite';
import { Panel } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

class L1Cache extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          block: '0',
          state: 'M',
          address: '0x1',
          data: '0x9F'
        },
        {
          block: '1',
          state: 'S',
          address: '0x23',
          data: '0x9F'
        }
      ]
    }
  }
  render() {
    return (
      <Panel bordered header={<strong>Cache L1 one-way-associative</strong>}>
        <Table
          height={135}
          width={370}
          data={this.state.data}
          onRowClick={data => {
            console.log(data);
          }}
        >
          <Column width={70} align="center" fixed>
            <HeaderCell># Block</HeaderCell>
            <Cell dataKey="block" />
          </Column>

          <Column width={115} fixed>
            <HeaderCell>Coherence State</HeaderCell>
            <Cell dataKey="state" />
          </Column>

          <Column width={115}>
            <HeaderCell>Memory Address</HeaderCell>
            <Cell dataKey="address" />
          </Column>

          <Column width={70}>
            <HeaderCell>Data</HeaderCell>
            <Cell dataKey="data" />
          </Column>
        </Table>
      </Panel>
    );
  }
}
export  default L1Cache;