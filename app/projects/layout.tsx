import { Typography } from "@/components";
import classes from "./styles.module.css";
import { ReactNode } from "react";

interface IProjectLayoutProps {
  children: ReactNode;
}

export default function ProjectsLayout({ children }: IProjectLayoutProps) {
  return (
    <div className={classes.root}>
      <Typography>My Projects</Typography>
      <section>{children}</section>
    </div>
  );
}
