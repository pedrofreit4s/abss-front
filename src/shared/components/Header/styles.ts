import { keyframes, styled } from "../../styles/stitches.config";

export const Navs = styled("div", {
  width: "100%",
  marginTop: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  zIndex: 999,
});

export const NavbarDesktop = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media only screen and (max-width: 1180px)": {
    display: "none",
  },
});

export const Brand = styled("img", {});

export const Items = styled("ul", {
  listStyle: "none",
  display: "flex",
  alignItems: "center",
});

export const Item = styled("li", {
  a: {
    color: "$secondaryTextLight",
    fontSize: "18px",
    margin: "0 12px",
    textDecoration: "none",
    fontWeight: "400",
    transition: ".3s",
    "&:hover": {
      color: "GrayText",
    },
  },

  variants: {
    color: {
      active: {
        a: {
          fontWeight: "500",
          position: "relative",
          color: "$secondary",

          "&:after": {
            width: 26,
            height: 4,
            borderRadius: "12px",
            content: "",
            position: "absolute",
            left: 0,
            bottom: "-8px",
            backgroundColor: "$secondary",
          },

          "&:hover": {
            color: "$secondary",
          },
        },
      },
    },
  },
});

export const Buttons = styled("div", {
  button: {
    borderRadius: 24,
    border: "1px solid $primary",
    padding: "10px 20px",
    backgroundColor: "$primary",
    color: "$secondary",
    fontWeight: 500,
    cursor: "pointer",

    "&:nth-child(1)": {
      backgroundColor: "transparent",
      marginRight: "12px",
    },

    "&:hover": {
      transform: "scale(1.01)",
    },

    transition: ".3s",
  },
});

/*
 *   Navbar Responsive
 **/

export const NavbarResponsive = styled("div", {
  width: "100%",
  marginTop: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media only screen and (min-width: 1180px)": {
    display: "none",
  },

  button: {
    border: 0,
    backgroundColor: "transparent",
    cursor: "pointer",
    i: {
      fontSize: 40,
      color: "$secondary",
    },
  },
});

const openMenu = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const closeMenu = keyframes({
  "0%": { opacity: 1, display: "block" },
  "100%": { opacity: 0, display: "none" },
});

export const NavbarResponsiveItems = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  position: "fixed",
  bottom: 0,
  left: 0,
  backgroundColor: "$secondary",
  animation: `${openMenu} 100ms`,
  button: {
    position: "fixed",
    top: 40,
    right: 40,
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    i: {
      fontSize: 40,
      color: "$primary",
    },
  },

  variants: {
    opend: {
      false: {
        display: "flex",
        animation: `${closeMenu} 100ms normal forwards ease-in-out`,
      },
    },
  },
});
export const NavbarResponsiveItem = styled("div", {
  a: {
    color: "White",
    fontSize: "18px",
    margin: "0 12px",
    textDecoration: "none",
    fontWeight: "600",
    transition: ".3s",
    textTransform: "uppercase",

    "&:hover": {
      color: "$primary",
    },
  },
});
