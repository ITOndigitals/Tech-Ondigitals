import React from "react";
import classes from "./SectionWhy.module.scss";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import CardStat from "@/components/ui/Card/CardStat/CardStat";
import CardUSP from "@/components/ui/Card/CardUSP/CardUSP";
export default function SectionWhy({ data }) {
  if (!data) return null;
  const { listCardStat, listCardUsp } = data;
  return (
    <section className={classes["section-why"]}>
      <div className="container">
        <div className={classes["section-why__main"]}>
          <h2>
            <HighlightedText
              primaryText="Why work with"
              secondaryText="On Tech "
              primaryTextColor="text-white"
              secondaryTextColor="text-stroke"
            />
          </h2>
          <div className={classes["section-why__main__card-stat"]}>
            {listCardStat &&
              listCardStat.map((item, index) => (
                <div
                  key={index}
                  className={classes["section-why__main__card-stat__item"]}
                >
                  <CardStat data={item} />
                </div>
              ))}
          </div>
          <div className={classes["section-why__main__cardUSP"]}>
            {listCardUsp &&
              listCardUsp.map((item, index) => (
                <div
                  key={index}
                  className={classes["section-why__main__cardUSP__item"]}
                >
                  <CardUSP data={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
