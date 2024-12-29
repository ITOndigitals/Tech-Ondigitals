import ContactPage from "@/components/contactpage/ContactPage";
import React from "react";
import { getDataContactPage } from "../api/graphql";
import replaceUrlsHead from "@/components/utils/replaceUrlsHead";
import Head from "next/head";

const parse = require("html-react-parser").default;
export default function Contact({ data }) {
  const { fullHead, title } = data?.seo || {};

  return (
    <>
      <Head>
        {fullHead && parse(replaceUrlsHead(fullHead))}
        <title>{title && title}</title>
      </Head>
      <ContactPage data={data} />
    </>
  );
}
export const getServerSideProps = async () => {
  const slug = "contact";
  try {
    const data = await getDataContactPage(slug);
    return {
      props: {
        data: data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        data: [],
      },
    };
  }
};
