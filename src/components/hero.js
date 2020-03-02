import React, { Component } from "react"
//import PropTypes from "prop-types"

class Hero extends Component {
  render() {
    return (
      <div className='hero'>
      <div className='box' style={{position:`absolute`, width:`100vw`,
        height:`100vh`, margin:`-20px`,
        overflow:`hidden`,
        backgroundColor: `blue`,
        transform: `translate3d(0, 0, 0)`,
        zIndex:`-1`
      }}>
      <div className='wave -one'></div>
      <div className='wave -two'></div>
      <div className='wave -three'></div>
      </div>
      <div style={{height:`100%`, display:`flex`, flexFlow:`column`}}>
      <div style={{display:`flex`, justifyContent:`center`,
        alignItems:`center`, flex: `1 1 auto`}}>
        {this.props.show ? <img style={{height: `20.4vh`}} src='/icons/marea-logo.svg' alt='marea' />
        : null
        }
        </div>
        </div>
        </div>
      )
  }
}

export default Hero
