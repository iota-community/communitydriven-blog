module.exports = {
  title: "IOTA Community Driven Blog",
  tagline: "An aggregation of IOTA blog posts",
  url: "https://iota-community.github.io",
  baseUrl: "/communitydriven-blog/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  organizationName: "iota-community", // Usually your GitHub org/user name.
  projectName: "communitydriven-blog", // Usually your repo name.
  themeConfig: {
    image: "img/iota-wiki.png",
    colorMode: {
      defaultMode: "dark",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: false,
          blogSidebarCount: 0,
        },
      },
    ],
  ],
};
