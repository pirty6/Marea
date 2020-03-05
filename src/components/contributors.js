import React from "react"

const Contributors = () => (
  <div>
    <div style={{display:`flex`, width:`100%`, justifyContent:`flex-end`, paddingTop:`8rem`}}>
      <h1 style={{flex:`1`, display:`flex`, justifyContent:`flex-end`}}>05</h1>
      <div style={{flex:`2`}}>
        <div style={{width:`100%`, borderBottom:`2px solid #fff`}}>
          <h1>&nbsp;Contribuyentes</h1>
        </div>
      </div>
    </div>
    <div style={{display:`grid`, gridTemplateColumns:`auto auto auto auto`, flexWrap: `wrap`}}>
      <img className="contributor" src="/images/CE.png" alt="CE" />
      <img className="contributor" src="/images/CienciasSociales.png" alt="Ciencias Sociales" />
      <img className="contributor" src="/images/CRDH.png" alt="CRDH" />
      <img className="contributor" src="/images/EAAD.png" alt="EAAD" />
      <img className="contributor" src="/images/Humanidades.png" alt="Humanidades" />
      <img className="contributor" src="/images/readit.png" alt="Read It" />
      <img className="contributor" src="/images/salc.png" alt="SA" />
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

export default Contributors
