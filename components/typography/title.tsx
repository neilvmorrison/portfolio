import { ReactNode } from "react";
import { TypographyTags } from ".";
import clsx from "clsx";
import classes from "./classes.module.css";

interface ITitleProps {
  children: ReactNode;
  component?: TypographyTags;
}

export default function Title({
  children,
  component: Component = "h1",
}: ITitleProps) {
  return <Component className={clsx(classes[Component])}>{children}</Component>;
}
