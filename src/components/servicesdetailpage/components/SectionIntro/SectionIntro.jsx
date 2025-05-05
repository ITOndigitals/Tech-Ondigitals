import React from "react";
import classes from "./SectionIntro.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser").default;
export default function SectionIntro({ data }) {
  if (!data) return null;
  const { backgroundImage, mainImage, textDesc, textHead, title } = data;
  return (
    <>
      <section
        style={{ backgroundImage: `url(${backgroundImage?.node?.sourceUrl})` }}
        className={classes["section-intro"]}
      >
        <div className="container">
          <div className={classes["section-intro__content"]}>
            <div className={classes["section-intro__content__left"]}>
              <h2>{textHead && textHead}</h2>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["section-intro__content__left__title"]}
              >
                {title && title}
              </p>
              <div
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["section-intro__content__left__desc"]}
              >
                {textDesc && parse(textDesc)}
              </div>
            </div>
            <div className={classes["section-intro__content__right"]}>
              <div className={classes["section-intro__content__right__image"]}>
                <Image
                  src={mainImage?.node?.sourceUrl}
                  alt={title && title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
