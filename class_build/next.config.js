module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "Taewoogie_Site",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};
