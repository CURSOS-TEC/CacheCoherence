import React from 'react';
import { Panel } from 'rsuite';
class CPU extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel header="CPU" bordered>
        <p> P3 : WRITE 1010;4A3B  </p>
      </Panel>
    );
  }
}
export default CPU;
