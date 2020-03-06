import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Icon,
  useDisclosure
} from "@chakra-ui/core";

function Draw() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <img
        onClick={onOpen}
        className="user-logo"
        src="/logo.svg"
        width="60px"
        height="60px"
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent maxW="400px">
          <DrawerHeader maxH="30px" borderBottomWidth="1px">
            Basic Drawer
          </DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Draw;
