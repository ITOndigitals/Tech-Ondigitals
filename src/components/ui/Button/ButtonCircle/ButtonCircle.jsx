import Link from "next/link";
import React from "react";
import classes from "./ButtonCircle.module.scss";

const ButtonCircle = ({ text = "Click Here", href = "/" }) => (
  <Link className={classes.btn} href={href}>
    {text}
  </Link>
);

export default ButtonCircle;
