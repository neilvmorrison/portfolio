import React from "react";
import { createUseStyles } from "react-jss";
import Text from "../Text";
import Photo from "../../assets/images/Photo.jpg";

const styles = createUseStyles((theme) => ({
  root: {
    width: 260,
    borderRight: "1px solid black",
    background: theme.palette.blue.dark,
    position: "sticky",
    top: 0,
    height: "100vh",
    color: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    display: "none",
    [`@media(min-width: ${theme.breakpoints.small}px)`]: {
      display: "flex",
    },
  },
  text: {
    color: "#fff",
  },
  link: {
    display: "block",
    color: "#fff",
    textDecoration: "none",
    marginBottom: theme.spacing.medium,
    transition: `all ${theme.transition}s`,
    "&:hover": {
      color: theme.palette.green.main,
    },
  },
  photo: {
    background: `url("${Photo}")`,
    backgroundSize: "cover",
    height: 160,
    width: 160,
    borderRadius: "50%",
  },
}));

const links = [
  {
    href: "",
    text: "Home",
  },
  {
    href: "",
    text: "About Me",
  },
  {
    href: "",
    text: "What I Do",
  },
  {
    href: "",
    text: "Resume",
  },
  {
    href: "",
    text: "Portfolio",
  },
  {
    href: "",
    text: "Testimonial",
  },
  {
    href: "",
    text: "Contact",
  },
];

function Menu() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.photo} />
        <Text component="h1" variant="p" className={classes.text}>
          Neil Morrison
        </Text>
      </div>
      <nav>
        {links.map((link) => (
          <a href={link.href} className={classes.link}>
            {link.text}
          </a>
        ))}
      </nav>
      <Text>&copy; Neil Morrison</Text>
    </div>
  );
}

export default Menu;
