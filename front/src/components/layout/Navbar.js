import React, { Component } from "react";
import { Link } from "react-router-dom";
require('bootstrap')
class Navbar extends Component {
  render() {
    return (

      <div className="navbar-fixed">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">VeloTN</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/shop" className="nav-link ">Store</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Balades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/associations"  >Associations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#"  ><br/></a>
              </li>
              <li className="nav-item">
                <Link to="/velosback" className="nav-link ">Gestion velos</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link ">Gestion balades</Link>
              </li>
              <li className="nav-item">
                <Link to="/back/associations" className="nav-link ">Gestion associations</Link>
              </li>

              <li className="nav-item" >
                <Link to="/login" className="nav-link " style={{color:"#00a9ff"}}><strong>Login</strong></Link>
              </li>
              <li className="nav-item" >
                <Link to="/dashboard" className="nav-link " style={{color:"#ab0369"}}><strong>Logout</strong></Link>
              </li>
            </ul>
          </div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossOrigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossOrigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossOrigin="anonymous"/>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossOrigin="anonymous"/>
        </nav>
      </div>
    );
  }

}

export default Navbar;
