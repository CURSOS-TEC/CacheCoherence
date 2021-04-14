import React from 'react';
import { Panel } from 'rsuite';
import InstructorGenerator from '../Core/InstructionGenerator';
import models from '../Core/models';
import './CPU.css';
/**
 * Esta clase abstrae la simulación de 
 */
class CPU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instruction: null
    }
    this.fetchInstructions();
  }

  fetchInstructions() {
    setTimeout(() => {
      const generator = new InstructorGenerator();
      setInterval(() => {
        this.setState({
          instruction: generator.generateInstruction()
        })
          ;
      }, 2000);
    }, 2000);
  }



  render() {
    const DisplayOperation = () => {
      if (this.state.instruction?.op) {
        switch (this.state.instruction.op) {
          case models.INSTRUCTION_TYPES.WRITE:
            return (<span class="write-operation">
              {this.state.instruction.op}: [0x{this.state.instruction.address}]: {this.state.instruction.value}
            </span>);
          case models.INSTRUCTION_TYPES.READ:
            return (<span class="read-operation">
              {this.state.instruction.op}: [0x{this.state.instruction.address}]
            </span>);
          case models.INSTRUCTION_TYPES.CALC:
            return (<span class="calc-operation">
              {this.state.instruction.op}
            </span>);
          default:
            break;
        }
      }
      return null;
    };
    return (
      <Panel header="CPU" bordered>
        <p class="operation">
          <strong>P{this.props.id}</strong>: <DisplayOperation></DisplayOperation>
        </p>
      </Panel>
    );
  }
}
export default CPU;
