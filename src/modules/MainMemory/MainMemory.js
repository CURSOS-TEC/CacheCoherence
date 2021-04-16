import React from 'react';
import { Table } from 'rsuite';
import { Panel } from 'rsuite';
import { useSelector } from 'react-redux'
const { Column, HeaderCell, Cell } = Table;

export const MainMemory = props => {
  const data = useSelector((state) => state.RAM.value);
  return (
    <Panel bordered header={<h3>Main Memory</h3>}>
      <Table
        height={250}
        width={370}
        data={data}
        onRowClick={data => {
          //console.log(data);
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