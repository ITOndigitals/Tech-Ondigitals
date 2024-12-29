import Homepage from "@/components/homepage/Homepage";
import { getDataHomepage } from "./api/graphql";
import Head from "next/head";
import replaceUrlsHead from "@/components/utils/replaceUrlsHead";

const parse = require("html-react-parser").default;
export default function Home({ data }) {
  const { fullHead, title } = data?.seo || {};

  return (
    <>
      <Head>
        {parse(replaceUrlsHead(fullHead))}
        <title>{title && title}</title>
      </Head>
      <Homepage data={data} />
    </>
  );
}
export const getServerSideProps = async () => {
  const ipPage = 23;
  try {
    const data = await getDataHomepage(ipPage);
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
