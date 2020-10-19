import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const styles = createUseStyles((theme) => ({
  h1: theme.text.h1,
  h2: theme.text.h2,
  p: theme.text.paragraph,
}));

function Text({ component = "p", variant, className = null, children }) {
  const Component = component;
  const classes = styles();

  function getClasses(variant) {
    if (!variant) {
      return classes[component];
    }
    return classes[variant];
  }

  return (
    <Component className={clsx(className, getClasses(variant))}>
      {children}
    </Component>
  );
}

Text.propTypes = {
  component: PropTypes.oneOf(["h1", "h2", "h3", "h4", "p"]),
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "p"]),
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Text;
