import React, { Component } from "react";

import NewUrl from "../NewUrl";

function Header({ ramo, setSemester, setRamo }) {
  return (
    <div className="App">
      <header>
        <div className="header-inner">
          <div className="logo">
            <img className="log" src="/logo.svg" width="100px" height="100px" />
            <h1>
              PLATCOM<span>FCI-UACh</span>
            </h1>
          </div>
          <nav className="navigation">
            <ul>
              {[1, 2, 3, 4].map(n => {
                return (
                  <li>
                    <a
                      onClick={() => {
                        setRamo(undefined);
                        setSemester(n);
                      }}
                    >
                      Semestre {n}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          {ramo && <NewUrl ramo={ramo} />}
        </div>
      </header>
    </div>
  );
}

export default Header;
