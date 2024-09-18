import { Title, Avatar, Surface } from "@/components";
import classes from "./classes.module.css";
import Link from "next/link";

const links = [
  {
    href: "/resume",
    text: "Resume",
  },
  {
    href: "/projects",
    text: "Projects",
  },
];

export default function SideNavigation() {
  return (
    <Surface className={classes.root}>
      <Avatar src="" alt="" fallback_text="NM" />
      <Title>Neil Morrison</Title>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.text}
        </Link>
      ))}
    </Surface>
  );
}
