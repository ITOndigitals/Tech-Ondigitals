import React from "react";
import SectionHero from "./components/SectionHero/SectionHero";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionAchievement from "./components/SectionAchievement/SectionAchievement";
import SectionApproach from "./components/SectionApproach/SectionApproach";
import SectionOurTechnology from "./components/SectionOurTechnology/SectionOurTechnology";
import CTA from "../ui/CTA/CTA";
import SectionIndustries from "./components/SectionIndustries/SectionIndustries";

export default function AboutUs({ data }) {
  if (!data) return null;
  const {
    pageAbouUs,
    listOurTechnology,
    listClients,
    cardUsp,
    cardStat,
    cardIndustry,
  } = data;
  return (
    <>
      <SectionHero data={pageAbouUs?.sectionHero} />
      <SectionAbout data={pageAbouUs?.sectionAbout} />
      <SectionAchievement data={{ ...cardStat, ...listClients }} />
      <SectionApproach data={cardUsp} />
      <SectionIndustries data={cardIndustry} />
      <SectionOurTechnology data={listOurTechnology} />
      <CTA />
    </>
  );
}
