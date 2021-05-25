import { Container } from "@material-ui/core";
import React from "react";
import NavBar from "../navigation/NavBar"

const AppContent: React.FC<any> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>
        {children}
      </Container>
    </>
  );
}

export default AppContent;