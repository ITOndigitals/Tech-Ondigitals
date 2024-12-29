import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import ButtonIcon from "@/components/ui/Button/ButtonIcon/ButtonIcon";
import {
  CancelIcon,
  ClutchIcon,
  FacebookIcon,
  IconZalo,
  InstagramIcon,
  LinkedIcon,
  Menu,
} from "@/components/ui/Icons/ListIcon";
import { Maven_Pro } from "next/font/google";
import useMediaQuery from "@/hooks/useMediaQuery";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const listIconSocial = [
  {
    id: 1,
    slug: "https://www.facebook.com/on.digitals.agency",
    icon: <FacebookIcon width={24} height={24} color={"#fff"} />,
  },
  {
    id: 2,
    slug: "https://www.linkedin.com/company/on-digitals",
    icon: <LinkedIcon width={24} height={24} color={"#fff"} />,
  },
  {
    id: 3,
    slug: "https://www.instagram.com/ondigitals",
    icon: <InstagramIcon width={24} height={24} color={"#fff"} />,
  },
  {
    id: 4,
    slug: "https://zalo.me/4436409039049370507",
    icon: <IconZalo width={51} height={24} color={"#fff"} />,
  },
  {
    id: 5,
    slug: "https://clutch.co/profile/digitals-0#review-1252680",
    icon: <ClutchIcon width={24} height={24} color={"#fff"} />,
  },
];

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery(767);
  const [showMenu, setShowMenu] = useState(false);
  const changeShowMenu = () => {
    setShowMenu((old) => !old);
  };
  return (
    <>
      <div
        className={`${classes["menu-mobile"]} ${
          showMenu ? classes["show-menu-mobile"] : ""
        }`}
      >
        <div className={classes["menu-mobile__content"]}>
          <Link
            className={classes["menu-mobile__content__link"]}
            href={"/about-us"}
          >
            <p>About us</p>
          </Link>
          <div className={classes["menu-mobile__content__subLink"]}>
            <div className={classes["menu-mobile__content__link"]}>
              <p>Services</p>
            </div>
            <ul style={{ fontFamily: MavenPro.style.fontFamily }}>
              <li>
                <Link href={"/website-design-services"}>Web Design</Link>
              </li>
              <li>
                <Link href={"/mobile-app-development-services"}>Mobile Development</Link>
              </li>
              <li>
                <Link href={"/software-development-services"}>Software Development</Link>
              </li>
            </ul>
          </div>
          <ButtonIcon href="/contact" />
          <Link
            className={classes["menu-mobile__content__email"]}
            target="_blank"
            href={"mailto:contact@ondigitals.com"}
          >
            contact@ondigitals.com
          </Link>
          <div className={classes["menu-mobile__content__icon-social"]}>
            {listIconSocial &&
              listIconSocial.map((item) => (
                <Link
                  target="_blank"
                  rel="nofollow"
                  key={item.id}
                  href={item?.slug || "/"}
                >
                  {item.icon}
                </Link>
              ))}
          </div>
        </div>
      </div>
      <header
        className={classes["header"]}
        style={{
          position: showMenu ? "fixed" : "absolute",
        }}
      >
        <div className="container">
          <div className={classes["header__main"]}>
            <Link
              style={{ opacity: isMobile && showMenu ? "0" : "1" }}
              href={"/"}
              className={classes["header__main__logo"]}
            >
              <Image
                src={"/IT.png"}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </Link>
            {isMobile ? (
              <>
                <div onClick={changeShowMenu} style={{ cursor: "pointer" }}>
                  {showMenu ? (
                    <CancelIcon width="40" height="40" color="#fff" />
                  ) : (
                    <Menu width="30" height="30" color="#fff" />
                  )}
                </div>
              </>
            ) : (
              <>
                <div className={classes["header__main__menu"]}>
                  <Link
                    className={classes["header__main__menu__link"]}
                    href={"/about-us"}
                  >
                    About us
                  </Link>
                  <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={classes["header__main__menu__service"]}
                  >
                    Services
                    {isHovered && (
                      <ul>
                        <li>
                          <Link href={"/website-design-services"}>Web Design</Link>
                        </li>
                        <li>
                          <Link href={"/mobile-app-development-services"}>Mobile Development</Link>
                        </li>{" "}
                        <li>
                          <Link href={"/software-development-services"}>Software Development</Link>
                        </li>
                      </ul>
                    )}
                  </div>
                  <ButtonIcon href="/contact" />
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
