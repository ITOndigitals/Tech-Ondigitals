import React, { useEffect, useState } from "react";
import classes from "./SectionFQA.module.scss";
import { Maven_Pro } from "next/font/google";
import { DownNavIcon } from "@/components/ui/Icons/ListIcon";
const data1 = [
  {
    title: "dsadasdas",
    content: "saddasdas",
  },
  {
    title: "dsadasdas",
    content: "saddasdas",
  },
  {
    title: "dsadasdas",
    content: "saddasdas",
  },
  {
    title: "dsadasdas",
    content: "saddasdas",
  },
  {
    title: "dsadasdas",
    content: "saddasdas",
  },
  {
    title: "dsadasdas",
    content: "saddasdas",
  },
];
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser").default;
export default function SectionFQA({ data }) {
  const { backgroundImage, listFqa, textHead, textTitle } = data;
  const [expandedItems, setExpandedItems] = useState(
    Array(listFqa?.length).fill(false)
  );

  const toggleItem = (index) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  useEffect(() => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[0] = true;
    setExpandedItems(newExpandedItems);
  }, []);
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage?.node?.sourceUrl})` }}
      className={classes["SectionFQA"]}
    >
      <div className="container">
        <div className={classes["SectionFQA__content"]}>
          <h2>{textHead && textHead}</h2>
          <p className={classes["SectionFQA__content__title"]}>
            {textTitle && textTitle}
          </p>
          <div className={classes["SectionFQA__content__list-item"]}>
            {listFqa &&
              listFqa.map((item, index) => (
                <div
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                  key={index}
                  className={classes["SectionFQA__content__list-item__detail"]}
                >
                  <div
                    className={
                      classes["SectionFQA__content__list-item__detail__title"]
                    }
                    onClick={() => toggleItem(index)}
                  >
                    <p>{item?.title && item.title}</p>
                    <div
                      className={`${
                        classes[
                          "SectionFQA__content__list-item__detail__title__icon"
                        ]
                      } ${
                        !expandedItems[index]
                          ? classes[
                              "SectionFQA__content__list-item__detail__title__icon__turn"
                            ]
                          : ""
                      }`}
                    >
                      <DownNavIcon width={30} height={30} color="#fff" />
                    </div>
                  </div>
                  {expandedItems[index] && (
                    <div
                      className={
                        classes["SectionFQA__content__list-item__detail__desc"]
                      }
                    >
                      {item?.textDesc && parse(item.textDesc)}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
