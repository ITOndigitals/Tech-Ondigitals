import React from "react";
import classes from "./SectionApproach.module.scss";
import CardStep from "@/components/ui/Card/CardStep/CardStep";
export default function SectionApproach({ data }) {
  if (!data) return null;
  const { backgroundImage, listCardStep, textHeading, title } = data;
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage?.node?.sourceUrl})` }}
      className={classes["section-approach"]}
    >
      <div className="container">
        <div className={classes["section-approach__content"]}>
          <h2>{textHeading && textHeading}</h2>
          <p className={classes["section-approach__content__title"]}>
            {title && title}
          </p>
          <div className={classes["section-approach__content__list-card"]}>
            {listCardStep.map((item, index) => (
              <CardStep key={index} data={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
