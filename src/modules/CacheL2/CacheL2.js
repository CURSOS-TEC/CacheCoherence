import React from 'react';
import { Table, Timeline } from 'rsuite';
import { Panel } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { setModalCacheL2Config } from './CacheL2ModalSlice';
import models from '../Core/models';
import './CacheL2.css';
const { Column, HeaderCell, Cell } = Table;

export const L2Cache = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.CacheL2.value);
  const queue = useSelector(state => state.QueueTask.value);
  const ProcessorStatusCell = ({ rowData, dataKey, ...props }) => {
    return (

      <Cell {...props}>
        {rowData[dataKey][props.pindex]}
      </Cell>
    );
  }

  const Task = (props) => {
    const { op, address, value, condition, processorId } = props;
    return (
      <Timeline.Item> Processor:{processorId} {op} {condition} {address} {value}</Timeline.Item>
    )
  }

  const GenerateTasks = (props) => {
    const queue = props.queue;
    console.log(queue);
    return (
      <Timeline >
        {queue.map(task => {
          const { op, address, value, condition, identifier, processorId } = task;
          return (<Task processorId={processorId} key={identifier} op={op} address={address} value={value} condition={condition} />);
        })}
      </Timeline>);
  }
  return (
    <Panel bordered header={<h3>Cache L2: two-way-associative</h3>}>
      <div className='CacheL2Container'>
        <div>
          <Table
            height={250}
            width={455}
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
              <HeaderCell className='headerCell'># Block</HeaderCell>
              <Cell dataKey="block" />
            </Column>

            <Column width={50} fixed>
              <HeaderCell className='headerCell'>State</HeaderCell>
              <Cell dataKey="state" />
            </Column>

            <Column width={40} >
              <HeaderCell className='headerCell'>P0</HeaderCell>
              <ProcessorStatusCell dataKey="list" pindex="0"></ProcessorStatusCell>
            </Column>

            <Column width={40} >
              <HeaderCell className='headerCell'>P1</HeaderCell>
              <ProcessorStatusCell dataKey="list" pindex="1"></ProcessorStatusCell>
            </Column>

            <Column width={40} >
              <HeaderCell className='headerCell'>P2</HeaderCell>
              <ProcessorStatusCell dataKey="list" pindex="2"></ProcessorStatusCell>
            </Column>

            <Column width={40} >
              <HeaderCell className='headerCell'>P3</HeaderCell>
              <ProcessorStatusCell dataKey="list" pindex="3"></ProcessorStatusCell>
            </Column>

            <Column width={105}>
              <HeaderCell className='headerCell'>Mem. Address</HeaderCell>
              <Cell dataKey="address" />
            </Column>

            <Column width={70}>
              <HeaderCell className='headerCell'>Data</HeaderCell>
              <Cell dataKey="data" />
            </Column>
          </Table>
        </div>
      </div>
    </Panel >



  );
}

export default L2Cache;