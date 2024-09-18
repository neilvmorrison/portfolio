import { Title, Avatar, Surface, Typography } from "@/components";
import classes from "./classes.module.css";
import Link from "next/link";

const links = [
  {
    href: "/",
    text: "About Me",
  },
  {
    href: "/resume",
    text: "Resume",
  },
  {
    href: "/projects",
    text: "Projects",
  },
  {
    href: "/articles",
    text: "Articles",
  },
  {
    href: "/music",
    text: "Music",
  },
];

export default function SideNavigation() {
  return (
    <Surface className={classes.root}>
      <Avatar src="" alt="" fallback_text="NM" />
      <div>
        <Title>Neil Morrison</Title>
        <Typography>Software Engineer, Racing Enthusiast</Typography>
      </div>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.text}
        </Link>
      ))}
    </Surface>
  );
}
