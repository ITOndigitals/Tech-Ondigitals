import React from "react";
import classes from "./CardServices.module.scss";
import Image from "next/image";
import ButtonCircle from "../../Button/ButtonCircle/ButtonCircle";
import { Maven_Pro } from "next/font/google";
import Link from "next/link";

const parse = require("html-react-parser").default;
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function CardServices({ data }) {
  if (!data) return null;
  const { button, titleServices, descriptionServices, imageServices } = data;
  return (
    <div className={classes["card-services"]}>
      <Link
        href={button?.url || "/"}
        className={classes["card-services__image"]}
      >
        <Image
          src={imageServices?.node?.sourceUrl}
          alt={imageServices?.node?.altText}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </Link>
      <div className={classes["card-services__content"]}>
        <Link
          href={button?.url || "/"}
          className={classes["card-services__content__title"]}
        >
          {titleServices && titleServices}
        </Link>
        {descriptionServices && (
          <div
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["card-services__content__decs"]}
          >
            {parse(descriptionServices)}
          </div>
        )}
        <div  className={classes["card-services__content__link"]}>
          <ButtonCircle href={button?.url} text={button?.title} />
        </div>
      </div>
    </div>
  );
}
