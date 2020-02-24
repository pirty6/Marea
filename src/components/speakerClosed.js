import React, { Component } from "react"

class SpeakerClosed extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div style={{display:`flex`, width:`32%`}} onClick={this.props.onClick}>
        <img style={{marginBottom:`1.05rem`, cursor:`pointer`}} src={this.props.image} />
      </div>
    )
  }
}

export default SpeakerClosed
