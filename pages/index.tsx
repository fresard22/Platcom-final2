import { NextPage } from "next";
import { useState } from "react";

import { Box, Stack, List, ListItem, ListIcon, Text } from "@chakra-ui/core";

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
        <List bg="#ebebeb">
          <Box>N° sem</Box>
          {ramos
            .filter(({ semestre }) => {
              return semestre === semestreOpen;
            })
            .map((ramo, key) => {
              return (
                <Box
                  width="200px"
                  color="white"
                  key={key}
                  onClick={() => {
                    setRamoOpen(ramo.nombre);
                  }}
                >
                  <ListItem>
                    <ListIcon icon="check-circle" color="green.500" />
                    <Text fontSize="md" color="black">
                      {ramo.nombre}
                    </Text>
                  </ListItem>
                </Box>
              );
            })}
        </List>
      ) : (
        <>
          <VideoExplicativo />
        </>
      )}
    </>
  );
};

export default Index;
