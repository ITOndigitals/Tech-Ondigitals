import React from "react";
import { TopRightArrow } from "../../Icons/ListIcon";
import classes from "./Button.module.scss";
import Link from "next/link";

export default function Button({
  text = "Send us a message",
  href,
}) {
  if (href) {
    return (
      <Link href={href} className={classes["btn"]} >
        <p>{text}</p>
        <TopRightArrow width={"24"} height={"24"} color={"#fff"} />
      </Link>
    );
  }

  return (
    <button className={classes["btn"]} type='submit'>
      <p>{text}</p>
      <TopRightArrow width={"24"} height={"24"} color={"#fff"} />
    </button>
  );
}
