import React from 'react';
import { Table } from 'rsuite';
import { Panel } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

export const MainMemory = props => {
  const data = [
      {
        block: '0',
        state: 'N/A',
        address: '0x1',
        data: '0x9F'
      },
      {
        block: '1',
        state: 'DS',
        address: '0x23',
        data: '0x9F'
      },
      {
        block: '2',
        state: 'N/A',
        address: '0x1',
        data: '0x9F'
      },
      {
        block: '3',
        state: 'DI',
        address: '0x23',
        data: '0x9F'
      },
      {
          block: '4',
          state: 'N/A',
          address: '0x1',
          data: '0x9F'
        },
        {
          block: '5',
          state: 'DS',
          address: '0x23',
          data: '0x9F'
        },
        {
          block: '6',
          state: 'N/A',
          address: '0x1',
          data: '0x9F'
        },
        {
          block: '7',
          state: 'DI',
          address: '0x23',
          data: '0x9F'
        }
    ]
  
 

    return (
      <Panel bordered header={<h3>Main Memory</h3>}>
        <Table
          height={250}
          width={370}
          data={data}
          onRowClick={data => {
            console.log(data);
          }}
        >
          <Column width={70} align="center" fixed>
            <HeaderCell># Block</HeaderCell>
            <Cell dataKey="block" />
          </Column>

          <Column width={125}>
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

export default MainMemory;