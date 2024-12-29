import React from "react";
import classes from "./CardStat.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
import CounterNumber from "../../CouterNumber/CouterNumber";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function CardStat({ data }) {
  if (!data) return null;
  const { title, number, icon } = data;
  return (
    <div className={`${classes["card-stat"]} card-stat`}>
      <div className={classes["card-stat__image"]}>
        <Image
          src={icon?.node?.sourceUrl}
          alt={icon?.node?.altText}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
      <div className={classes["card-stat__number"]}>
        <CounterNumber value={number} classes={"card-stat"} threshold={0.1} />
      </div>
      <p
        style={{ fontFamily: MavenPro.style.fontFamily }}
        className={classes["card-stat__decs"]}
      >
        {title && title}
      </p>
    </div>
  );
}
