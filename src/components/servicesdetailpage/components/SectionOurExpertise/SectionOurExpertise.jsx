import React from "react";
import classes from "./SectionOurExpertise.module.scss";
import ListCardTechnology from "@/components/ui/Card/ListCardTechnology/ListCardTechnology";
export default function SectionOurExpertise({ data }) {
  if (!data) return null;
  const { listTechnologyDetail, sectionOurExpertise } = data || {};
  const { textHead, title } = sectionOurExpertise || {};
  return (
    <section className={classes["section-ourEx"]}>
      <div className="container">
        <div className={classes["section-ourEx__content"]}>
          <h2>{textHead && textHead}</h2>
          <p className={classes["section-ourEx__content__title"]}>
            {title && title}
          </p>
          <div className={classes["section-ourEx__content__list-tech"]}>
            {listTechnologyDetail &&
              listTechnologyDetail.map((item, index) => (
                <ListCardTechnology key={index} data={item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
