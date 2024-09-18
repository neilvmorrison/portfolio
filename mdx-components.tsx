import type { MDXComponents } from "mdx/types";
import { Title, Typography } from "./components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Title component="h1">{children}</Title>,
    h2: ({ children }) => <Title component="h2">{children}</Title>,
    h3: ({ children }) => <Title component="h3">{children}</Title>,
    h4: ({ children }) => <Title component="h4">{children}</Title>,
    h5: ({ children }) => <Title component="h5">{children}</Title>,
    h6: ({ children }) => <Title component="h6">{children}</Title>,
    p: ({ children }) => <Typography>{children}</Typography>,
    ...components,
  };
}
