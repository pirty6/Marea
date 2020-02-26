import React, { Component } from "react"

class SpeakerClosed extends Component {
  render() {
    return (
      <div style={{display:`flex`, width:`32%`}} onClick={this.props.onClick}>
        <img alt={this.props.name} style={{marginBottom:`1.05rem`, cursor:`pointer`}} src={this.props.image} />
      </div>
    )
  }
}

export default SpeakerClosed
