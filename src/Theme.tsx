import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    standard: "#000",
    primary: "rgb(8, 42, 94)",
  },
  border: {
    primary: "#73afdc",
    secondary: "#bde3ff",
  },
  background: {
    primary: "#fff",
    even: "#fafafa",
    odd: "#e2f3fe",
  },
};

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
