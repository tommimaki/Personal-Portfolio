const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://backportfoliotommi.fly.dev/api/sendEmail",
      changeOrigin: true,
    })
  );
};
