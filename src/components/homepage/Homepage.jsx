import React from "react";
import SectionHero from "./components/SectionHero/SectionHero";
import SectionServices from "./components/SectionServices/SectionServices";
import SectionWhy from "./components/SectionWhy/SectionWhy";
import SectionIndustry from "./components/SectionIndustry/SectionIndustry";
import SectionWho from "./components/SectionWho/SectionWho";
import ContactSection from "./components/SectionContact/SectionContact";

export default function Homepage({ data }) {
  const { cardStat, cardUsp, cardServices, cardIndustry, homepage } =
    data || {};
  const { sectionHero, sectionWho } = homepage;
  return (
    <>
      <SectionHero data={sectionHero} />
      <SectionWho data={sectionWho} />
      <SectionServices data={cardServices} />
      <SectionWhy data={{ ...cardStat, ...cardUsp }} />
      <SectionIndustry data={cardIndustry} />
      <ContactSection />
    </>
  );
}
