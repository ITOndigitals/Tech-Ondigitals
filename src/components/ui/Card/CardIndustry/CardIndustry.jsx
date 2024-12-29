import React, { useState } from "react";
import classes from "./CardIndustry.module.scss";
import Image from "next/image";
import { DownNavIcon } from "../../Icons/ListIcon";
import useMediaQuery from "@/hooks/useMediaQuery";

const items = [
  {
    title: "Manufacturing",
    desc: "We develop solutions for the manufacturing sector spanning the range of production operations, from supply chain management and manufacturing execution to quality control and predictive maintenance.",
    image: "/tech-exp.png",
    background:
      "https://itapi.ondigitals.com/wp-content/uploads/2024/12/MobileAppDevelopment.jpg",
  },
  {
    title: "Technology",
    desc: "We build cutting-edge solutions for the tech sector, leveraging advanced software development practices and cloud computing innovations.",
    image: "/tech-exp.png",
    background:
      "https://itapi.ondigitals.com/wp-content/uploads/2024/12/WebsiteDesign.jpg",
  },
];
const parse = require("html-react-parser").default;

export default function CardIndustry({ data }) {
  // 1. Khai báo hằng số và trạng thái
  const [activeIndex, setActiveIndex] = useState(null);
  const [background, setBackground] = useState(
    data[0].backgroundImage?.node?.sourceUrl
  );
  const isMobile = useMediaQuery(1100);

  // 3. Hàm toggle mở/đóng và thay đổi background
  const toggleItem = (index, backgroundUrl) => {
    setActiveIndex(activeIndex === index ? null : index); // Đóng nếu đã mở, ngược lại mở
    setBackground(backgroundUrl);
  };

  const changeBackground = (backgroundUrl) => {
    if (background !== backgroundUrl) {
      setBackground(backgroundUrl);
    }
  };

  // 4. JSX Render
  return (
    <>
      {isMobile ? (
        <div
          style={{ backgroundImage: `url(${background})` }}
          className={classes["card-industry-mobile"]}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={classes["card-industry-mobile__item"]}
              onClick={() =>
                toggleItem(index, item.backgroundImage.node.sourceUrl)
              }
            >
              <div
                className={`${classes["card-industry-mobile__item__detail"]} ${
                  activeIndex === index
                    ? classes["card-industry-mobile__item__detail__open"]
                    : ""
                }`}
              >
                <div
                  className={
                    classes["card-industry-mobile__item__detail__image"]
                  }
                >
                  <Image
                    src={item?.iconImage?.node?.sourceUrl}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                </div>
                <p
                  className={
                    classes["card-industry-mobile__item__detail__title"]
                  }
                >
                  {item.title && item.title}
                </p>
                <DownNavIcon width={"24"} height={"24"} color={"#fff"} />
              </div>
              <div
                className={`${classes["card-industry-mobile__item__desc"]} ${
                  activeIndex === index
                    ? classes["card-industry-mobile__item__desc__open"]
                    : classes["card-industry-mobile__item__desc__closed"]
                }`}
              >
                {item.description && parse(item.description)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${background})` }}
          className={classes["card-industry"]}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={classes["card-industry__item"]}
              onMouseEnter={() =>
                changeBackground(item.backgroundImage.node.sourceUrl)
              }
            >
              <div className={classes["card-industry__item__image"]}>
                <Image
                  src={item?.iconImage?.node?.sourceUrl}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
              <p className={classes["card-industry__item__title"]}>
                {item.title && item.title}
              </p>
              <div className={classes["card-industry__item__desc"]}>
                {item.description && parse(item.description)}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
