'use-strict'
import React from 'react';
import { Grid, Row, Col, Button, Input, InputGroup, Panel } from 'rsuite';
const styles = {
  marginBottom: 10
};
export const Dashboard = function () {
  const CustomInputGroupWidthButton = ({ placeholder, ...props }) => (
    <Row>
      <Col md="9">
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>P</InputGroup.Addon>
          <Input placeholder={placeholder} />
        </InputGroup>
      </Col>
      <Col md="9">
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>Op</InputGroup.Addon>
          <Input placeholder={placeholder} />
        </InputGroup>
      </Col>
      <Col md="9">
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>0x</InputGroup.Addon>
          <Input placeholder={placeholder} />
        </InputGroup>
      </Col>
      <Col md="9">
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>Value</InputGroup.Addon>
          <Input placeholder={placeholder} />
        </InputGroup>
      </Col>
    </Row>
  );
  return (
    <Panel header="Control Dashboard" bordered >
      <Grid fluid>
        <Row>
          <Col md={24}>
            <CustomInputGroupWidthButton></CustomInputGroupWidthButton>
          </Col>
        </Row>
        <Row>
          <Col md={12}><Button> Next Cycle </Button></Col>
          <Col md={12}> <Button> Continue </Button></Col>
        </Row>
      </Grid>
    </Panel>
  );
}
export default Dashboard;