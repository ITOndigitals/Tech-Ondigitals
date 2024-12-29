import React from "react";
import classes from "./SectionAchievement.module.scss";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import CarouselClients from "@/components/ui/Carousel/CarouselClients/CarouselClients";
import CardStat from "@/components/ui/Card/CardStat/CardStat";
export default function SectionAchievement({ data }) {
  if (!data) return null;
  const { listCardStat, textTitle, listItem } = data;
  return (
    <section className={classes["section-achievement"]}>
      <div className="container">
        <div className={classes["section-achievement__content"]}>
          <h2>
            <HighlightedText
              primaryText={"at a glance : our "}
              secondaryText={"KEY METRICS"}
              primaryTextColor={"text-stroke"}
              secondaryTextColor={"text-white"}
              isCharacter={false}
            />
          </h2>
          <div className={classes["section-achievement__content__USP-list"]}>
            {listCardStat &&
              listCardStat.map((item, index) => (
                <div
                  key={index}
                  className={
                    classes["section-achievement__content__USP-list__item"]
                  }
                >
                  <CardStat data={item} />
                </div>
              ))}
          </div>
          <p className={classes["section-achievement__content__title"]}>
            {textTitle && textTitle}
          </p>
          <div>
            <CarouselClients data={listItem} />
          </div>
        </div>
      </div>
    </section>
  );
}
