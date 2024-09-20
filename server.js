const fs = require("fs");
const fetch = require("fetch").fetchUrl;

const Site = {
  URL: function (url, text, type, font, col) {
    //Usage: Site.URL(URL, Optional: Text, Type, Font, Color)
    return `<br><a style='${font != undefined ? "font-family:" + font : ""};${
      col != undefined ? "color: #" + col : ""
    }' href='${type || "https"}://${url}'>${text || "Link"}`;
  },
  Text: function (text, font, col) {
    //Usage:Site.URL(Text, Optional: Font, Color)
    return `<br><a style='${font != undefined ? "font-family:" + font : ""}${
      col != undefined ? "; color: #" + col : ""
    }'>${text}`;
  },
};

const main = function (scenexe2) {
  let options = {
    parentPort: {
      postMessage: function () {},
    },
    port: 3000,
    testing: 1,
    start: `load('./dim-ffa.js')`,
    secret: {
      p1: "a",
      p2: "b",
    },
    message: `Connect To Server`,
    standalone: 1,
    //    backColor: '', //WebPage Background Color
    //    textColor: '', //WebPage Text Color
    //    textFont: '', //WebPage Text Font
    //    urlColor: '', //WebPage Server URL Color Config
  };
  let data = scenexe2.run(options);
  //  data.dimension.dims.ffa.gleaming = 1
};

fetch(
  "https://raw.githubusercontent.com/AbsentPopcorn33/Scenexe2Server/main/Scenexe2.js",
  function (a, b, c) {
    let __module__ = {
      exports: {},
    };
    let s = c.toString().replace(`module`, `__module__`);
    eval(s);
    main(__module__.exports);
  }
);
