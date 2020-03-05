import React, { Component } from 'react'
import Bubble from './bubble'

class Calendar extends Component {
  render() {
    return (
      <div style={{width:`100%`, position:`relative`, paddingBottom:`7rem`}}>
        <Bubble
        title='Océano de Prendas'
        subtitle='Intercambio de Ropa'
        time='10:00AM - 7:30PM'
        color='blue'
        id=''
        />
        <Bubble
        title=''
        subtitle=''
        time='10:00AM - 10:10AM'
        color='red'
        id='apertura'
        />
        <Bubble
        title='Contracorriente'
        subtitle='Del Papel a la Práctica'
        time='10:10AM - 11:30AM'
        color='purple'
        id='Contracorriente'
        />
        <Bubble
        title='Desembocaduras'
        subtitle='Puntos de Encuentro'
        time='11:30AM - 1:30PM'
        color='purple'
        id='desembocaduras'
        />
        <Bubble
        title='Cuando el Río Suena'
        subtitle='Sones de Protesta'
        time='1:30PM - 3:00PM'
        color='red'
        id='rio'
        />
        <Bubble
        title='Tsunami'
        subtitle='Mujeres en la Literatura'
        time='3:00PM - 5:30PM'
        color='purple'
        id='tsunami'
        />
        <Bubble
        title='Después del Temporal'
        subtitle='Proyección del Documental Titixie'
        time='5:30PM - 7:00PM'
        color='purple'
        id='temporal'
        />
        <Bubble
        title='Cierre'
        subtitle=''
        time='7:00PM - 7:30PM'
        color='red'
        id='cierre'
        />
        <Bubble
        title='Rompeolas'
        subtitle='Taller de Defensa Personal'
        time='11:30AM - 1:30PM'
        color='purple'
        id='rompeolas'
        />
        <Bubble
        title='Navegando'
        subtitle='Taller de Cuidados Íntimos'
        time='5:30PM - 7:00PM'
        color='purple'
        id='navegando'
        />
        <div className='row'>
          <div className='hour'>
            <p>10:00 AM</p>
          </div>
          <div className="line" />
        </div>
        <div className='row'>
          <div className='hour'>
            <p>11:00 AM</p>
          </div>
          <div className="line" />
        </div>
        <div className='row'>
          <div className='hour'>
            <p>12:00 PM</p>
          </div>
          <div className="line" />
        </div>
        <div className='row'>
          <div className='hour'>
            <p>1:00 PM</p>
          </div>
          <div className="line" />
        </div>
        <div className='row'>
          <div className='hour'>
            <p>2:00 PM</p>
          </div>
          <div className="line" />
        </div>
        <div className='row'>
          <div className='hour'>
            <p>3:00 PM</p>
          </div>
          <div className="line" />
        </div>
        <div className='row'>
          <div className='hour'>
            <p>4:00 PM</p>
          </div>
          <div className="line" />
        </div>
        <div className='row'>
          <div className='hour'>
            <p>5:00 PM</p>
          </div>
          <div className="line" />
        </div>
        <div className='row'>
          <div className='hour'>
            <p>6:00 PM</p>
          </div>
          <div className="line" />
        </div>
        <div className='row'>
          <div className='hour'>
            <p>7:00 PM</p>
          </div>
          <div className="last" />
        </div>
      </div>
    )
  }
}
export default Calendar
