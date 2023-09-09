
const isProd = process.argv.includes("--production")
const isDev = !isProd

module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd
  },

  pug: {
    pretty: isDev,
  },

  webpack: {
    mode: isProd ? "production" : "development"
  },

  imgesmin: {
    verbose: true
  }
};
