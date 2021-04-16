import React from 'react';
import { Table, Tag } from 'rsuite';
import { Panel } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { setModalCacheL1Config } from '../CacheL1/CacheL1ModalSlice';
const { Column, HeaderCell, Cell } = Table;

export const CacheL1 = props => {
  const dispatch = useDispatch();
  const data = useSelector(
    state => state.CachesL1.value[props.id]);
  const StateCell = ({ rowData, dataKey, ...props }) => {
    return (<Cell {...props}>
      <Tag color={rowData[dataKey] === 'S' ? 'green' : (rowData[dataKey] === 'M' ? 'orange' : 'red')}>{rowData[dataKey]}</Tag>
    </Cell>)
  }
  return (
    <Panel bordered header={<strong>Cache L1 one-way-associative</strong>}>
      <Table
        height={135}
        width={370}
        data={data.blocks}
        onRowClick={dataRow => {
          const { address, block, data, state } = dataRow;
          dispatch(setModalCacheL1Config(
            {
              id: props.id,
              blockId:block,
              address: address,
              data: data,
              state: state,
              showModal: true,
              backDrop: true,
            }
          ));
        }}
      >
        <Column width={70} align="center" fixed>
          <HeaderCell># Block</HeaderCell>
          <Cell dataKey="block" />
        </Column>

        <Column width={115} fixed>
          <HeaderCell>Coherence State</HeaderCell>
          {/* <Cell dataKey="state" /> */}
          <StateCell dataKey="state" ></StateCell>
        </Column>

        <Column width={115}>
          <HeaderCell>Mem Address</HeaderCell>
          <Cell dataKey="address" />
        </Column>

        <Column width={70}>
          <HeaderCell>Data</HeaderCell>
          <Cell dataKey="data" >

          </Cell>
        </Column>
      </Table>

    </Panel>
  );
}
export default CacheL1;