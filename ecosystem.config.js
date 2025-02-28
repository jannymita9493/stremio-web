module.exports = {
  apps: [
    {
      name: "streamio-web",
      script: "http_server.js",
      env: {
        PORT: 8081,
      },
    },
  ],
};
