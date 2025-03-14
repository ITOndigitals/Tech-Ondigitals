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
        {/* Structured Data: Organization */}
        <script type="application/ld+json">
          {JSON.stringify(
            {
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
                "On Tech is a Vietnam-based tech powerhouse providing world-class digital solutions with an agile approach. We design and implement advanced software solutions, websites, and mobile apps to simplify your business problems.",
              foundingDate: "2019-07-11",
              founders: [
                {
                  "@type": "Person",
                  name: "On Khai Nghieu",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "7th floor, 75 Ho Hao Hon, Co Giang Ward, District 1",
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
              knowsAbout: [
                "Website Design",
                "Mobile App Development",
                "Software Development",
                "IT Consulting",
                "Digital Transformation",
                "Cloud Solutions",
                "AI Integration",
                "Blockchain Development",
              ],
              numberOfEmployees: "50",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "79",
              },
              areaServed: ["Vietnam", "Southeast Asia", "Global"],
              awards: ["Top IT Services Agency in Vietnam"],
              brand: [
                {
                  "@type": "Brand",
                  name: "On Tech",
                },
              ],
              foundingLocation: {
                "@type": "Place",
                url: "https://www.wikidata.org/wiki/Q1854",
                address:
                  "75 Ho Hao Hon, Co Giang Ward, District 1, Ho Chi Minh City",
                name: "Ho Chi Minh City, Vietnam",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "IT Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Design",
                      description:
                        "We have accumulated extensive experience in creating websites for businesses across various industries.",
                      url: "https://tech.ondigitals.com/website-design-services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development",
                      description:
                        "Our services include a comprehensive package that covers all areas of mobile app development.",
                      url: "https://tech.ondigitals.com/mobile-app-development-services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Software Development",
                      description:
                        "We offer a comprehensive package of software development services.",
                      url: "https://tech.ondigitals.com/software-development-services",
                    },
                  },
                ],
              },
              interactionStatistic: {
                "@type": "InteractionCounter",
                interactionType: {
                  "@type": "https://schema.org/SearchAction",
                  name: "Website Visits",
                },
                userInteractionCount: "10568",
              },
              location: {
                "@type": "Place",
                name: "On Tech Office",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "7th floor, 75 Ho Hao Hon, Co Giang Ward, District 1",
                  addressLocality: "Ho Chi Minh City",
                  addressRegion: "Ho Chi Minh",
                  postalCode: "700000",
                  addressCountry: "Vietnam",
                },
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Website Design",
                    description:
                      "We have accumulated extensive experience in creating websites for businesses across various industries.",
                    url: "https://tech.ondigitals.com/website-design-services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile App Development",
                    description:
                      "Our services include a comprehensive package that covers all areas of mobile app development.",
                    url: "https://tech.ondigitals.com/mobile-app-development-services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Software Development",
                    description:
                      "We offer a comprehensive package of software development services.",
                    url: "https://tech.ondigitals.com/software-development-services",
                  },
                },
              ],
              member: ["50"],
              parentOrganization: {
                "@type": "Organization",
                name: "On Digitals",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "On Khai Nghieu",
                  },
                  datePublished: "2025-03-11", // Chuẩn hóa định dạng ngày
                  reviewBody: "Good Service!",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                },
              ],
              slogan: "Empowering Business with Innovative IT Services",
              subOrganization: ["On Tech"],
              telephone: "+84-906-648-177",
            },
            null,
            2
          )}
        </script>
        {/* Structured Data: Home Page - Website */}
        <script type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "On Tech",
              url: "https://tech.ondigitals.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://tech.ondigitals.com/?s={search_term_string}", // Sửa dấu "+" không cần thiết
                "query-input": "required name=search_term_string",
              },
            },
            null,
            2
          )}
        </script>
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
