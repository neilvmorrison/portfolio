import React from "react";
import { createUseStyles } from "react-jss";
import Menu from "./components/Menu";
import MobileMenu from "./components/Menu/MobileMenu";
import AboutMe from "./sections/AboutMe";
import Header from "./sections/Header";
import Resume from "./sections/Resume";
import WhatIDo from "./sections/WhatIDo";

const styles = createUseStyles((theme) => ({
  root: {
    display: "block",
    [`@media(min-width: ${theme.breakpoints.small}px)`]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  window: {
    background: "#fff",
    width: "100%",
  },
}));

function App() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Menu />
      <MobileMenu />
      <div className={classes.window}>
        <Header />
        <AboutMe />
        <WhatIDo />
        <Resume />
      </div>
    </div>
  );
}

export default App;
