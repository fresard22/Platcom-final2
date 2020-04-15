import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure
} from "@chakra-ui/core";

import { useForm } from "react-hook-form";

function NewUrl({ ramo, onAporte }) {
  const { isOpen, onOpen, onClose } = useDisclosure(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    data.ramo = ramo;
    onAporte(data);
  };

  return (
    <>
      <input
        type="submit"
        className="btn btn-lg btn-warning d-inline-block mb-3 ml-4"
        value="Añadir Aporte"
        onClick={onOpen}
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent maxW="400px">
          <DrawerHeader maxH="30px" borderBottomWidth="1px">
            Formulario de Aporte
          </DrawerHeader>
          <DrawerBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>{ramo}</p>
              <input
                className="mb-3"
                name="titulo"
                placeholder="Titulo"
                ref={register({ required: true })}
              />

              {errors.titulo && <h6 className="btn btn-danger mb-3">Ingrese un Titulo</h6>}

              <input
                
                className="mb-3"
                name="descripcion"
                placeholder="Descripcion"
                ref={register({ required: true })}
              />
              {errors.descripcion && <h6 className="btn btn-danger mb-3">Ingrese una Descripcion</h6>}

              <input
                className="mb-3"
                name="link"
                placeholder="Url"
                ref={register({ required: true })}
              />
              {errors.link && <h6 className="btn btn-danger mb-3">Ingrese una URL</h6>}

              <input
                className="mb-3"
                name="autor"
                placeholder="Autor"
                ref={register({ required: true })}
              />
              {errors.autor && <h6 className="btn btn-danger mb-3">Ingrese algun Pseudonimo</h6>}

              <input type="submit" value="Subir Aporte"/>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NewUrl;
