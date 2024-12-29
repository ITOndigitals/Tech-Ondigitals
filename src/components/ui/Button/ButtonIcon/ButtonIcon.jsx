import Link from "next/link";
import React from "react";
import { TopRightArrow } from "../../Icons/ListIcon";
import classes from "./ButtonIcon.module.scss";
export default function ButtonIcon({ title = "Contact Us", href = "/" }) {
  return (
    <Link className={classes["btn-icon"]} href={href}>
      <p>{title}</p>
      <TopRightArrow width="24" height="24" color="#fff" />
    </Link>
  );
}
