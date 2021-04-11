import React from 'react';
import { Panel } from 'rsuite';
class Control extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Panel header="Control" bordered>
        <p> write miss block 1 address 1010 </p>
      </Panel>
    );
  }
}
export default Control;