"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./SectionHero.module.scss";
import ButtonCircle from "@/components/ui/Button/ButtonCircle/ButtonCircle";
import FadingText from "@/components/utils/FadingText";

export default function SectionHero({ data }) {
  // Ngăn component render khi data chưa sẵn sàng
  if (!data) {
    return null;
  }
  const { background, button, image, listTextAnimation, textHeading } = data;
  const textValues = listTextAnimation.map((item) => item.text);
  return (
    <section
      style={{ backgroundImage: `url(${background?.node?.sourceUrl})` }}
      className={classes["hero-section"]}
    >
      <div className="container">
        <div>
          <h1 className={classes["hero-section-headline"]}>
            {textHeading} <FadingText words={textValues} />
          </h1>
          <div className={classes["hero-section__image"]}>
            <Image
              src={image?.node?.sourceUrl}
              alt={image?.node?.altText}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
          <div className={classes["hero-section__btn"]}>
            <ButtonCircle href={button?.url} text={button?.title} />
          </div>
        </div>
      </div>
    </section>
  );
}
