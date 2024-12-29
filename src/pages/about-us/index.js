import AboutUs from "@/components/aboutuspage/AboutUs";
import React from "react";
import Head from "next/head";
import replaceUrlsHead from "@/components/utils/replaceUrlsHead";
import { getDataAboutUsPage } from "../api/graphql";

const parse = require("html-react-parser").default;
export default function index({ data }) {
  const { fullHead, title } = data?.seo;
  return (
    <>
      <Head>
        {parse(replaceUrlsHead(fullHead))}
        <title>{title && title}</title>
      </Head>
      <AboutUs data={data} />
    </>
  );
}
export const getServerSideProps = async () => {
  const ipPage = 107;
  try {
    const data = await getDataAboutUsPage(ipPage);
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
