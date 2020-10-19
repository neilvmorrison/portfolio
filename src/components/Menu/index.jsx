import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  root: {
    width: 260,
  },
});

function Menu() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <h1>Menu Test</h1>
    </div>
  );
}

export default Menu;
