interface ITypographyProps {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: string;
}

export default function Typography({
  component: Component = "p",
  children,
}: ITypographyProps) {
  return <Component>{children}</Component>;
}
