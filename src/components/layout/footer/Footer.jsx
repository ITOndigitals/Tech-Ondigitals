import Link from "next/link";
import classes from "./Footer.module.scss";
import Image from "next/image";
import {
  FacebookIcon,
  IconZalo,
  InstagramIcon,
  LinkedIcon,
} from "@/components/ui/Icons/ListIcon";

const socialLinks = [
  {
    href: "https://www.facebook.com/on.digitals.agency",
    Icon: FacebookIcon,
    width: 24,
    height: 24,
    title: "ON TECH On Facebook",
  },
  {
    href: "https://www.instagram.com/ondigitals",
    Icon: InstagramIcon,
    width: 24,
    height: 24,
    title: "ON TECH On Instagram",
  },
  {
    href: "https://www.linkedin.com/company/on-digitals/",
    Icon: LinkedIcon,
    width: 24,
    height: 24,
    title: "ON TECH On Linkedin",
  },
  {
    href: "https://zalo.me/4436409039049370507",
    Icon: IconZalo,
    width: 54,
    height: 18,
    title: "ON TECH On Zalo",
  },
];

const Footer = () => {
  return (
    <footer className={classes["main"]}>
      <div className={classes["container"]}>
        <Link href={"/"} className={classes["image-container"]}>
          <Image
            src="/Footer_logo.png"
            fill
            alt="website logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </Link>
        <div className={classes["text"]}>
          Your trusted enterprise IT development company
          <br /> that helps business
          <span> embrace emerging Tech</span> for GROWTH
        </div>
      </div>
      <div className={classes["list-container"]}>
        <div className={classes["item"]}>
          <div className={classes["title"]}>Office:</div>
          <ul>
            <li>
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/Digital+Marketing+Agency+-+On+Digitals/@10.7621819,106.691325,15z/data=!4m6!3m5!1s0x31752f3528168587:0xb88ddea7383b07dc!8m2!3d10.7621819!4d106.691325!16s%2Fg%2F11j7ygb01k?entry=ttu"
              >
                7th floor, 75 Ho Hao Hon, Co Giang Ward, District 1, Ho Chi Minh
                City
              </Link>
            </li>
            <li>Work-time: 9AM - 6PM (Monday to Friday)</li>
          </ul>
        </div>
        <div className={classes["item"]}>
          <div className={classes["title"]}>Contact:</div>
          <ul>
            <li>
              <Link target="_blank" href="mailto:contact@ondigitals.com">
                contact@ondigitals.com
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes["item-container"]}>
          <div className={classes["left"]}>
            <div className={classes["title"]}>IT Services:</div>
            <ul>
              <li>
                <Link href="/ecommerce-design-services">Ecommerce Design</Link>
              </li>
              <li>
                <Link href="/mobile-app-development-services">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/software-development-services">
                  Software Development
                </Link>
              </li>
            </ul>
          </div>

          <div className={classes["right"]}>
            <div className={classes["item"]}>
              <div className={classes["title"]}>Explore us:</div>
              <ul>
                <li>
                  <Link href="/about-us">About On Tech</Link>
                </li>
                <li>
                  <Link href="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className={classes["item"]}>
              <div className={classes["social-links"]}>
                <div className={classes["title"]}>Follow us:</div>
                <div className={classes["external-group"]}>
                  {socialLinks.map((link, index) => (
                    <div key={index} className={classes["external-link"]}>
                      <Link href={link.href} target="_blank" title={link.title}>
                        <link.Icon
                          color={"#fff"}
                          width={link.width}
                          height={link.height}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className={classes["DMCA"]}>
                <div className={classes["image-container"]}>
                  <Link
                    href="https://www.dmca.com/Protection/Status.aspx?ID=6950ddd2-dee7-4269-bb55-98e4f776a325&refurl=https://ondigitals.com/"
                    title="DMCA.com Protection Status"
                    className="dmca-badge"
                  >
                    <Image
                      src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=244fa5c9-fa77-485b-9407-b294e1446b88"
                      alt="DMCA.com Protection Status"
                      width={122}
                      height={25}
                    />
                  </Link>
                  <script
                    async
                    defer
                    src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
                  ></script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
