import React, { Component } from "react";

import Draw from "../Drawer";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="header-inner">
            <div className="logo">
              <img
                className="log"
                src="/logo.svg"
                width="100px"
                height="100px"
              />
              <h1>
                PLATCOM<span>FCI</span>
              </h1>
            </div>
            <nav className="navigation">
              <ul>
                <li>
                  <a target="_blank" href="https://www.uach.cl">
                    I Semestre
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.uach.cl">
                    II Semestre
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.uach.cl">
                    III Semestre
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.uach.cl">
                    IV Semestre
                  </a>
                </li>
              </ul>
            </nav>
            <Draw />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
