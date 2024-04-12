const PROXY_CONFIG = [
  {
    context: [
      "/people",
    ],
    target: "https://localhost:7218",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
