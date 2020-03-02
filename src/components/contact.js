import React from "react"

const Contact = () => (
    <div style={{height:`calc(100vh - 3rem)`, display:`flex`, flexDirection:`column`, justifyContent:`center`}}>
      <div style={{display:`flex`, width:`100%`, justifyContent:`flex-end`}}>
        <h1 style={{flex:`1`, display:`flex`, justifyContent:`flex-end`}}>04</h1>
        <div style={{flex:`3`}}>
          <div style={{width:`100%`, borderBottom:`2px solid #fff`}}>
            <h1>&nbsp;Contacto</h1>
          </div>
        </div>
      </div>
      <div style={{paddingTop:`3rem`, display:`flex`, width:`100%`}}>
      <div style={{flex:`1`}}/>
        <div style={{flex:`3`, alignItems:`flex-start`, display:`flex`, flexDirection:`column`}}>
          <h5>Este es un proyecto de todxs. ¡Escríbenos! Nos encantaría colaborar</h5>
          <div style={{width:`100%`}}>
            <form action="https://getform.io/f/9e6a5e97-61ac-4d0f-b088-4290cb5bc436" method="POST"
            style={{display:`flex`, flexDirection:`column`}}>
              <label>
                Nombre
                <input type="name" name="name" placeholder="Jane Doe"/>
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="JaneDoe@gmail.com" />
              </label>
              <label>
                Mensaje
                <textarea type="text" name="text" placeholder="Hablemos..." />
              </label>
              <div style={{alignSelf:`flex-end`, paddingTop:`3rem`}}>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
        <div style={{flex:`1`, display:`flex`, flexDirection:`column`, alignItems:`center`}}>
          <a target="_blank" href="https://www.facebook.com/marealanuevaola/">
            <img style={{height:`48px`, width:`48px`, cursor:`pointer`}} src="./icons/facebook.svg" alt='facebook'/>
          </a>
          <a target="_blank" href="https://www.instagram.com/marealanuevaola/">
            <img style={{height:`48px`, width:`48px`, cursor:`pointer`}} src="./icons/instagram.svg" alt='instagram' />
          </a>
        </div>
      </div>
    </div>
)

export default Contact
