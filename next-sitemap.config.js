/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://it.ondigitals.com/", // Thay bằng URL website của bạn
  generateRobotsTxt: true, // Tạo file robots.txt
  changefreq: "daily", // Tần suất cập nhật
  priority: 0.8, // Để null để cấu hình từng trang
  sitemapSize: 5000, // Số lượng URL tối đa trong mỗi file sitemap
  generateIndexSitemap: true, // Tạo file sitemap-index.xml
  additionalPaths: async (config) => [
    {
      loc: "/",
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
  ],
};
