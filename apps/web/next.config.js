const withTM = require("next-transpile-modules")(["@augchan42/crt-terminal"]);

module.exports = withTM({
  reactStrictMode: true,
});
