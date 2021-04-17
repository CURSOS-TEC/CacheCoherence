import React, { useState } from 'react';
import { Table } from 'rsuite';
import { Panel } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { setBlock } from './CacheL2Slice';
import { setModalCacheL2Config } from './CacheL2ModalSlice';

const { Column, HeaderCell, Cell } = Table;

export const L2Cache = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.CacheL2.value);
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
        onRowClick={dataRow => {
          const {
            block, // the block id
            address, // the address that will be stored
            data, // the value to be stored 
            state, // the state of the data,
            list
          } = dataRow;
          console.log(dataRow);
          dispatch(setModalCacheL2Config({
            showModal: true,
            backDrop: true,
            id: '0',
            block, // the block id
            address, // the address that will be stored
            data, // the value to be stored 
            state, // the state of the data,
            list
          }));
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
    </Panel >
  );
}

export default L2Cache;