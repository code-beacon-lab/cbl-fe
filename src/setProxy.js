// --- CORS 에러 처리 파일
// @ts-ignore
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    );
}