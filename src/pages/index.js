import Homepage from "@/components/homepage/Homepage";
import { getDataHomepage } from "./api/graphql";
import Head from "next/head";
import replaceUrlsHead from "@/components/utils/replaceUrlsHead";

const parse = require("html-react-parser").default;
export default function Home({ data }) {
  const { fullHead, title } = data?.seo || {};
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "On Tech",
    alternateName: "On Digitals",
    url: "https://tech.ondigitals.com/",
    logo: "https://tech.ondigitals.com/_next/image?url=%2FIT.png&w=1920&q=75",
    sameAs: [
      "https://www.facebook.com/on.digitals.agency",
      "https://www.instagram.com/ondigitals",
      "https://www.linkedin.com/company/on-digitals/",
      "https://zalo.me/4436409039049370507",
    ],
    additionalType: [
      "https://schema.org/ITService",
      "https://schema.org/WebDesignService",
      "https://schema.org/SoftwareDevelopmentService",
      "https://schema.org/MobileApplication",
    ],
    description:
      "On Tech is a Vietnam-based tech powerhouse providing world-class digital solutions with an agile approach...",
    foundingDate: "2019-07-11",
    founders: [
      {
        "@type": "Person",
        name: "On Khai Nghieu",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "7th floor, 75 Ho Hao Hon, Co Giang Ward, District 1",
      addressLocality: "Ho Chi Minh City",
      addressRegion: "Ho Chi Minh",
      postalCode: "70000",
      addressCountry: "Vietnam",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-906-648-177",
      email: "contact@ondigitals.com",
      contactType: "Customer Service",
      availableLanguage: ["Vietnamese", "English"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "On Tech",
    url: "https://tech.ondigitals.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tech.ondigitals.com/?s=+{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Head>
        {parse(replaceUrlsHead(fullHead))}
        <title>{title && title}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
