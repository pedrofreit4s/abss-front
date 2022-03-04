import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  width: "90%",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
});

export const MessageCover = styled("div", {
  width: "100%",
  backgroundColor: "rgba(221, 221, 221,.3)",
  padding: "60px 0",

  variants: {
    marginTop: {
      true: {
        marginTop: 100,
        marginBottom: 100,
      },
    },
  },
});
export const MessageIcon = styled("div", {
  marginTop: -6,
  marginRight: 25,
  i: {
    fontSize: 48,
    color: "$secondary",
  },
});
export const MessageTitle = styled("h3", {
  fontSize: 26,
  fontWeight: 700,
  fontFamily: "Poppins",
  color: "$secondaryText",
});

export const MessageText = styled("h3", {
  fontSize: 26,
  fontWeight: 700,
  fontFamily: "Poppins",
  color: "$secondaryText",
});
