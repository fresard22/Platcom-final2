import React, { Component } from "react";

import { Box, Icon } from "@chakra-ui/core";

import ramos from "../../../ramos.json";

function Sidebar({ semestre, onRamo }) {
  return (
    <div className="col col-md-2">
      <h4>Semestre{semestre}</h4>
      <ul className="list-group">
        {ramos
          .filter(({ semestre: semestreValue }) => {
            return semestreValue === semestre;
          })
          .map((ramo, key) => {
            return (
              <div key={key}>
                <li
                  className="list-group-item list-group-item-action active m-2 p-1"
                  onClick={() => onRamo(semestre, ramo.nombre)}
                >
                  <a className="text-white" href="#">
                    {ramo.nombre}
                  </a>
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default Sidebar;
