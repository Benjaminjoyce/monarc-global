import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebookSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';

import logo from './resources/logo.png';
import logoB from './resources/logo-name-beneath.png';
library.add(
  faInstagram,
  faFacebookSquare,
  faTwitterSquare,
  faPhone,
  faEnvelope,
  faEllipsisV
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <ul class="slideshow">
          <li />
          <li />
          <li />
          <li />
        </ul>
        <nav className="navbar-fixed">
          <div className="nav-wrapper">
            <div id="inner-nav">
              <a className="brand-logo" href="/">
                <img id="M-logo" src={logo} alt="Monarc Global" />
                MONARC
              </a>
            </div>
            <div className="row">
              <ul className="M-navbar col s12">
                <li>
                  <a href="mailto:info@monarcglobal.com">
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />
                      info@monarcglobal.com
                    </span>
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </li>
                <li>
                  <a href="tel:+61414485046">
                    <span>
                      <FontAwesomeIcon icon={faPhone} rotation={90} />
                      +61 414 485 046
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="M-floating-div container">
          <div>
            <h1>Fly without Limits</h1>
            <h3>Coming Soon</h3>
            <div className="slgn2">
              <h5> Search and book a private aircraft instantly...</h5>
              <span>
                Select from a wide range of private aircraft operators around
                the world
              </span>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="row M-footer">
            <div className="container">
              <div className="col m4 s12 container">
                <a href="/">
                  <img id="footer-logo" src={logoB} alt="" srcset="" />
                </a>
                <div>
                  <span className="hide-on-med-and-up center-align address">
                    Level 3, 315 Brunswick Street Fortitude Valley, Qld. 4006
                  </span>
                </div>
                <div className="hide-on-med-and-up" id="M-social-sm">
                  <a href="https://www.facebook.com/monarcglobal/">
                    <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                  </a>

                  <a href="https://www.instagram.com/monarcglobal/">
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                  </a>
                  <a href="https://twitter.com/Monarcglobal?lang=en">
                    <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
                  </a>
                </div>
              </div>
              <div className="col m4 hide-on-small-only">
                <span className="address">
                  Level 3, 315 Brunswick Street Fortitude Valley, Qld. 4006
                </span>
              </div>
              <div className="col m4 s6 hide-on-small-only" id="M-social">
                <a href="https://www.facebook.com/monarcglobal/">
                  <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
                </a>

                <a href="https://www.instagram.com/monarcglobal/">
                  <FontAwesomeIcon icon={faInstagram} size="4x" />
                </a>
                <a href="https://twitter.com/Monarcglobal?lang=en">
                  <FontAwesomeIcon icon={faTwitterSquare} size="4x" />
                </a>
              </div>
            </div>
            <div className="m-flex-center">
              <span className="tm">Trademark Monarc 2017</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
