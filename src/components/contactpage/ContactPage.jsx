import React from "react";
import SectionForm from "./components/SectionForm/SectionForm";
import SectionInfor from "./components/SectionInfor/SectionInfor";

export default function ContactPage({ data }) {
  const { sectionIntro } = data?.pageContact || {};
  return (
    <>
      <SectionForm data={sectionIntro} />
      <SectionInfor />
    </>
  );
}
