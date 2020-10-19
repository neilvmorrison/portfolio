import React from "react";
import { createUseStyles } from "react-jss";
import Menu from "./components/Menu";
import Button from "./components/Button";
import MobileMenu from "./components/Menu/MobileMenu";

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
    height: "110vh",
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
        <Button onClick={() => alert("WOW")} variant="alt">
          Click Me
        </Button>
      </div>
    </div>
  );
}

export default App;
