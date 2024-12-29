import React from "react";
import classes from "./SectionAbout.module.scss";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser").default;
export default function SectionAbout({ data }) {
  if (!data) return null;
  const { backgroundImage, title, mainImage, textDesc } = data;
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage?.node?.sourceUrl})` }}
      className={classes["section-about"]}
    >
      <div className="container">
        <div className={classes["section-about__content"]}>
          <div className={classes["section-about__content__left"]}>
            <h2>
              <HighlightedText
                primaryText={"about :"}
                secondaryText={"US"}
                primaryTextColor={"text-stroke"}
                secondaryTextColor={"text-white"}
                isCharacter={false}
              />
            </h2>
            <div className={classes["section-about__content__left__title"]}>
              {title && parse(title)}
            </div>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["section-about__content__left__desc"]}
            >
              {textDesc && parse(textDesc)}
            </div>
          </div>
          <div className={classes["section-about__content__right"]}>
            <Image
              src={mainImage?.node?.sourceUrl}
              alt="About Us"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
