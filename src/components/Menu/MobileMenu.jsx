import React from "react";
import { createUseStyles } from "react-jss";
import Text from "../Text";

const styles = createUseStyles((theme) => ({
  root: {
    background: theme.palette.blue.dark,
    position: "sticky",
    top: 0,
    height: 55,
    display: "block",
    [`@media(min-width: ${theme.breakpoints.small}px)`]: {
      display: "none",
    },
  },
}));

function MobileMenu() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Text>Neil Morrison</Text>
    </div>
  );
}

export default MobileMenu;
