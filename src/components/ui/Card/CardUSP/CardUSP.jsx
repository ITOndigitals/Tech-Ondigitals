import React from "react";
import classes from "./CardUSP.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";

const parse = require("html-react-parser").default;
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function CardUSP({ data }) {
  if (!data) return null;
  const { descriptionUsp, titleUsp, imageUsp } = data;
  return (
    <div className={classes["card-usp"]}>
      <div className={classes["card-usp__image"]}>
        <Image
          src={imageUsp?.node?.sourceUrl}
          alt={imageUsp?.node?.altText}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
      <div className={classes["card-usp__content"]}>
        <h3 className={classes["card-usp__content__title"]}>
          {titleUsp && titleUsp}
        </h3>
        <div
          style={{ fontFamily: MavenPro.style.fontFamily }}
          className={classes["card-usp__content__desc"]}
        >
          {descriptionUsp && parse(descriptionUsp)}
        </div>
      </div>
    </div>
  );
}
