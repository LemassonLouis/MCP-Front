import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import "./FooterResponsiveBtn.css";

const FooterResponsiveBtn = ({ load, txt, color, func }) => {
  return (
    <LoadingButton
      className="footer-responsive__btn"
      type="submit"
      loading={load}
      color={color}
      onClick={func}
      variant="contained"
    >
      {txt}
    </LoadingButton>
  );
};

export default FooterResponsiveBtn;
