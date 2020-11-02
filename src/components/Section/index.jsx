import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

import Text from "../Text";

const styles = createUseStyles((theme) => ({
  root: {
    padding: "4.5rem 0",
  },
  grey: {
    background: "#f8f9fa",
  },
  header: {
    textAlign: "center",
    position: "relative",
    "&:after": {
      position: "absolute",
      content: '""',
      height: 3,
      width: 80,
      background: theme.palette.green.main,
      bottom: "-12px",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  content: {
    maxWidth: 1076,
    margin: "0 auto",
  },
}));

function Section({ children, grey = false, header }) {
  const classes = styles();
  return (
    <section className={clsx(classes.root, grey && classes.grey)}>
      <div className={classes.content}>
        <Text component="h2" className={classes.header}>
          {header}
        </Text>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  grey: PropTypes.bool,
  header: PropTypes.string.isRequired,
};

export default Section;
