import React from "react";
import classes from "./SectionApproach.module.scss";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import CardUSP from "@/components/ui/Card/CardUSP/CardUSP";
export default function SectionApproach({ data }) {
  if (!data) return null;
  const { listCardUsp } = data;
  return (
    <section className={classes["section-approach"]}>
      <div className="container">
        <div className={classes["section-approach__content"]}>
          <h2>
            <HighlightedText
              primaryText={"your success story : our"}
              secondaryText={"APPROACH"}
              primaryTextColor={"text-stroke"}
              secondaryTextColor={"text-white"}
              isCharacter={false}
            />
          </h2>
          <div className={classes["section-approach__content__card"]}>
            {listCardUsp &&
              listCardUsp.map((item, index) => (
                <div
                  key={index}
                  className={classes["section-approach__content__card__item"]}
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
