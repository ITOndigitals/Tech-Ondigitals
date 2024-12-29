import React, { useState } from "react";
import classes from "./ListCardSubServices.module.scss";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { DownNavIcon } from "../../Icons/ListIcon";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser").default;

export default function ListCardSubServices({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile = useMediaQuery(768);
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      {!isMobile ? (
        <div className={classes["list-card"]}>
          {data &&
            data.map((item, index) => (
              <div key={index} className={classes["list-card__item"]}>
                <div className={classes["list-card__item__title"]}>
                  <Image
                    src={item?.icon?.node?.sourceUrl}
                    alt={item?.title}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                  <p>{item?.title}</p>
                </div>
                <div
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                  className={classes["list-card__item__desc"]}
                >
                  {item?.textDesc && parse(item?.textDesc)}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className={classes["list-card"]}>
          {data &&
            data.map((item, index) => (
              <div
                key={index}
                className={classes["list-card__item"]}
                onClick={() => toggleItem(index)}
              >
                <div
                  className={`${classes["list-card__item__title"]} ${
                    activeIndex === index
                      ? classes["list-card__item__title__open"]
                      : ""
                  }`}
                >
                  <Image
                    src={item?.icon?.node?.sourceUrl}
                    alt={item?.title}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                  <p>{item?.title}</p>
                  <div>
                    <DownNavIcon width={"24"} height={"24"} color={"#fff"} />
                  </div>
                </div>
                <div
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                  className={`${
                    activeIndex === index
                      ? classes["list-card__item__desc-open"]
                      : classes["list-card__item__desc-closed"]
                  }`}
                >
                  {item?.textDesc && parse(item?.textDesc)}
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
