module.exports = {
  webpack(config, options) {
    // add a new rule to handle PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: "file-loader",
    });

    // your custom webpack config goes here
    return config;
  },
};
