import React, { Component } from "react"


class Logo extends Component {
  state = {moveM: false, showArea: false, showOla: false,
  count:0, countTotal:0, tg: true}

  toggle = () => {
    while(this.state.countTotal < 2) {
      if(this.state.tg) {
        this.setState({count: this.state.count + 1});
      } else {
        this.setState({count:this.state.count - 1});
      }
      if(this.state.count === 2 || this.state.count === 0) {
        this.setState({
          tg: !this.state.tg,
          countTotal: this.state.countTotal + 1
        })
      }
    }
  }


  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };


  wait = async () => {
    // this.toggle();
    await this.sleep(1000);
    this.setState({
      moveM: true
    });
    await this.sleep(1000);
    this.setState({
      showArea: true
    });
    await this.sleep(1000);
    this.setState({
      showOla: true,
    });
  };

  componentDidMount() {
    this.wait();
  }

  render() {
    return (
      <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1346.93 468.03"
      style={{enableBackground:`new 0 0 1346.93 468.03`, height: `20.4vh`, marginTop:`-5px`, marginLeft:`-1px`}}
      xmlnsxlinkpace="preserve">
        <g id="logo" dataname="Layer 1">
          <g id={this.state.showArea ? "area-show" : "area-no-show" }>
            <path className="cls-1" d="M615.94,84.89q8.68,0,8.69,8.92V288.1q0,8.92-8.69,8.92t-8.69-8.92V247.33q-29.18,55.42-86.88,55.42-42.81,0-71.36-33.12t-28.54-77.72q0-44.58,28.54-77.72t71.36-33.13q57.71,0,86.88,55.42V93.8C607.25,87.87,610.14,84.89,615.94,84.89ZM520.37,284.28q35.37,0,59-27.83T603,191.91q0-36.71-23.58-64.53t-59-27.84q-35.37,0-58.95,27.84t-23.58,64.53q0,36.69,23.58,64.54T520.37,284.28Z"/>
            <path className="cls-1" d="M799.61,86.17q9.32,0,9.31,8.26c0,5.5-2.7,8.68-8.07,9.53q-36.63,5-55.85,34.29-18,26-18,65.41v85.11q0,8.88-8.69,8.89t-8.69-8.89V95.06q0-8.88,8.69-8.89T727,95v39a105.92,105.92,0,0,1,30.41-33.31Q778.5,86.19,799.61,86.17Z"/>
            <path className="cls-1" d="M962.2,81.07q42.81,0,71.67,33.3t28.85,78.12q0,9-9.34,9H879.66q3.11,33.88,26.16,58.35t56,24.47q45.46,0,71.62-37c2.08-2.92,4.57-4.39,7.48-4.39q8.71,0,8.72,8.92a8.06,8.06,0,0,1-1.24,4.46q-26.07,46.51-86.26,46.5-42.21,0-71-33.12T862.23,192q0-44.58,28.55-77.72T962.2,81.07ZM879.67,183h164.44q-3.1-34.12-26.11-58.8T961.89,99.55q-33,0-56.06,24.65T879.67,183Z"/>
            <path className="cls-1" d="M1338.24,84.89q8.68,0,8.69,8.92V288.1q0,8.92-8.69,8.92t-8.69-8.92V247.33q-29.17,55.42-86.88,55.42-42.81,0-71.36-33.12t-28.54-77.72q0-44.58,28.54-77.72t71.36-33.13q57.7,0,86.88,55.42V93.8C1329.55,87.87,1332.44,84.89,1338.24,84.89Zm-95.57,199.39q35.37,0,58.95-27.83t23.58-64.54q0-36.71-23.58-64.53t-58.95-27.84q-35.37,0-59,27.84t-23.58,64.53q0,36.69,23.58,64.54T1242.67,284.28Z"/>
          </g>
          <g id={this.state.showOla ? "nueva-ola-show" : "nueva-ola-no-show" }>
            <path className="cls-2" d="M6,378.09a4.1,4.1,0,0,1,3.3,1.47,4.71,4.71,0,0,1,1.25,3.08V462.3a4.6,4.6,0,0,1-1.25,3.15A4.22,4.22,0,0,1,6,466.84a4.42,4.42,0,0,1-3.37-1.39A4.5,4.5,0,0,1,1.3,462.3V382.64a4.51,4.51,0,0,1,1.32-3.08A4.32,4.32,0,0,1,6,378.09Z"/>
            <path className="cls-2" d="M71.27,415.79a4.32,4.32,0,0,1,3.38,1.47A4.7,4.7,0,0,1,76,420.49v41.37a4.52,4.52,0,0,1-4.34,4.69H71.3a4.37,4.37,0,0,1-3.22-1.32,4.55,4.55,0,0,1-1.32-3.37v-.59A28,28,0,0,1,59.17,466a23,23,0,0,1-18.63-.44,25.25,25.25,0,0,1-7.78-5.86,27.6,27.6,0,0,1-7-18.34,27.58,27.58,0,0,1,7-18.19,25.44,25.44,0,0,1,7.78-5.87,23,23,0,0,1,18.63-.44,28.3,28.3,0,0,1,7.56,4.69v-1a4.69,4.69,0,0,1,1.32-3.23A4.15,4.15,0,0,1,71.27,415.79ZM50.44,458.48a14.1,14.1,0,0,0,11.08-5.21,18.18,18.18,0,0,0,3.08-5.5,18.89,18.89,0,0,0,1.1-6.45A18.68,18.68,0,0,0,64.6,435a18.39,18.39,0,0,0-3.08-5.5,14.12,14.12,0,0,0-11.08-5.21,13.71,13.71,0,0,0-6.16,1.39,15.13,15.13,0,0,0-4.84,3.82,18.57,18.57,0,0,0-3.23,5.5A17.53,17.53,0,0,0,35,441.32a18,18,0,0,0,1.17,6.45,18.36,18.36,0,0,0,3.23,5.5,15.13,15.13,0,0,0,4.84,3.82A13.59,13.59,0,0,0,50.44,458.48Z"/>
            <path className="cls-2" d="M160,414.91a18.63,18.63,0,0,1,8.58,1.91A19.79,19.79,0,0,1,175,422a22.49,22.49,0,0,1,4,7.27,26.82,26.82,0,0,1,1.32,8.43v24.21a4.37,4.37,0,0,1-1.46,3.37,4.74,4.74,0,0,1-3.23,1.32,4.41,4.41,0,0,1-3.23-1.32,4.55,4.55,0,0,1-1.32-3.37V437.65a19.2,19.2,0,0,0-.66-5.06,12.54,12.54,0,0,0-2-4.26,11.42,11.42,0,0,0-3.45-3,9.61,9.61,0,0,0-4.84-1.18,11.3,11.3,0,0,0-6,1.54,11.81,11.81,0,0,0-4,4.19A20.39,20.39,0,0,0,147.7,436a34.08,34.08,0,0,0-.73,7.12V462a4.52,4.52,0,0,1-4.33,4.7h-.36a4.37,4.37,0,0,1-3.23-1.32,4.59,4.59,0,0,1-1.32-3.38V420.49a4.59,4.59,0,0,1,1.32-3.38,4.37,4.37,0,0,1,3.23-1.32,4.5,4.5,0,0,1,3.08,1.18,4.82,4.82,0,0,1,1.61,2.78,21.89,21.89,0,0,1,5.94-3.52A18.9,18.9,0,0,1,160,414.91Z"/>
            <path className="cls-2" d="M234.4,416.23a5.05,5.05,0,0,1,4.7,4.7v41.51a4.1,4.1,0,0,1-1.47,3.3A4.9,4.9,0,0,1,234.4,467a4.68,4.68,0,0,1-4.54-4.11,21.14,21.14,0,0,1-5.94,3.74,18.12,18.12,0,0,1-7.12,1.4,19.08,19.08,0,0,1-8.66-1.91,18.71,18.71,0,0,1-6.38-5.13,23,23,0,0,1-3.88-7.34,27.61,27.61,0,0,1-1.32-8.51v-24.2a4.69,4.69,0,0,1,1.32-3.23,4.3,4.3,0,0,1,3.37-1.47,4.17,4.17,0,0,1,3.23,1.47,4.69,4.69,0,0,1,1.32,3.23v24.2a19.2,19.2,0,0,0,.66,5.06,12.94,12.94,0,0,0,2,4.33A11,11,0,0,0,212,457.6a9.51,9.51,0,0,0,4.84,1.18,10.9,10.9,0,0,0,6.53-1.84,12,12,0,0,0,4-4.91,26.43,26.43,0,0,0,2-7.19,60.55,60.55,0,0,0,.59-8.51v-15.4a4.69,4.69,0,0,1,1.32-3.23A4.18,4.18,0,0,1,234.4,416.23Z"/>
            <path className="cls-2" d="M280.91,415.06a22,22,0,0,1,9.9,2.2,25.44,25.44,0,0,1,7.78,5.87,27.58,27.58,0,0,1,7,18.19,4.42,4.42,0,0,1-1.39,3.37,4.62,4.62,0,0,1-3.3,1.32H266.24a17.64,17.64,0,0,0,5.21,8.88,13.36,13.36,0,0,0,9.46,3.59,15.55,15.55,0,0,0,13.35-6.75,5,5,0,0,1,3.81-2.2,4.59,4.59,0,0,1,3.38,1.32,4.41,4.41,0,0,1,1.32,3.23,3.93,3.93,0,0,1-.22,1.32,5.27,5.27,0,0,1-.52,1,20.29,20.29,0,0,1-9,8.51,27.72,27.72,0,0,1-12.1,2.78,22,22,0,0,1-9.9-2.2,25.25,25.25,0,0,1-7.78-5.86,27.47,27.47,0,0,1,0-36.53,25.44,25.44,0,0,1,7.78-5.87A22.06,22.06,0,0,1,280.91,415.06Zm14.67,21.71a18,18,0,0,0-5.21-8.8,13.24,13.24,0,0,0-9.46-3.67,13.1,13.1,0,0,0-9.32,3.67,19,19,0,0,0-5.35,8.8Z"/>
            <path className="cls-2" d="M357.19,415.94a4.52,4.52,0,0,1,4.7,4.33v.36a32.16,32.16,0,0,1-1.1,3.45q-1.11,3.15-2.86,7.85T354.11,442q-2.06,5.36-4,10.19t-3.3,8.44q-1.4,3.6-1.69,4.47v-.44a4.47,4.47,0,0,1-1.76,2.5,5.13,5.13,0,0,1-2.78.73,4.75,4.75,0,0,1-4.7-2.79q-.3-.87-1.69-4.47t-3.3-8.44q-1.9-4.83-4-10.19T323.15,432c-1.12-3.13-2.08-5.75-2.86-7.85a29.79,29.79,0,0,1-1.17-3.45,4.52,4.52,0,0,1,4.34-4.69h.35a4,4,0,0,1,2.72,1,5.36,5.36,0,0,1,1.54,2.13l12.47,31.83q2.93-7.92,6.16-15.91t6.24-16a5.06,5.06,0,0,1,1.61-2.13A4.09,4.09,0,0,1,357.19,415.94Z"/>
            <path className="cls-2" d="M419.69,415.79a4.3,4.3,0,0,1,3.37,1.47,4.69,4.69,0,0,1,1.32,3.23v41.37a4.52,4.52,0,0,1-4.34,4.69h-.35a4.41,4.41,0,0,1-3.23-1.32,4.55,4.55,0,0,1-1.32-3.37v-.59a27.74,27.74,0,0,1-7.56,4.69,23,23,0,0,1-18.63-.44,25.49,25.49,0,0,1-7.77-5.86,27.45,27.45,0,0,1,0-36.53,25.52,25.52,0,0,1,7.77-5.87,23,23,0,0,1,18.63-.44,27.9,27.9,0,0,1,7.56,4.69v-1a4.69,4.69,0,0,1,1.32-3.23A4.19,4.19,0,0,1,419.69,415.79Zm-20.83,42.69a14.1,14.1,0,0,0,11.07-5.21,18.18,18.18,0,0,0,3.08-5.5,19,19,0,0,0-3.08-18.26,14.1,14.1,0,0,0-11.07-5.21,13.72,13.72,0,0,0-6.17,1.39,15.24,15.24,0,0,0-4.84,3.82,18.8,18.8,0,0,0-3.22,5.5,17.44,17.44,0,0,0-1.18,6.31,17.8,17.8,0,0,0,1.18,6.45,18.54,18.54,0,0,0,3.22,5.5,15.24,15.24,0,0,0,4.84,3.82,13.59,13.59,0,0,0,6.17,1.39Z"/>
            <path className="cls-2" d="M510.2,414.91a22.21,22.21,0,0,1,9.91,2.2,25.52,25.52,0,0,1,7.77,5.87,27.45,27.45,0,0,1,0,36.53,25.52,25.52,0,0,1-7.77,5.87,23.42,23.42,0,0,1-19.81,0,25.52,25.52,0,0,1-7.77-5.87,26.7,26.7,0,0,1-5.14-8.44,27.27,27.27,0,0,1-1.83-9.9,27.58,27.58,0,0,1,7-18.19,25.52,25.52,0,0,1,7.77-5.87A22,22,0,0,1,510.2,414.91Zm0,43.43a14,14,0,0,0,6.24-1.4,14.25,14.25,0,0,0,4.84-3.81,18.18,18.18,0,0,0,3.08-5.5,19.19,19.19,0,0,0,1.1-6.46,18.58,18.58,0,0,0-1.1-6.31,17.51,17.51,0,0,0-3.08-5.43,14.76,14.76,0,0,0-4.84-3.74,14.18,14.18,0,0,0-6.24-1.39,13.71,13.71,0,0,0-6.16,1.39,15.78,15.78,0,0,0-4.84,3.74,18,18,0,0,0-3.23,18.2,19,19,0,0,0,3.23,5.5,15.21,15.21,0,0,0,4.84,3.81A13.69,13.69,0,0,0,510.2,458.34Z"/>
            <path className="cls-2" d="M556.27,378.09a4.14,4.14,0,0,1,3.3,1.47,4.65,4.65,0,0,1,1.24,3.08V462.3a4.6,4.6,0,0,1-1.24,3.15,4.22,4.22,0,0,1-3.3,1.39,4.63,4.63,0,0,1-4.7-4.54V382.64a4.51,4.51,0,0,1,1.32-3.08A4.32,4.32,0,0,1,556.27,378.09Z"/>
            <path className="cls-2" d="M621.55,415.79a4.33,4.33,0,0,1,3.37,1.47,4.69,4.69,0,0,1,1.32,3.23v41.37a4.52,4.52,0,0,1-4.34,4.69h-.35a4.37,4.37,0,0,1-3.23-1.32,4.55,4.55,0,0,1-1.32-3.37v-.59a27.74,27.74,0,0,1-7.56,4.69,23,23,0,0,1-18.63-.44,25.49,25.49,0,0,1-7.77-5.86,26.89,26.89,0,0,1-5.14-8.44,27.32,27.32,0,0,1,5.17-28.09,25.52,25.52,0,0,1,7.77-5.87,23,23,0,0,1,18.63-.44,27.9,27.9,0,0,1,7.56,4.69v-1a4.69,4.69,0,0,1,1.32-3.23A4.16,4.16,0,0,1,621.55,415.79Zm-20.84,42.69a14.12,14.12,0,0,0,11.08-5.21,18.18,18.18,0,0,0,3.08-5.5,18.89,18.89,0,0,0,1.1-6.45,18.58,18.58,0,0,0-1.1-6.31,18.18,18.18,0,0,0-3.08-5.5,14.12,14.12,0,0,0-11.08-5.21,13.71,13.71,0,0,0-6.16,1.39,15.13,15.13,0,0,0-4.84,3.82,19,19,0,0,0-3.23,5.5,17.65,17.65,0,0,0-1.17,6.31,18,18,0,0,0,1.17,6.45,18.83,18.83,0,0,0,3.23,5.5,15.13,15.13,0,0,0,4.84,3.82,13.58,13.58,0,0,0,6.16,1.39Z"/>
          </g>
          <g id={this.state.moveM ? "move" : "no-move"} dataname="Capa 2">
            <path className="cls-1 red" d="M254.46,74.38q38.49,0,61.34,28.38t22.84,67.53v116.8q0,9.14-9.14,9.13c-6.1,0-9.13-3-9.13-9.1V170.71q0-31.87-17-53.34-17.61-24.06-48.94-24.06-37.85,0-58.72,34.47-17,29.26-17,69.59v89.76q0,9.11-9.13,9.1t-9.14-9.1V170.71q0-31.87-17-53.34Q125.28,93.31,94.6,93.31q-39.81,0-60,28.62Q17,148.6,18.26,194.78v92.36q0,9.11-9.13,9.1c-6.1,0-9.13-3-9.13-9.1V88.05q0-9.1,9.13-9.1t9.13,9v32.77Q44.35,74.38,94.6,74.38q58.07,0,77.65,58.07Q197.69,74.38,254.46,74.38Z"/>
            <path className="cls-3 purple" d="M9.13,79.12q9.14,0,9.13,9v32.77Q44.35,74.56,94.6,74.55q58.07,0,77.65,58.07,25.44-58.07,82.21-58.07,38.49,0,61.34,28.38t22.84,67.53v-39.9q0-39.15-22.84-67.53T254.46,34.65q-56.6,0-82.06,57.75a.15.15,0,0,1-.2.07.16.16,0,0,1-.07-.07Q152.51,34.66,94.6,34.66q-50,0-76.08,45.86a.14.14,0,0,1-.19,0,.12.12,0,0,1-.07-.11V48.22q0-9-9.13-9T0,48.33V88.22Q0,79.12,9.13,79.12Z"/>
            <path className="cls-2 blue" d="M9.13,39.23q9.14,0,9.13,9V80.46a.14.14,0,0,0,.26.06Q44.6,34.67,94.6,34.66q57.89,0,77.53,57.73a.15.15,0,0,0,.2.07.16.16,0,0,0,.07-.07q25.46-57.73,82.06-57.75Q293,34.66,315.8,63t22.84,67.53V95.91q0-39.15-22.84-67.53T254.46,0Q197.7,0,172.25,58.07,152.67,0,94.6,0,44.35,0,18.26,46.33V13.56q0-9-9.13-9T0,13.67V48.33Q0,39.22,9.13,39.23Z"/>
          </g>
        </g>
      </svg>
    )
  }
}

export default Logo
