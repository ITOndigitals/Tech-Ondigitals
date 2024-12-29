import Button from "@/components/ui/Button/Button/Button";
import Input from "@/components/ui/Input/Input";
import MesageTextarea from "@/components/ui/Input/MesageTextarea";
import Note from "@/components/ui/Note/Note";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import { SendEmailContactForm } from "@/components/utils/sendEmail";
import validationSchema from "@/components/utils/validationForm";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import classes from "./SectionForm.module.scss";
import { Maven_Pro } from "next/font/google";
import { IconDanger, IconSuccess } from "@/components/ui/Icons/ListIcon";
import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function SectionForm({ data }) {
  const { backgroundImage, contactForm, title } = data;
  const [fieldName, fieldEmail, fieldPhone, fieldMessage] = contactForm || [];

  const [sendEmailMutation, { loading, error }] =
    useMutation(SendEmailContactForm);
  const [isSuccess, setIsSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
      phone: "",
      honeypot: "", // Trường honeypot ẩn
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values) {
    try {
      const { data } = await sendEmailMutation({
        variables: {
          body: `<h4 style="color: black;">Companyname or Name Client: <p style="font-weight: 300; display: inline;">${values.name}</p></h4> 
                <h4 style="color: black;">Email: <p style="font-weight: 300; display: inline;">${values.email}</p></h4>  
                <h4 style="color: black;">
                  Phone Number: 
                  <a href="tel:${values.phone}" style="color: #1155CC; display: inline;">
                    <p style="font-weight: 300; display: inline;">${values.phone}</p>
                  </a>
                </h4>
                <strong style="color: black;">Message:</strong> 
                <pre style="font-weight: 400;display: inline;white-space: pre-wrap;line-height: 24px;font-family: 'Roboto';font-size: 16px;">${values.message}</pre>
              `,
          subject: "Hello from IT Services On Digitals!",
        },
      });
      formik.resetForm();
      setIsSuccess(true);
    } catch (mutationError) {
      console.error(mutationError);
    }
  }

  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage?.node?.sourceUrl})` }}
      className={classes["section-contact-form"]}
    >
      <div className={`${classes["contact-section"]} container`}>
        <div className={classes["contact-section__columLeft"]}>
          <h2 className={classes["contact-section__columLeft__title"]}>
            <HighlightedText
              primaryText={"Let’s"}
              secondaryText={"talk"}
              primaryTextColor={"text-stroke"}
              secondaryTextColor={"text-white"}
            />
          </h2>
          <p
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["contact-section__columLeft__desc"]}
          >
            {title && title}
          </p>
        </div>

        <div className={classes["contact-section__columRight"]}>
          <form
            className={classes["contact-section__columRight__form"]}
            onSubmit={formik.handleSubmit}
          >
            <Input
              title={fieldName?.textLable}
              type={"text"}
              fieldName={"name"}
              placeholder={fieldName?.textPlaceholder}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null
              }
              isSuccess={
                formik.touched.name && !formik.errors.name ? true : false
              }
            />
            <Input
              title={fieldEmail?.textLable}
              type={"email"}
              fieldName={"email"}
              placeholder={fieldEmail?.textPlaceholder}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
              isSuccess={
                formik.touched.email && !formik.errors.email ? true : false
              }
            />
            <Input
              title={fieldPhone?.textLable}
              type={"tel"}
              fieldName={"phone"}
              placeholder={fieldPhone?.textPlaceholder}
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={
                formik.touched.phone && formik.errors.phone
                  ? formik.errors.phone
                  : null
              }
              isSuccess={
                formik.touched.phone && !formik.errors.phone ? true : false
              }
            />
            <MesageTextarea
              title={fieldMessage?.textLable}
              name="message"
              placeholder={fieldMessage?.textPlaceholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              errors={
                formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : null
              }
              isSuccess={
                formik.touched.message && !formik.errors.message ? true : false
              }
            />
            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              onChange={formik.handleChange}
              value={formik.values.honeypot}
            />

            <div
              className={
                classes["contact-section__columRight__form__buttonAndNote"]
              }
            >
              <div
                className={
                  classes[
                    "contact-section__columRight__form__buttonAndNote--detail"
                  ]
                }
              >
                {loading && <LoadingSpinner />}
                {isSuccess && !loading && (
                  <Note
                    content={
                      "Message sent! Thank you for contacting us. We will reach out to you soon."
                    }
                    backgroundColor="#5CFFAE"
                    icon={
                      <IconSuccess
                        width={24}
                        height={24}
                        color="rgba(19, 17, 20, 1)"
                      />
                    }
                  />
                )}
                {error && (
                  <Note
                    content={
                      "Something went wrong! We couldn't receive your message. Please wait and try again."
                    }
                    backgroundColor="rgba(255, 82, 82, 1)"
                    icon={
                      <IconDanger
                        width={24}
                        height={24}
                        color="rgba(19, 17, 20, 1)"
                      />
                    }
                  />
                )}
              </div>
              <div
                className={
                  classes[
                    "contact-section__columRight__form__buttonAndNote--btn"
                  ]
                }
              >
                <Button />
              </div>
            </div>
            <div
              className={
                classes[
                  "contact-section__columRight__form__buttonAndNote--btn__textpolicy"
                ]
              }
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              <p>{`(*) Required field. See our `}</p>
              <Link href={"/"}>Data Policy</Link>
            </div>
          </form>
          <div className={classes["contact-section__columRight__email"]}>
            <p
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["contact-section__columRight__email__text"]}
            >
              For additional business inquiries, please contact us via email:
            </p>
            <a
              href="mailto:contact@ondigitals.com"
              className={classes["contact-section__columRight__email__address"]}
            >
              contact@ondigitals.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
