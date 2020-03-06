import { NextPage } from "next";
import { useState } from "react";

import { Box, Stack } from "@chakra-ui/core";

import ramos from "../ramos.json";
import Header from "../src/client/components/Header";

const VideoExplicativo = () => {
  return <div>video</div>;
};

const Index: NextPage = () => {
  const [ramoOpen, setRamoOpen] = useState<string | undefined>();
  const [semestreOpen, setSemesterOpen] = useState<number | undefined>();

  return (
    <>
      <Header
        ramo={ramoOpen}
        setSemester={setSemesterOpen}
        setRamo={setRamoOpen}
      />
      {semestreOpen ? (
        <Stack>
          <Box>N° sem</Box>
          {ramos
            .filter(({ semestre }) => {
              return semestre === semestreOpen;
            })
            .map((ramo, key) => {
              return (
                <Box
                  width="200px"
                  bg="tomato"
                  color="white"
                  key={key}
                  onClick={() => {
                    setRamoOpen(ramo.nombre);
                  }}
                >
                  {ramo.nombre}
                </Box>
              );
            })}
        </Stack>
      ) : (
        <>
          <VideoExplicativo />
        </>
      )}
    </>
  );
};

export default Index;
