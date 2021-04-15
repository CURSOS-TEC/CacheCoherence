import React from 'react';
import { Table, Tag } from 'rsuite';
import { Panel } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

export const L1Cache = props => {

    const data = [
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
    ];
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
          data={data}
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
export default L1Cache;