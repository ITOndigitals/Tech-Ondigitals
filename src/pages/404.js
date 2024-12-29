import CustomPage404 from "@/components/custompage404/CustomPage404";
import Head from "next/head";
import React from "react";

export default function index() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <CustomPage404 />
    </>
  );
}
