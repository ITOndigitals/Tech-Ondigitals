import React from "react";
import classes from "./SectionIndustry.module.scss";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import CardIndustry from "@/components/ui/Card/CardIndustry/CardIndustry";
export default function SectionIndustry({ data }) {
  const { listCardIndustry } = data || [];
  return (
    <section className={classes["section-industry"]}>
      <div className="container">
        <div className={classes["section-industry__main"]}>
          <h2>
            <HighlightedText
              primaryText="Industry"
              secondaryText="we serve"
              primaryTextColor="text-white"
              secondaryTextColor="text-stroke"
            />
          </h2>
          <div>
            <CardIndustry data={listCardIndustry} />
          </div>
        </div>
      </div>
    </section>
  );
}
