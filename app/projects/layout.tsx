import { Title, Typography } from "@/components";
import classes from "./styles.module.css";
import { ReactNode } from "react";
import Link from "next/link";

interface IProjectLayoutProps {
  children: ReactNode;
}

const projects = [
  {
    id: "10d11521-90a8-40d2-809f-4896320abca2",
    name: "Assetto Corsa Scripts",
    language: "Python",
    date: "28 June, 2023",
  },
  {
    id: "8310d33a-50fb-4633-9071-da013a425e23",
    name: "Assetto Corsa Modding Manual",
    language: "Typescript, React, Markdown",
    date: "28 June, 2023",
  },
  {
    id: "2c7c79a9-3dd0-446b-80a0-ab318ef8b129",
    name: "2D Physics Engine",
    language: "Typescript",
    date: "28 June, 2023",
  },
];

export default function ProjectsLayout({ children }: IProjectLayoutProps) {
  return (
    <div className={classes.root}>
      <div>
        <Title>My Projects</Title>
        <Typography>Here is a sample of some of my work</Typography>
        <div className={classes.links}>
          {projects.map((project) => {
            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={classes["project-link"]}
              >
                <Title component="h3">{project.name}</Title>
                <Typography>{project.language}</Typography>
              </Link>
            );
          })}
        </div>
      </div>
      <section>{children}</section>
    </div>
  );
}
