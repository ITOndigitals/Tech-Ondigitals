import React from "react";
import dynamic from 'next/dynamic';
import SectionHero from "./components/SectionHero/SectionHero";

// Dynamic imports
const SectionIntro = dynamic(() => import("./components/SectionIntro/SectionIntro"));
const SectionAchievements = dynamic(() => import("./components/SectionAchievements/SectionAchievements"));
const SectionOurExpertise = dynamic(() => import("./components/SectionOurExpertise/SectionOurExpertise"));
const SectionOurServices = dynamic(() => import("./components/SectionOurServices/SectionOurServices"));
const SectionApproach = dynamic(() => import("./components/SectionApproach/SectionApproach"));
const SectionFQA = dynamic(() => import("./components/SectionFQA/SectionFQA"));
const SectionExplore = dynamic(() => import("./components/SectionExplore/SectionExplore"));
const CTA = dynamic(() => import("../ui/CTA/CTA"));

export default function ServicesDetailPage({ data }) {
  if (!data) return null;

  const { listClients, listOurTechnology, cardServices, pageServices } = data;
  const {
    sectionFqa,
    sectionHero,
    sectionIntro,
    sectionOurApproach,
    sectionOurClients,
    sectionOurExpertise,
    sectionOurServices,
    sectionExplore,
  } = pageServices || {};

  return (
    <>
      <SectionHero data={sectionHero} />
      <SectionIntro data={sectionIntro} />
      <SectionAchievements data={{ ...listClients, sectionOurClients }} />
      <SectionOurExpertise
        data={{ ...listOurTechnology, sectionOurExpertise }}
      />
      <SectionOurServices data={sectionOurServices} />
      <SectionApproach data={sectionOurApproach} />
      <SectionFQA data={sectionFqa} />
      <SectionExplore data={{ ...cardServices, sectionExplore }} />
      <CTA />
    </>
  );
}
