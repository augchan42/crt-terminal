const withTM = require("next-transpile-modules")(["@jquesnelle/crt-terminal"]);

module.exports = withTM({
  reactStrictMode: true,
});
