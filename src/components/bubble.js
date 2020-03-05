import React, { Component } from 'react'

class Bubble extends Component {
  render() {
    return (
      <div className={this.props.color + ' bubble'} id={this.props.id}>
      <div className={this.props.color + '-line line-bubble'}/>
        <div className={this.props.color + '-title bubble-title'}>
          <div className='title-container'>
            {this.props.title !== '' ?
            <h4>{this.props.title}</h4> :
            null}
            {this.props.subtitle !== '' ?
            <p>{this.props.subtitle}</p>
            : null}
            <p>{this.props.time}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Bubble;
