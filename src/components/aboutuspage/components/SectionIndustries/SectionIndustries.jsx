import React from "react";
import classes from "./SectionIndustries.module.scss";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import CardIndustry from "@/components/ui/Card/CardIndustry/CardIndustry";
export default function SectionIndustries({ data }) {
  if (!data) return null;
  const { listCardIndustry } = data;
  return (
    <section className={classes["section-industries"]}>
      <div className="container">
        <div className={classes["section-industries__content"]}>
          <h2>
            <HighlightedText
              primaryText={"focus : "}
              secondaryText={"INDUSTRIES we serve"}
              primaryTextColor={"text-stroke"}
              secondaryTextColor={"text-white"}
              isCharacter={false}
            />
          </h2>
          <div className={classes["section-industries__content__card"]}>
            <CardIndustry data={listCardIndustry} />
          </div>
        </div>
      </div>
    </section>
  );
}
