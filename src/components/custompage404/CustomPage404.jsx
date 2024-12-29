import React from "react";
import classes from "./CustomPage404.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../ui/Icons/ListIcon";

export default function CustomPage404() {
  const text =
    "Lost in the digital space? No worries, let's navigate back together.";
  return (
    <>
      <section className={classes["section-page-404"]}>
        <div className="container">
          <div className={classes["content-page-404"]}>
            <div className={classes["content-page-404__left"]}>
              <Image
                src="https://api.ondigitals.com/wp-content/uploads/2024/03/bannerpage404.png"
                fill
                style={{ objectFit: "cover" }}
                alt="IT Services Ondigitals"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            <div className={classes["content-page-404__right"]}>
              <h1>Lost in the digital space?</h1>
              <p className={classes["content-page-404__right__text"]}>{text}</p>
              <Link
                className={classes["content-page-404__right__btn"]}
                href={"/"}
              >
                <p>Back to home</p>
                <ArrowRight width={24} height={24} color="#FFF" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
