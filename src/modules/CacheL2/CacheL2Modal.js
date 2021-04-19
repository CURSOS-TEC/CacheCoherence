'use-strict'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Modal, Divider, Button, InputGroup, SelectPicker, Checkbox } from 'rsuite';
import models from '../Core/models';
import './CacheL2Modal.css';
import { setModalCacheL2Config } from './CacheL2ModalSlice';
import { setBlock } from './CacheL2Slice';

export const CacheL2Editor = (props) => {
  const dispatch = useDispatch();

  const {
    address,
    backDrop,
    block,
    id,
    showModal,
    state,
    data,
    list
  } = useSelector((state) => state.CacheL2Modal.value);

  console.log(state, 'from data');
  const styles = {
    width: 120
  };
  const selectorStyles = { width: 170, };


  const coherenceStateOptions2 = [
    {
      "label": "Directory Modified",
      "value": models.CACHE_L2_STATES.DIRECTORY_MODIFIED,
      "role": "cacheL2"
    },
    {
      "label": "Directory Shared",
      "value": models.CACHE_L2_STATES.DIRECTORY_SHARED,
      "role": "cacheL2"
    },
    {
      "label": "Directory Invalid",
      "value": models.CACHE_L2_STATES.DIRECTORY_INVALID,
      "role": "cacheL2"
    }
  ];
  const addressOptions = [
    {
      "label": "0x0",
      "value": "0x0",
      "role": "address"
    },
    {
      "label": "0x1",
      "value": "0x1",
      "role": "address"
    },
    {
      "label": "0x2",
      "value": "0x2",
      "role": "address"
    },
    {
      "label": "0x3",
      "value": "0x3",
      "role": "address"
    },
    {
      "label": "0x4",
      "value": "0x4",
      "role": "address"
    },
    {
      "label": "0x5",
      "value": "0x5",
      "role": "address"
    },
    {
      "label": "0x6",
      "value": "0x6",
      "role": "address"
    },
    {
      "label": "0x7",
      "value": "0x7",
      "role": "address"
    }
  ];

  /**
   * id,
   * block,
   * state,
   * address,
   * data
  */
  let newCacheLine = {
    address,
    block,
    id: `${id}`,
    state,
    data,
    list
  };
  const close = () => {
    dispatch(setModalCacheL2Config(
      {
        address,
        backDrop: false,
        block,
        id,
        showModal: false,
        state,
        data,
        list
      }
    ));
  }
  const CheckedProcessor = (props) => {
    return (
      <div>
        <p>P{props.id}</p>
        <Checkbox
          defaultChecked={newCacheLine.list[props.id]}
          onChange={
            (value, checked, event) => {
              newCacheLine.list = newCacheLine.list.slice();
              newCacheLine.list[props.id] = Number(checked);
              console.log(newCacheLine);
            }
          }> </Checkbox>
      </div>
    );
  }

  const CL2Editor = ({ placeholder, ...props }) => (
    <div className="inputContainerModal2">
      <div>
        # Block {block}
      </div>
      <div >
        <InputGroup {...props} inside style={styles} >
          <SelectPicker
            size="md"
            placeholder="State"
            data={coherenceStateOptions2}
            style={selectorStyles}
            defaultValue={newCacheLine.state}
            onChange={(value) => {
              newCacheLine.state = value;
              console.log(newCacheLine);
            }}
          />
        </InputGroup>
      </div>
      <div className="processorsInput">
        <CheckedProcessor id={0}></CheckedProcessor>
        <CheckedProcessor id={1}></CheckedProcessor>
        <CheckedProcessor id={2}></CheckedProcessor>
        <CheckedProcessor id={3}></CheckedProcessor>
      </div>
      <div >
        <InputGroup {...props} inside style={styles}>
          <SelectPicker
            size="md"
            placeholder="Address"
            data={addressOptions}
            style={selectorStyles}
            defaultValue={newCacheLine.address}
            onChange={(value, event) => {
              newCacheLine.address = value;
            }}
          />
        </InputGroup>
      </div>
      <div >
        <InputGroup {...props} inside style={styles}>
          <Input defaultValue={newCacheLine.data} placeholder={placeholder} onChange={(value, event) => {
            newCacheLine.data = value;
          }} />
        </InputGroup>
      </div>
      <Divider />
    </div>
  );

  return (

    // const { backdrop, show } = this.state;
    <div className="modal-container">
      <Modal size={'md'} backdrop={backDrop} show={showModal} onHide={() => {

      }}>
        <Modal.Header>
          <Modal.Title>Cache L2 Line editor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CL2Editor></CL2Editor>


        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {
            console.log(newCacheLine);
            dispatch(setBlock(newCacheLine));
            close();
          }} appearance="primary">
            Update cache line
            </Button>
          <Button onClick={() => {
            close()
          }} appearance="subtle">
            Cancel
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default CacheL2Editor;