import React, { Component } from "react"

class SpeakerClosed extends Component {
  render() {
    return (
      <div style={{display:`flex`, width:`32%`}} onClick={this.props.onClick}>
        <img alt={this.props.name} className='closed-speaker-img'
        style={{marginBottom:`1.05rem`, cursor:`pointer`,
          maxHeight:`800px`, width:`95%`}} src={this.props.image} />
      </div>
    )
  }
}

export default SpeakerClosed
