import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { createUseStyles } from "react-jss";

const styles = createUseStyles((theme) => ({
  root: {
    borderRadius: "50rem",
    padding: "0.8rem 2.6rem",
    fontWeight: 600,
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    background: "transparent",
    textTransform: "uppercase",
    transition: `all ${theme.transition}s`,
  },
  secondary: {
    color: theme.palette.green.main,
    border: `2px solid ${theme.palette.green.main}`,
    "&:hover": {
      color: "#fff",
      background: theme.palette.green.main,
    },
  },
  primary: {
    color: "#fff",
    background: theme.palette.green.main,
    boxShadow: theme.shadow,
    "&:hover": {
      background: theme.palette.green.dark,
    },
  },
  alt: {
    color: theme.palette.grey.light,
    border: `2px solid ${theme.palette.grey.light}`,
    "&:hover": {
      color: "#fff",
      background: theme.palette.grey.light,
    },
  },
}));

function Button({ variant = "secondary", children, onClick }) {
  const classes = styles();
  return (
    <button className={clsx(classes.root, classes[variant])} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "alt"]),
};

export default Button;
