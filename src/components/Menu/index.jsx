import { SSL_OP_NO_TICKET } from "constants";
import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles((theme) => ({
  root: {
    width: 260,
    borderRight: "1px solid black",
    background: theme.palette.blue.dark,
    position: "sticky",
    top: 0,
    alignSelf: "flex-start",
    height: "100vh",
    color: "#fff",
    textAlign: "center",
  },
}));

function Menu() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <h1>Menu Test</h1>
    </div>
  );
}

export default Menu;
