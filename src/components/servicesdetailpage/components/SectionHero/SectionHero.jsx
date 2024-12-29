import React from "react";
import classes from "./SectionHero.module.scss";
import ButtonCircle from "@/components/ui/Button/ButtonCircle/ButtonCircle";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function SectionHero({ data }) {
  if (!data) return null;
  const { backgroundImage, buttonLink, textHead, textTitle } = data;
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage?.node?.sourceUrl})` }}
      className={classes["section-hero"]}
    >
      <div className="container">
        <div className={classes["section-hero__content"]}>
          <h1>{textHead && textHead}</h1>
          <p
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["section-hero__content__title"]}
          >
            {textTitle && textTitle}
          </p>
          <ButtonCircle text={buttonLink?.title} href={buttonLink?.url} />
        </div>
      </div>
    </section>
  );
}
