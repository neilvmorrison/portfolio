import { IconEmail, IconGithub, IconLinkedIn } from "../icons";
import classes from "./classes.module.css";

const socials = [
  {
    icon: <IconGithub />,
    href: "https://github.com/neilvmorrison",
  },
  {
    icon: <IconLinkedIn />,
    href: "https://www.linkedin.com/in/neilvmorrison/",
  },
  {
    icon: <IconEmail />,
    href: "mailto:me@neilmorrison.ca?subject=Reaching%20out%20from%20the%20website!",
  },
];

export default function TopNav() {
  return (
    <header className={classes.root}>
      <div>Breadcrumbs &rsaquo; go &rsaquo; ... &rsaquo; here</div>
      <nav className={classes.nav}>
        {socials.map((link) => (
          <a href={link.href} key={link.href} target="_blank">
            {link.icon}
          </a>
        ))}
      </nav>
    </header>
  );
}
