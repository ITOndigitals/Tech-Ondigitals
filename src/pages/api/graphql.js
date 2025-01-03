import request, { gql } from "graphql-request";
import { endPointApi } from "./endpoint";

export const getDataHomepage = async (id) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetpageHomepage($id: Int) {
      pageBy(pageId: $id) {
        seo {
          fullHead
          title
        }
        cardStat {
          listCardStat {
            number
            title
            icon {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
        cardUsp {
          listCardUsp {
            descriptionUsp
            fieldGroupName
            titleUsp
            imageUsp {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
        cardServices {
          listCardServices {
            button {
              title
              url
            }
            titleServices
            descriptionServices
            imageServices {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
        cardIndustry {
          listCardIndustry {
            backgroundImage {
              node {
                sourceUrl
              }
            }
            description
            title
            iconImage {
              node {
                sourceUrl
              }
            }
          }
        }
        homepage {
          sectionHero {
            background {
              node {
                altText
                sourceUrl
              }
            }
            button {
              title
              url
            }
            image {
              node {
                altText
                sourceUrl
              }
            }
            listTextAnimation {
              text
            }
            textHeading
          }
          sectionWho {
            button {
              title
              url
            }
            description
            mainImage {
              node {
                altText
                sourceUrl
              }
            }
            title
          }
        }
      }
    }
  `;
  const variables = { id };
  try {
    const data = await request(endpoint, query, variables);
    return data?.pageBy;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
export const getDataAboutUsPage = async (id) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetDataAboutUspage($id: Int) {
      pageBy(pageId: $id) {
        seo {
          fullHead
          title
        }
        pageAbouUs {
          sectionAbout {
            mainImage {
              node {
                altText
                sourceUrl
              }
            }
            textDesc
            title
            backgroundImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          sectionHero {
            title
            imageBackground {
              node {
                altText
                sourceUrl
              }
            }
            imageText {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
        cardStat {
          listCardStat {
            title
            number
            icon {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
        cardIndustry {
          listCardIndustry {
            title
            description
            iconImage {
              node {
                altText
                sourceUrl
              }
            }
            backgroundImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
        cardUsp {
          listCardUsp {
            descriptionUsp
            titleUsp
            imageUsp {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
        listOurTechnology {
          listTechnologyDetail {
            title
            listImage(first: 100) {
              nodes {
                altText
                sourceUrl
              }
            }
          }
        }
        listClients {
          textTitle
          listItem {
            nodes {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  `;
  const variables = { id };
  try {
    const data = await request(endpoint, query, variables);
    return data?.pageBy;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
export const getDataServicepage = async (slug) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetDataServicepage($slug: String) {
      serviceBy(slug: $slug) {
        pageServices {
          sectionFqa {
            backgroundImage {
              node {
                sourceUrl
              }
            }
            listFqa {
              textDesc
              title
            }
            textHead
            textTitle
          }
          sectionHero {
            backgroundImage {
              node {
                sourceUrl
              }
            }
            buttonLink {
              title
              url
            }
            textHead
            textTitle
          }
          sectionIntro {
            backgroundImage {
              node {
                sourceUrl
              }
            }
            mainImage {
              node {
                sourceUrl
                altText
              }
            }
            textDesc
            textHead
            title
          }
          sectionOurApproach {
            backgroundImage {
              node {
                sourceUrl
              }
            }
            listCardStep {
              svgIcon
              textDesc
              textStep
              textTitle
            }
            textHeading
            title
          }
          sectionOurClients {
            backgroundImage {
              node {
                sourceUrl
              }
            }
            textHeading
            title
          }
          sectionOurExpertise {
            textHead
            title
          }
          sectionOurServices {
            backgroundImage {
              node {
                sourceUrl
              }
            }
            listSubCard {
              icon {
                node {
                  sourceUrl
                }
              }
              textDesc
              title
            }
            textHead
            title
          }
          sectionExplore {
            textHead
            textTitle
            backgroundImage {
              node {
                sourceUrl
              }
            }
          }
        }
        listClients {
          textTitle
          listItem {
            nodes {
              sourceUrl
            }
          }
        }
        listOurTechnology {
          listTechnologyDetail {
            listImage {
              nodes {
                sourceUrl
              }
            }
            title
          }
        }
        seo {
          fullHead
          title
        }
        cardServices {
          listCardServices {
            button {
              title
              url
            }
            descriptionServices
            titleServices
            imageServices {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;
  const variables = { slug };
  try {
    const data = await request(endpoint, query, variables);
    return data?.serviceBy;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
export const getListSlugServices = async () => {
  const endpoint = endPointApi;
  const query = gql`
    query GetListSlugServices {
      services(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;
  try {
    const data = await request(endpoint, query);
    return data?.services?.nodes;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
export const getDataContactPage = async (slug) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetDataContactPage($slug: String) {
      pageBy(uri: $slug) {
        pageContact {
          sectionIntro {
            title
            contactForm {
              textLable
              textPlaceholder
            }
            backgroundImage {
              node {
                sourceUrl
              }
            }
          }
        }
        seo {
          fullHead
          title
        }
      }
    }
  `;
  const variables = { slug };
  try {
    const data = await request(endpoint, query, variables);
    return data?.pageBy;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
