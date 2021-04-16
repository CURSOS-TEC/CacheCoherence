'use-strict'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Modal, Divider, Button, Row, Col, InputGroup, SelectPicker } from 'rsuite';
import models from '../Core/models';
import { setModalCacheL1Config } from './CacheL1ModalSlice';
import { setBlock } from './CacheL1Slice';
import './CacheL1Modal.css';
/**
 * 
 * @param {*} props {id: cache (string), id: block, state, memory_address, data}
 * @returns 
 */
export const CacheL1Editor = (props) => {
  const styles = {

  };
  const selectorStyles = { width: 100, };

  const dispatch = useDispatch();

  const {
    address,
    backDrop,
    blockId,
    id,
    showModal,
    state,
    data,
  } = useSelector((state) => state.CacheL1Modal.value);


  const close = () => {
    dispatch(setModalCacheL1Config(
      {
        id: null,
        blockId: null,
        address: null,
        value: null,
        state: null,
        showModal: false,
        backDrop: null,
      }
    ));

  }

  const coherenceStateOptions = [
    {
      "label": "Modified",
      "value": models.CACHE_L1_STATES.MODIFIED,
      "role": "cacheL1"
    },
    {
      "label": "Shared",
      "value": models.CACHE_L1_STATES.SHARED,
      "role": "cacheL1"
    },
    {
      "label": "Invalid",
      "value": models.CACHE_L1_STATES.INVALID,
      "role": "cacheL1"
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
  const newCacheLine = {
    address,
    block : blockId,
    id : `${id}`,
    state,
    data,
  };


  const CL1Editor = ({ placeholder, ...props }) => (
    <div className="inputContainerModal">
      <div>
        # Block {blockId}
      </div>
      <div >
        <InputGroup {...props} inside style={styles} >
          <InputGroup.Addon>State</InputGroup.Addon>
          <SelectPicker
            size="md"
            placeholder="State"
            data={coherenceStateOptions}
            style={selectorStyles}
            onChange={(value, event) => {
              newCacheLine.state = value;
            }}
          />
        </InputGroup>
      </div>
      <div >
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>0x</InputGroup.Addon>
          <SelectPicker
            size="md"
            placeholder="Address"
            data={addressOptions}
            style={selectorStyles}
            onChange={(value, event) => {
              newCacheLine.address = value;
            }}
          />
        </InputGroup>
      </div>
      <div >
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>Val</InputGroup.Addon>
          <Input placeholder={placeholder} onChange={(value, event) => {
            newCacheLine.value = value;
          }} />
        </InputGroup>
      </div>
      <Divider />
    </div>
  );

  return (

    // const { backdrop, show } = this.state;
    <div className="modal-container">
      <Modal backdrop={backDrop} show={showModal} onHide={() => {

      }}>
        <Modal.Header>
          <Modal.Title>Cache L1 Line editor for Node {id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CL1Editor></CL1Editor>


        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {
            //console.log(newCacheLine);
            dispatch(setBlock(newCacheLine));
            close()
          }} appearance="primary">
            Update cache line
            </Button>
          <Button onClick={() => { close() }} appearance="subtle">
            Cancel
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default CacheL1Editor;