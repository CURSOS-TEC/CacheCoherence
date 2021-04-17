'use-strict'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Modal, Divider, Button, Row, Col, InputGroup, SelectPicker } from 'rsuite';
import { setModalMainMemoryConfig } from './MainMemoryModalSlice';
import { write } from './MainMemorySlice';

export const RAMEditor = (props) => {
    const dispatch = useDispatch();

    const {
        block, // '0'
        state, // N/A'
        address, // '0x1'
        data, // '0x00'
        showModal,
        backDrop,
    } = useSelector((state) => state.RAMModal.value);

    const styles = {
        width: 120
    };
    const selectorStyles = { width: 170, };



    const addressOptions = [
        {
            "label": "0x0",
            "value": "0x0",
            "role": "ram_address"
        },
        {
            "label": "0x1",
            "value": "0x1",
            "role": "ram_address"
        },
        {
            "label": "0x2",
            "value": "0x2",
            "role": "ram_address"
        },
        {
            "label": "0x3",
            "value": "0x3",
            "role": "ram_address"
        },
        {
            "label": "0x4",
            "value": "0x4",
            "role": "ram_address"
        },
        {
            "label": "0x5",
            "value": "0x5",
            "role": "ram_address"
        },
        {
            "label": "0x6",
            "value": "0x6",
            "role": "ram_address"
        },
        {
            "label": "0x7",
            "value": "0x7",
            "role": "ram_address"
        }
    ];

    let newRAMLine = {
        block, // '0'
        state, // N/A'
        address, // '0x1'
        data, // '0x00'
    };
    const close = () => {
        dispatch(setModalMainMemoryConfig(
            {
                block,
                state,
                address,
                data,
                backDrop: false,
                showModal: false
            }
        ));
    }


    const CL2Editor = ({ placeholder, ...props }) => (
        <div className="inputContainerModal2">
            <div>
                # Block {block}
            </div>
            <div >
                <InputGroup {...props} inside style={styles}>
                    <SelectPicker
                        size="md"
                        placeholder="Address"
                        data={addressOptions}
                        style={selectorStyles}
                        defaultValue={newRAMLine.address}
                        onChange={(value, event) => {
                            newRAMLine.address = value;
                        }}
                    />
                </InputGroup>
            </div>
            <div >
                <InputGroup {...props} inside style={styles}>
                    <Input defaultValue={newRAMLine.data} placeholder={placeholder} onChange={(value, event) => {
                        newRAMLine.data = value;
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
                    <Modal.Title>RAM Line editor
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CL2Editor></CL2Editor>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        console.log(newRAMLine);
                        dispatch(write(newRAMLine));
                        close();
                    }} appearance="primary">
                        Update RAM line
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
export default RAMEditor;