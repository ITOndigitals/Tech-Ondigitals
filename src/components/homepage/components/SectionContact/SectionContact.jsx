import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import classes from "./SectionContact.module.scss";
import MesageTextarea from "@/components/ui/Input/MesageTextarea";
import Input from "@/components/ui/Input/Input";
import { IconDanger, IconSuccess } from "@/components/ui/Icons/ListIcon";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import validationSchema from "@/components/utils/validationForm";
import { SendEmailContactForm } from "@/components/utils/sendEmail";
import Note from "@/components/ui/Note/Note";
import HighlightedText from "@/components/ui/Text/HighlightedText/HighlightedText";
import Button from "@/components/ui/Button/Button/Button";
import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function CustomPage404() {
  const [sendEmailMutation, { loading, error }] =
    useMutation(SendEmailContactForm);
  const [isSuccess, setIsSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
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
    <section className={classes["section-contact-form"]}>
      <h2 className="container">
        <HighlightedText
          primaryText={"Let’s"}
          secondaryText={"talk"}
          primaryTextColor={"text-stroke"}
          secondaryTextColor={"text-white"}
        />
      </h2>
      <div className={`${classes["contact-section"]} container`}>
        <div className={classes["contact-section__columLeft"]}>
          <p className={classes["contact-section__columLeft__title"]}>
            Start TRANSFORMING today
          </p>
          <p
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["contact-section__columLeft__desc"]}
          >
            Tell us about your business challenge and get a tailored
            consultation today.
          </p>
        </div>

        <div className={classes["contact-section__columRight"]}>
          <form
            className={classes["contact-section__columRight__form"]}
            onSubmit={formik.handleSubmit}
          >
            <Input
              title={"Tell us about yourself (*)"}
              type={"text"}
              fieldName={"name"}
              placeholder="Your name / Your company name..."
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
              title={"Email (*)"}
              type={"email"}
              fieldName={"email"}
              placeholder={"Your email..."}
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
            {/* <Input
              title={"Phone number"}
              type={"tel"}
              fieldName={"phone"}
              placeholder={"Your contact number..."}
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
            /> */}
            <MesageTextarea
              title={"Leave a request (*)"}
              name="message"
              placeholder={"Write your request..."}
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
        </div>
      </div>
    </section>
  );
}
