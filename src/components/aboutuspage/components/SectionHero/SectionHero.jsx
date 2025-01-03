import React from "react";
import classes from "./SectionHero.module.scss";
import Image from "next/image";
export default function SectionHero({ data }) {
  if (!data) return null;
  const { title, imageBackground, imageText } = data;
  return (
    <section
      style={{ backgroundImage: `url(${imageBackground?.node?.sourceUrl})` }}
      className={classes["section-hero"]}
    >
      <div className="container">
        <div className={classes["section-hero__image"]}>
          <Image
            src={imageText?.node?.sourceUrl}
            alt="On Tech"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
          />
        </div>
        <h1 className={classes["section-hero__title"]}>{title && title}</h1>
      </div>
    </section>
  );
}
