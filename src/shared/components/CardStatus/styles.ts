import { styled } from "../../styles/stitches.config";

export const Card = styled("div", {
  backgroundColor: "White",
  boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
  borderRadius: 16,
  padding: "30px 30px",
  border: "1px solid rgba(166,173,201,.15)",
  display: "flex",
  alignItems: "center",
  //flexDirection: "column",
});
export const CardIcon = styled("div", {
  marginRight: 20,
  backgroundColor: "$primary",
  width: 50,
  height: 50,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  i: {
    color: "$secondary",
    fontSize: 28,
  },
});
export const CardTitle = styled("h3", {
  fontSize: 28,
  fontFamily: "Poppins",
  fontWeight: 800,
  color: "$secondaryText",
  marginTop: 10,
});
export const CardText = styled("p", {
  fontSize: 18,
  fontFamily: "Inter",
  fontWeight: 500,
  color: "DimGray",
  marginTop: -1,
});
