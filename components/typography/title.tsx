import { ReactNode } from "react";
import { TypographyTags } from ".";

interface ITitleProps {
  children: ReactNode;
  component?: TypographyTags;
}

export default function Title({
  children,
  component: Component = "h1",
}: ITitleProps) {
  return <Component>{children}</Component>;
}
