'use-strict'

import React from 'react';
import { Table, Timeline } from 'rsuite';
import { Panel } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { setModalCacheL2Config } from '../CacheL2/CacheL2ModalSlice';
import models from '../Core/models';
import './MainControl.css';
const { Column, HeaderCell, Cell } = Table;

export const MainController = (props) => {
    // CPU data
    const no_render_currentCPU = JSON.parse(localStorage.getItem('currentCPU'));
    const dataInstruction = useSelector(state => state.CPUs.value[no_render_currentCPU]);

    const no_render_queue = JSON.parse(localStorage.getItem('QueueTask'));
    const no_render_cachesL1 = JSON.parse(localStorage.getItem('CachesL1'));
    const no_render_cacheL2 = JSON.parse(localStorage.getItem('CacheL2'));
    const no_render_RAM = JSON.parse(localStorage.getItem('RAM'));


    console.log(no_render_currentCPU,dataInstruction);

    





    const Task = (props) => {
        const { op, address, value, condition, processorId } = props;
        return (
            <Timeline.Item> Processor:{processorId} {op} {condition} {address} {value}</Timeline.Item>
        )
    }
    const GenerateTasks = (props) => {
        const queue = props.queue;
        console.log(queue);
        if (queue) {

            return (
                <Timeline >
                    {queue.map(task => {
                        const { op, address, value, condition, identifier, processorId } = task;
                        return (<Task processorId={processorId} key={identifier} op={op} address={address} value={value} condition={condition} />);
                    })}
                </Timeline>);
        }else {
            return (
                <p>Empty Queue</p>
            );
        }
    }
    return (
        <Panel bordered>
            <div className='Queue'>
                <GenerateTasks queue={no_render_queue} />
            </div>
        </Panel>
    );
}