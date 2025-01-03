import React from "react";
import classes from "./HighlightedText.module.scss";

export default function HighlightedText({
  primaryText,
  secondaryText,
  primaryTextColor,
  secondaryTextColor,
  isCharacter = true,
}) {
  return (
    <div className={classes["highlight"]}>
      {isCharacter ? (
        <>
          <span className={`text-stroke`}>{"< "}</span>
          <span className={`${primaryTextColor}`}>{primaryText}</span>{" "}
          <span className={`${secondaryTextColor}`}>{secondaryText}</span>
          <span className={`text-stroke`}>{" />"}</span>
        </>
      ) : (
        <>
          <span className={`${primaryTextColor}`}>{primaryText}</span>{" "}
          <span className={`${secondaryTextColor}`}>{secondaryText}</span>
        </>
      )}
    </div>
  );
}
