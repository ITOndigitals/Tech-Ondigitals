import React from "react";
import classes from "./SectionOurServices.module.scss";
import ListCardSubServices from "@/components/ui/Card/ListCardSubServices/ListCardSubServices";
export default function SectionOurServices({ data }) {
  if (!data) return null;
  const { listSubCard, textHead, title, backgroundImage } = data;
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage?.node?.sourceUrl})` }}
      className={classes["section-our-services"]}
    >
      <div className="container">
        <div className={classes["section-our-services__content"]}>
          <h2>{textHead && textHead}</h2>
          <p className={classes["section-our-services__content__title"]}>
            {title && title}
          </p>
          <div style={{ marginTop: "50px" }}>
            <ListCardSubServices data={listSubCard} />
          </div>
        </div>
      </div>
    </section>
  );
}
