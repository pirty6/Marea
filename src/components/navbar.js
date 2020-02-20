import React from "react"

constructor() {
  super();
  this.state = {
    showMenu: false,
  };
}

const NavBar = () => {
  return (
    <div style={{display: `flex`, justifyContent:`space-between`,
                flex:`0 1 auto`, position:`fixed`, width: 'calc(100vw - 60px)'}}>
      <div class='item left'>
        <p style={{cursor:`pointer`}}>EN</p>
      </div>
      <div class='item right'>
        <img src="/icons/grid.svg" alt='menu' style={{cursor:`pointer`}}/>
      </div>
    </div>
  )
}

export default NavBar
