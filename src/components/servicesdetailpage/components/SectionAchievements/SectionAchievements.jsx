import React from "react";
import classes from "./SectionAchievements.module.scss";
import CarouselClients from "@/components/ui/Carousel/CarouselClients/CarouselClients";
export default function SectionAchievements({ data }) {
  if (!data) return null;
  const { listItem, sectionOurClients } = data;
  const { backgroundImage, textHeading, title } = sectionOurClients || {};
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage?.node?.sourceUrl})` }}
      className={classes["section-achi"]}
    >
      <div className="container">
        <div className={classes["section-achi__content"]}>
          <h2>{textHeading && textHeading}</h2>
          <p className={classes["section-achi__content__title"]}>
            {title && title}
          </p>
          <div style={{ marginTop: "30px" }}>
            <CarouselClients data={listItem} />
          </div>
        </div>
      </div>
    </section>
  );
}
