import React from 'react'
import Calendar from './calendar'

const Schedule = () => (
  <div>
    <div style={{display:`flex`, width:`100%`, justifyContent:`flex-end`}}>
      <h1 style={{flex:`1`, display:`flex`, justifyContent:`flex-end`}}>02</h1>
      <div style={{flex:`3`}}>
        <div style={{width:`100%`, borderBottom:`2px solid #fff`}}>
          <h1>&nbsp;Programa</h1>
        </div>
      </div>
    </div>
    <div style={{display:`flex`, flexDirection:`column`, alignItems:`center`}}>
      <div style={{display:`flex`, flexDirection:`column`, alignItems:`center`,
        marginTop:`5rem`}}>
        <h1>27</h1>
        <h4 style={{marginTop: `-1.2rem`}}>VIERNES MARZO 2020</h4>
      </div>
      <Calendar />
    </div>
  </div>
)

export default Schedule
