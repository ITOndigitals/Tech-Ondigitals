import React from "react";
import classes from "./SectionOurTechnology.module.scss";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import ListCardTechnology from "@/components/ui/Card/ListCardTechnology/ListCardTechnology";
export default function SectionOurTechnology({ data }) {
  if (!data) return null;
  const { listTechnologyDetail } = data;
  return (
    <section className={classes["section-our-tech"]}>
      <div className="container">
        <div className={classes["section-our-tech__content"]}>
          <h2>
            <HighlightedText
              primaryText={"expertise : "}
              secondaryText={"FRAMEWORKs & TECHs we use"}
              primaryTextColor={"text-stroke"}
              secondaryTextColor={"text-white"}
              isCharacter={false}
            />
          </h2>
          <div className={classes["section-our-tech__content__list-tech"]}>
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
