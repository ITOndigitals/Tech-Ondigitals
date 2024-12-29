import React from "react";
import classes from "./ListCardTechnology.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function ListCardTechnology({ data }) {
  const { title, listImage } = data;
  return (
    <div className={classes["list-card"]}>
      <p className={classes["list-card__title"]}>{title && title}</p>
      <div className={classes["list-card__main"]}>
        {listImage?.nodes &&
          listImage.nodes.map((item, index) => (
            <div key={index} className={classes["list-card__main__image"]}>
              <Image
                src={item?.sourceUrl}
                alt={""}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
