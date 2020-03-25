import React, { Component } from "react";

function Header({ onSemestre, onGoHome }) {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="navbar-brand">
        <a href="#" onClick={() => onGoHome(0, undefined)}>
          PLATCOM<span>FCI</span>
        </a>
      </h1>
      <nav className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {[1, 2, 3, 4].map(n => {
            return (
              <li className="nav-item active" key={n}>
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => onSemestre(n, undefined)}
                >
                  Semestre {n}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
