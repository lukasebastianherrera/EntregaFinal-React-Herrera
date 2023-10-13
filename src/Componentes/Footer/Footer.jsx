import React from 'react'
import "./footer.css"
import Titulo from '../TItulo/Titulo'

const Footer = () => {
  return (
    <footer className>
      <div className="container-fluid">
        <div className="row p-2 bg-dark text-white">
          <div className="col-xs-12 col-md6 col-lg-3">
            <p className="h3">Muebleria Arce</p>
            <p className="text-secondary">Rosario 3923.</p>
          </div>
          <div className="col-xs-12 col-md6 col-lg-3">
            <p className="h5">Links</p>
            <div className="mb-3">
              <a className="text-secondary text-decoration-none" href="#">Terminos y Condiciones</a>
            </div>
            <div className="mb-3">
              <a className="text-secondary text-decoration-none" href="#">Politica de Privacidad</a>
            </div>
          </div>
          <div className="col-xs-12 col-md6 col-lg-3">
            <p className="h5">Venta telefonica</p>
            <p className="text-secondary">11 6671-2456.</p>
            <p className="text-secondary">4739-1030.</p>
          </div>
          <div className="col-xs-12 col-md6 col-lg-3">
            <p className="h5 mb-3">Nuestras redes</p>
              <div className="mb-3">
                <a className="text-primary text-decoration-none" href="https://www.facebook.com/muebleria.arce/" target="_blank">Facebook</a>
              </div>
              <div className="mb-3">
                <a className="text-danger text-decoration-none" href="">Instagram</a>
              </div>
              <div className="mb-3">
                <a className="text-success text-decoration-none" href="https://wa.me/5491168330952">Whatsapp</a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer