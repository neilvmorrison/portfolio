import React from "react";
import { createUseStyles } from "react-jss";
import Menu from "./components/Menu";

const styles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  window: {
    background: "#fff",
    height: "110vh",
    width: "100%",
  },
});

function App() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Menu />
      <div className={classes.window}>
        <h1>Content</h1>
      </div>
    </div>
  );
}

export default App;
