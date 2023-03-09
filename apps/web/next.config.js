const withTM = require("next-transpile-modules")(["@nojsja/crt-terminal"]);

module.exports = withTM({
  reactStrictMode: true,
});
