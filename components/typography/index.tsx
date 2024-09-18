import classes from "./classes.module.css";

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
  component?: TypographyTags;
  children: string;
}

export default function Typography({
  component: Component = "p",
  children,
}: ITypographyProps) {
  return <Component className={classes.root}>{children}</Component>;
}
