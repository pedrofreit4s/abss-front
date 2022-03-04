import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      primary: "#FFBF00",
      secondary: "#003E75",
      secondaryDark: "#042849",
      secondaryText: "#001B33",
      secondaryTextLight: "#8E9CA9",
    },
  },
});

export const Button = styled("button", {});
