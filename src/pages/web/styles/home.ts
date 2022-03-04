import { styled } from "../../../shared/styles/stitches.config";

export const Apresentation = styled("div", {
  marginTop: 100,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "relative",
  // justifyContent: "space-between",
  "@media only screen and (max-width: 1180px)": {
    marginTop: 70,
  },
});
export const ApresentationTexts = styled("div", {
  width: "60%",
  "@media only screen and (max-width: 1180px)": {
    width: "100%",
  },
  h3: {
    color: "$secondaryText",
    fontSize: 72,
    fontFamily: "Inter",
    fontWeight: 900,
    lineHeight: "5.6rem",
  },

  p: {
    marginTop: 30,
    fontSize: 18,
    color: "DimGray",
    fontFamily: "Poppins",
  },
});
export const Buttons = styled("div", {
  display: "flex",
  alignItems: "center",
  marginTop: 38,
  "@media only screen and (max-width: 1180px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
export const Button = styled("button", {
  "@media only screen and (max-width: 1180px)": {
    marginBottom: 10,
  },
  variants: {
    subscribe: {
      true: {
        border: 0,
        backgroundColor: "$secondary",
        cursor: "pointer",
        color: "White",
        padding: "12px 22px",
        borderRadius: 200,
        fontFamily: "Inter",
        fontSize: 18.5,
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        div: {
          backgroundColor: "White",
          color: "$secondaryText",
          width: 35,
          height: 35,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 10,
          i: {
            fontSize: 22,
          },
        },
        transition: ".3s",
        "&:hover": {
          boxShadow: "0px 4px 16px -1px rgba(0, 62, 117,.3)",
        },
      },
      undefined: {
        border: 0,
        backgroundColor: "ButtonFace",
        cursor: "pointer",
        color: "ButtonText",
        padding: "18px 22px",
        borderRadius: 200,
        fontFamily: "Inter",
        fontSize: 18.5,
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        marginRight: 15,
        i: {
          fontSize: 22,
          marginLeft: 10,
        },
        transition: ".3s",
        "&:hover": {
          boxShadow: "0px 4px 16px -1px rgb(221, 221, 221)",
        },
      },
    },
  },
});
export const ApresentationCover = styled("div", {
  right: -140,
  position: "absolute",
  overflow: "hidden",
  "@media only screen and (max-width: 1180px)": {
    display: "none",
  },
});
export const ApresentationImage = styled("img", {
  width: "660px",
});
export const MessageText = styled("p", {
  marginLeft: 74,
  marginTop: 25,
  fontSize: 18,
  color: "DimGray",
  lineHeight: "1.8rem",
  // fontFamily: "Poppins",
});
export const MessageImage = styled("img", {
  width: "88%",

  marginLeft: 74,
});
export const MessageImageTexts = styled("div", {
  h3: {
    marginBottom: 15,
    marginLeft: 74,
    color: "$secondaryText",
    fontSize: 28,
    fontFamily: "Poppins",
  },
});
