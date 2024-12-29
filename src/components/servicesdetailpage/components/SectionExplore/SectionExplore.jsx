import React from "react";
import classes from "./SectionExplore.module.scss";
import CardServices from "@/components/ui/Card/CardServices/CardServices";
export default function SectionExplore({ data }) {
  const { listCardServices, sectionExplore } = data || {};
  const { backgroundImage, textHead, textTitle } = sectionExplore || {};
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage?.node?.sourceUrl})` }}
      className={classes["section-explore"]}
    >
      <div className="container">
        <div className={classes["section-explore__content"]}>
          <h2>{textHead && textHead}</h2>
          <p className={classes["section-explore__content__title"]}>
            {textTitle && textTitle}
          </p>
          <div className={classes["section-explore__content__card"]}>
            {listCardServices &&
              listCardServices.map((item, index) => (
                <div
                  key={index}
                  className={classes["section-explore__content__card__item"]}
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
