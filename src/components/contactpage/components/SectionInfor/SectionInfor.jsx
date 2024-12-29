import React from "react";
import classes from "./SectionInfor.module.scss";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import {
  IconCalendar,
  IconMapPin,
  IconPhone,
} from "@/components/ui/Icons/ListIcon";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function SectionInfor() {
  return (
    <section className={classes["section-contact-infor"]}>
      <div className="container">
        <h2>
          <HighlightedText
            primaryText={"MEET"}
            secondaryText={"with us"}
            primaryTextColor={"text-white"}
            secondaryTextColor={"text-stroke"}
            isCharacter={false}
          />
        </h2>
        <div className={classes["section-contact-infor__content"]}>
          <div className={classes["section-contact-infor__content__left"]}>
            <Link
              href={
                "https://www.google.com/maps/place/Digital+Marketing+Agency+-+On+Digitals/@10.763109,106.69214,16z/data=!4m6!3m5!1s0x31752f3528168587:0xb88ddea7383b07dc!8m2!3d10.7621819!4d106.691325!16s%2Fg%2F11j7ygb01k?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
              }
              target="_blank"
              className={classes["section-contact-infor__content__left__item"]}
            >
              <div
                className={
                  classes["section-contact-infor__content__left__item__title"]
                }
              >
                <IconMapPin width={"24"} height={"24"} color={"#85C2FF"} />
                <p>Address:</p>
              </div>
              <p
                className={
                  classes["section-contact-infor__content__left__item__detail"]
                }
                style={{ fontFamily: MavenPro.style.fontFamily }}
              >
                7th floor, 75 Ho Hao Hon, Co Giang Ward, District 1, Ho Chi Minh
                City, Vietnam
              </p>
            </Link>
            <Link
              href={"tel:0906648177"}
              target="_blank"
              className={classes["section-contact-infor__content__left__item"]}
            >
              <div
                className={
                  classes["section-contact-infor__content__left__item__title"]
                }
              >
                <IconPhone width={"24"} height={"24"} color={"#85C2FF"} />
                <p>Hotline:</p>
              </div>
              <p
                className={
                  classes["section-contact-infor__content__left__item__detail"]
                }
                style={{ fontFamily: MavenPro.style.fontFamily }}
              >
                (+84)906648177
              </p>
            </Link>
            <div
              className={classes["section-contact-infor__content__left__item"]}
            >
              <div
                className={
                  classes["section-contact-infor__content__left__item__title"]
                }
              >
                <IconCalendar width={"24"} height={"24"} color={"#85C2FF"} />
                <p>Work-time:</p>
              </div>
              <p
                className={
                  classes["section-contact-infor__content__left__item__detail"]
                }
                style={{ fontFamily: MavenPro.style.fontFamily }}
              >
                9AM - 6PM (Monday to Friday)
              </p>
            </div>
          </div>
          <div className={classes["section-contact-infor__content__right"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6402117870234!2d106.68875007460305!3d10.762187159457106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3528168587%3A0xb88ddea7383b07dc!2sDigital%20Marketing%20Agency%20-%20On%20Digitals!5e0!3m2!1svi!2s!4v1694778233203!5m2!1svi!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
