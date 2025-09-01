import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
});

const box = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  // borderRadius: "24px",
  // border: "2px solid #F8F8F8",
  overflow: "hidden",
  // textAlign: "center",
  // paddingBottom: "1rem",
  // backgroundColor: "#F8F8F8",
});

const subscription = style({
  display: "flex",
  alignItems: "center",
  border: "2px solid #F3F4F5",
  borderRadius: "24px",
  boxSizing: "border-box",
  padding: "1rem",
  justifyContent: "space-evenly",
  gap: "1.2rem",
});

const subscriptionText = style({
  fontSize: "15px",
  lineHeight: "20px",
});

const bottomBtn = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
  backgroundColor: "white",
  border: "none",
});

const productsTitle = style({
  fontSize: "22px",
});

const products = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "2rem 0",
});

const product = style({
  borderRadius: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  flexBasis: "calc(50% - 4px)",
});

const productTitle = style({
  lineHeight: "24px",
  fontSize: "16px",
  marginBottom: "0.3rem",
  marginTop: "1rem",
});

const productIcon = style({
  // transform: "scale(1.1)",
  objectFit: "cover",
  borderRadius: "24px",
});

const productText = style({
  marginBottom: ".5rem",
});

export const appSt = {
  bottomBtn,
  container,
  box,
  subscription,
  subscriptionText,
  productsTitle,
  products,
  productTitle,
  product,
  productIcon,
  productText,
};
