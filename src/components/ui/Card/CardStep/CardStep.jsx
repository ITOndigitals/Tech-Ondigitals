import React, { useState } from "react";
import classes from "./CardStep.module.scss";
import { Maven_Pro } from "next/font/google";
import { DownNavIcon } from "../../Icons/ListIcon";
import useMediaQuery from "@/hooks/useMediaQuery";

const parse = require("html-react-parser").default;
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function CardStep({ data, index }) {
  const [showContent, setShowContent] = useState(false); // Gọi useState tại đầu component
  const isMobile = useMediaQuery(550); // Gọi useMediaQuery tại đầu component

  // Nếu không có data, trả về null
  if (!data) {
    return null;
  }

  const isOdd = index % 2 !== 0;
  const { textStep, svgIcon, textDesc, textTitle } = data;

  const openContent = () => {
    setShowContent((old) => !old);
  };

  return (
    <div className={classes["card-step"]}>
      <div className={classes["card-step__left"]}>
        <p
          style={{ backgroundColor: isOdd ? "#85C2FF" : "#FF0032" }}
          className={classes["card-step__left__dot"]}
        ></p>
        <p className={classes["card-step__left__step"]}>{textStep}</p>
      </div>
      <div className={classes["card-step__right"]}>
        <div className={classes["card-step__right__icon"]}>
          {svgIcon && parse(svgIcon)}
        </div>
        <div
          className={classes["card-step__right__content"]}
          onClick={openContent}
        >
          {isMobile ? (
            <>
              <div className={classes["card-step__right__content__mobile"]}>
                <div
                  className={classes["card-step__right__content__mobile__left"]}
                >
                  <div
                    className={
                      classes["card-step__right__content__mobile__left__icon"]
                    }
                  >
                    {svgIcon && parse(svgIcon)}
                  </div>
                  <p className={classes["card-step__right__content__title"]}>
                    {textTitle && textTitle}
                  </p>
                </div>
                <div
                  style={{ height: "30px" }}
                  className={`${
                    showContent
                      ? classes[
                          "card-step__right__content__mobile__left__icon-arrow"
                        ]
                      : ""
                  }`}
                >
                  <DownNavIcon width={30} height={30} color="#fff" />
                </div>
              </div>
              {showContent && (
                <div
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                  className={classes["card-step__right__content__text"]}
                >
                  {textDesc && parse(textDesc)}
                </div>
              )}
            </>
          ) : (
            <>
              <p className={classes["card-step__right__content__title"]}>
                {textTitle && textTitle}
              </p>
              <div
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["card-step__right__content__text"]}
              >
                {textDesc && parse(textDesc)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
