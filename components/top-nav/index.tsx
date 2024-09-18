import { IconEmail, IconGithub, IconLinkedIn } from "../icons";
import classes from "./classes.module.css";

const socials = [
  {
    icon: <IconGithub />,
    href: "https://github.com/neilvmorrison",
  },
  {
    icon: <IconLinkedIn />,
    href: "https://github.com/neilvmorrison",
  },
  {
    icon: <IconEmail />,
    href: "https://github.com/neilvmorrison",
  },
];

export default function TopNav() {
  return (
    <header className={classes.root}>
      {socials.map((link) => (
        <a href={link.href} key={link.href}>
          {link.icon}
        </a>
      ))}
    </header>
  );
}
