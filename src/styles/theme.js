export const blue = {
  dark: "#111418",
  medium: "#2d3237",
};

export const green = {
  dark: "#1baa80",
  main: "#20c997",
};

export const red = {
  main: "#dd3a4a",
};

export const grey = {
  medium: "#595959",
  light: "#6c757d",
};

const theme = {
  palette: {
    blue,
    green,
    red,
    grey,
  },
  spacing: {
    tiny: 8,
    xsmall: 16,
    small: 24,
    medium: 32,
    large: 48,
    xlarge: 72,
  },
  breakpoints: {
    xsmall: 0,
    small: 600,
    medium: 960,
    large: 1280,
    xlarge: 1920,
  },
  transition: 0.3,
  text: {
    fontFamily: "Poppins, sans-serif",
    paragraph: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.8,
      marginBottom: "1rem",
      color: "#4c4d4d",
    },
    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      color: "#343a40",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.75rem",
      color: "#252b33",
    },
  },
  shadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
};

export default theme;
