import React, { useState, useEffect } from "react";
import NewUrl from "./NewUrl";
import { Box, Heading, Text, Stack, Icon } from "@chakra-ui/core";
import axios from "axios";

const Aportes = props => {
  const [data, setData] = useState([
    {
      ramo: "Algebra",
      titulo: "PrimerAporte",
      descripcion: "Descripcion de mi aporte",
      url: "https://www.uach.cl",
      autor: "Tallo",
      likes: 0
    }
  ]);

  useEffect(() => {
    axios.post("/api/getAportes", { a: 1 }).then(response => {
      setData([...data, ...response.data]);
    });
  }, []);

  const handleAporte = dataAporte => {
    setData([...data, dataAporte]);
  };

  return (
    <div className="col col-md-10">
      {JSON.stringify(data, null, 2)}
      <h1 className="d-inline-block col col-md-9">{props.ramo}</h1>
      {props.ramo === undefined ? (
        <h1>Seleccione un ramo</h1>
      ) : (
        <NewUrl ramo={props.ramo} onAporte={handleAporte} />
      )}

      {data
        .filter(obj => {
          return obj.ramo === props.ramo;
        })
        .map(aporte => {
          return (
            <div className="accordion m-3" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h6>{aporte.likes}</h6>
                  <h3
                    className="text-primary"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {aporte.titulo}
                  </h3>
                  <p className="text-primary ">{aporte.autor}</p>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <h6>{aporte.descripcion}</h6>
                    <a
                      target="_blank"
                      href={aporte.url}
                      className="text-warning"
                    >
                      Click Aquí para ir al enlace
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={2} m={3} bg="tomato" shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

function StackEx({ titulo, descripcion }) {
  return (
    <Stack spacing={8}>
      <Feature title={titulo} desc={descripcion} />
    </Stack>
  );
}

export default Aportes;
