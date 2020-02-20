import React from "react"
//import PropTypes from "prop-types"

const Hero = () => {
  return (
    <div class='hero'>
      <div class='box' style={{position:`absolute`, width:`calc(100vw - 20px)`,
                               height:`100vh`, margin:`-20px`,
                               overflow:`hidden`,
                               backgroundColor: `blue`,
                               transform: `translate3d(0, 0, 0)`,
                               zIndex:`-1`
                             }}>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
      </div>
      <div style={{height:`100%`, display:`flex`, flexFlow:`column`}}>
        <div style={{display:`flex`, justifyContent:`center`,
                    alignItems:`center`, flex: `1 1 auto`}}>
          <img style={{height: `20.4vh`}} src='/icons/marea-logo.svg' alt='marea' />
        </div>
      </div>
    </div>
  )
}

export default Hero
