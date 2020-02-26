import React from "react"

const Contact = () => (
    <div>
      <div style={{display:`flex`, width:`100%`, justifyContent:`flex-end`, paddingTop:`3rem`}}>
        <h1 style={{flex:`1`, display:`flex`, justifyContent:`flex-end`}}>06</h1>
        <div style={{flex:`3`}}>
          <div style={{width:`100%`, borderBottom:`2px solid #fff`}}>
            <h1>&nbsp;Contacto</h1>
          </div>
        </div>
      </div>
      <div style={{paddingTop:`3rem`, display:`flex`, width:`100%`, justifyContent:`center`}}>
        <div style={{maxWidth:`70vw`, alignItems:`flex-start`, display:`flex`, flexDirection:`column`}}>
          <h5>Este es un proyecto de todxs. ¡Escríbenos! Nos encantaría colaborar</h5>
          <div style={{width:`100%`}}>
            <form action="https://getform.io/f/0eb76128-e317-4f0e-a339-8b97971d78d6" method="POST"
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
      </div>
      <div style={{display:`flex`, width:`100%`, justifyContent:`flex-end`, paddingTop:`3rem`}}>
        <div style={{flex:`1`, display:`flex`, justifyContent:`flex-end`}} />
        <div style={{flex:`3`}}>
          <div style={{width:`100%`, borderBottom:`2px solid #fff`}}>
          </div>
          <p style={{marginTop:`1.5rem`}}>Marea © 2020 </p>
        </div>
      </div>
    </div>
)

export default Contact
