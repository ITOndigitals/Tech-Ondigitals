import ServicesDetailPage from "@/components/servicesdetailpage/ServicesDetailPage";
import React from "react";
import { getDataServicepage, getListSlugServices } from "./api/graphql";
import Head from "next/head";
import replaceUrlsHead from "@/components/utils/replaceUrlsHead";

const parse = require("html-react-parser").default;
export default function index({ data }) {
  const { fullHead, title } = data?.seo || {};
  return (
    <>
      <Head>
        {fullHead && parse(replaceUrlsHead(fullHead))}
        <title>{title && title}</title>
      </Head>
      <ServicesDetailPage data={data} />
    </>
  );
}

export async function getStaticPaths() {
  const listServices = await getListSlugServices();
  const paths = listServices.map((service) => ({
    params: {
      slug: service.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking", // Tạo trang động nếu chưa có tĩnh
  };
}
export const getStaticProps = async (context) => {
  const { params } = context;
  const slug = params?.slug;
  try {
    const data = await getDataServicepage(slug);
    // Kiểm tra nếu dữ liệu không tồn tại
    if (!data || Object.keys(data).length === 0) {
      return {
        notFound: true, // Next.js sẽ tự động trả về trang 404
      };
    }

    return {
      props: {
        data,
      },
      revalidate: 86400, // Tự động cập nhật dữ liệu sau mỗi 24 giờ
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true, // Trả về trang 404 trong trường hợp lỗi
    };
  }
};
