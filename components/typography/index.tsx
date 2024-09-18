import { ReactNode } from "react";
import classes from "./classes.module.css";
import clsx from "clsx";

export type TypographyTags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

interface ITypographyProps {
  children: ReactNode;
  className?: string;
  component?: TypographyTags;
  dimmed?: boolean;
}

export default function Typography({
  component: Component = "p",
  children,
  dimmed = false,
  className: customClassName,
}: ITypographyProps) {
  return (
    <Component
      className={clsx(
        classes.root,
        classes[Component],
        customClassName,
        dimmed && classes.dimmed
      )}
    >
      {children}
    </Component>
  );
}
