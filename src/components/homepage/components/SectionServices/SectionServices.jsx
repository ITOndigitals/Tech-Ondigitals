import React from "react";
import classes from "./SectionServices.module.scss";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import CardServices from "@/components/ui/Card/CardServices/CardServices";
export default function SectionServices({ data }) {
  const { listCardServices } = data;
  return (
    <section className={classes["section-services"]}>
      <div className="container">
        <div className={classes["section-services__main"]}>
          <h2>
            <HighlightedText
              primaryText="Our"
              secondaryText="services"
              primaryTextColor="text-stroke"
              secondaryTextColor="text-white"
            />
          </h2>
          <p className={classes["section-services__main__decs"]}>
            IT Solutions for Enterprises, SMBs, Startups, and You
          </p>
          <div className={classes["section-services__main__card"]}>
            {listCardServices &&
              listCardServices.map((item, index) => (
                <div
                  key={index}
                  className={classes["section-services__main__card__item"]}
                >
                  <CardServices data={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
