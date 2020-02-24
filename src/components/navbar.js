import React, { Component } from "react"

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
        zIndex:`2`}}>
        <div className='item left'>
        <p>
        </p>
        </div>
        <div className='item right'>
        <img src="/icons/grid.svg" alt='menu' style={{cursor:`pointer`}}
        onClick={() => this.toggle()}/>
        </div>
        {this.state.showMenu ? <div style={{position:`fixed`, backgroundColor: `#1b1b1b`,
          zIndex: `-1`, height: `100vh`, width: `100vw`, top:`0`, left:`0`}}>
          <div style={{display:`flex`, width:`100%`, alignItems:`flex-start`,
            marginTop:`100px`,
            height:`100%`, padding:`40px`}}>
            <div style={{flex:`2 1 auto`}}>
              <h2>HOME</h2>
              <h2>{this.props.about}</h2>
              <h2>{this.props.schedule}</h2>
              <h2>{this.props.speakers}</h2>
              <h2>{this.props.contributors}</h2>
              <h2>{this.props.projects}</h2>
            </div>
            <div style={{flex:`1 1 auto`}}>
              <p>{this.props.socials}</p>
              <h4>Facebook</h4>
              <h4>Instagram</h4>
              <h4>{this.props.contact}</h4>
            </div>
          </div>
        </div> :  null}
      </div>
        )
  }
}

export default NavBar
