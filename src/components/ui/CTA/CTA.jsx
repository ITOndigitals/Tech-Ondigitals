import React from "react";
import classes from "./CTA.module.scss";
import HighlightedText from "../Text/HighlightedText/HighlightedText";
import Button from "../Button/Button/Button";
export default function CTA() {
  return (
    <div className={classes["cta"]}>
      <div className="container">
        <div className={classes["cta__content"]}>
          <div className={classes["cta__content__left"]}>
            <HighlightedText
              primaryText={"Start your"}
              secondaryText={"DIGITAL TRANSFORMATION today"}
              primaryTextColor={"text-stroke"}
              secondaryTextColor={"text-white"}
              isCharacter={false}
            />
            <p className={classes["cta__content__left__text"]}>
              Tell us about your business challenge and get a tailored
              consultation today.
            </p>
          </div>
          <div className={classes["cta__content__right"]}>
            <Button href="/contact" title="Send us a message" />
          </div>
        </div>
      </div>
    </div>
  );
}
