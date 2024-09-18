import { ReactNode } from "react";
import classes from "./classes.module.css";
import clsx from "clsx";

export type Sizing = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type SurfaceSemanticElements = "div" | "section" | "aside";

interface ISurfaceProps {
  children: ReactNode;
  className?: string;
  component?: SurfaceSemanticElements;
  shadow?: Sizing;
  padding?: Sizing;
}

export default function Surface({
  children,
  className: customClassName,
  component: Component = "div",
}: ISurfaceProps) {
  return (
    <Component className={clsx(classes.root, customClassName)}>
      {children}
    </Component>
  );
}
