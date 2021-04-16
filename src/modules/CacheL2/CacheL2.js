import React, { useState } from 'react';
import { Table } from 'rsuite';
import { Panel } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';

const { Column, HeaderCell, Cell } = Table;

export const L2Cache = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.CacheL2.value);
  // const [ data, setData] = useState([
  //   {
  //     block: '0',
  //     state: 'DM',
  //     address: '0x1',
  //     data: '0x9F',
  //     list: [0, 0, 0, 0]
  //   },
  //   {
  //     block: '1',
  //     state: 'DS',
  //     address: '0x23',
  //     data: '0x9F',
  //     list: [0, 0, 0, 0]
  //   },
  //   {
  //     block: '2',
  //     state: 'DM',
  //     address: '0x1',
  //     data: '0x9F',
  //     list: [0, 0, 0, 0]
  //   },
  //   {
  //     block: '3',
  //     state: 'DI',
  //     address: '0x23',
  //     data: '0x9F',
  //     list: [0, 0, 0, 0]
  //   }
  // ]);

  
  const ProcessorStatusCell = ({ rowData, dataKey, ...props }) => {
    return (

      <Cell {...props}>
        {rowData[dataKey][props.pindex]}
      </Cell>
    );
  }
  return (
    <Panel bordered header={<h3>Cache L2: two-way-associative</h3>}>
      <Table
        height={250}
        width={750}
        data={data}
        onRowClick={data => {
          //console.log(data);
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

        <Column width={40} >
          <HeaderCell>P0</HeaderCell>
          <ProcessorStatusCell dataKey="list" pindex="0"></ProcessorStatusCell>
        </Column>

        <Column width={40} >
          <HeaderCell>P1</HeaderCell>
          <ProcessorStatusCell dataKey="list" pindex="1"></ProcessorStatusCell>
        </Column>

        <Column width={40} >
          <HeaderCell>P2</HeaderCell>
          <ProcessorStatusCell dataKey="list" pindex="2"></ProcessorStatusCell>
        </Column>

        <Column width={40} >
          <HeaderCell>P3</HeaderCell>
          <ProcessorStatusCell dataKey="list" pindex="3"></ProcessorStatusCell>
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

export default L2Cache;