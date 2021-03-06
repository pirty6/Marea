import React, { Component } from "react"
import { Link } from "gatsby"

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
  }

  toggle() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    return (
      <div style={{display: `flex`, justifyContent:`space-between`,
        flex:`0 1 auto`, position:`fixed`, width: 'calc(100vw - 60px)',
        zIndex:`2`}} className="navbar">
        <div className='item left'>
        <p>
        </p>
        </div>
        <div className='item right'>
        <button onClick={() => this.toggle()} style={{padding:`0`, backgroundColor:`transparent`}}>
          <img id='icon' style={{margin:`0`, cursor:`pointer`}} src="/icons/grid.svg" alt='menu'/>
        </button>
        </div>
        {this.state.showMenu ? <div style={{position:`fixed`, backgroundColor: `#1b1b1b`,
          zIndex: `-1`, height: `100vh`, width: `100vw`, top:`0`, left:`0`}}>
          <div style={{display:`flex`, width:`100%`, alignItems:`flex-start`,
            marginTop:`100px`,
            height:`100%`, padding:`40px`}}
            className='navbar-container'>
            <div style={{flex:`2 1 auto`}} className='navbar-left'>
              <h2><Link to='#home' onClick={() => this.toggle()}>HOME</Link></h2>
              <h2><Link to='#about' onClick={() => this.toggle()}>Concepto</Link></h2>
              <h2><Link to='#schedule' onClick={() => this.toggle()}>Programa</Link></h2>
              <h2><Link to='#speakers' onClick={() => this.toggle()}>Ponentes</Link></h2>
              <h2><Link to='#contributors' onClick={() => this.toggle()}>Contribuyentes</Link></h2>
            </div>
            <div style={{flex:`1 1 auto`}}>
              <p>Sociales</p>
              <a target="_blank" href="https://www.facebook.com/marealanuevaola/" style={{color:`#fff`, textDecoration:`none`}}>
                <h4>Facebook</h4>
              </a>
              <a target="_blank" href="https://www.instagram.com/marealanuevaola/" style={{color:`#fff`, textDecoration:`none`}}>
                <h4>Instagram</h4>
              </a>
              <h4><Link to='#contact' onClick={() => this.toggle()}>Contacto</Link></h4>
            </div>
          </div>
        </div> :  null}
      </div>
        )
  }
}

export default NavBar
