import React from "react";
import classes from "./SectionWho.module.scss";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import ButtonCircle from "@/components/ui/Button/ButtonCircle/ButtonCircle";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser").default;
export default function SectionWho({ data }) {
  if (!data) return null;
  const { button, description, mainImage, title } = data;
  return (
    <section className={classes["section-who"]}>
      <div className="container">
        <div className={classes["section-who__main"]}>
          <div className={classes["section-who__main__left"]}>
            <h2>
              <HighlightedText
                primaryText="Who"
                secondaryText="we are"
                primaryTextColor="text-white"
                secondaryTextColor="text-stroke"
              />
            </h2>
            <p className={classes["section-who__main__left__title"]}>
              {title && title}
            </p>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["section-who__main__left__desc"]}
            >
              {description && parse(description)}
            </div>
            <ButtonCircle href={button?.url} text={button?.title} />
          </div>
          <div className={classes["section-who__main__right"]}>
            <Image
              src={mainImage?.node?.sourceUrl}
              alt={mainImage?.node?.altText}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
