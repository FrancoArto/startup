const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "62",
        chrome: "69",
        safari: "12",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };