const fs = require("fs");
const fetch = require("fetch").fetchUrl;
let Scenexe2File = "./Scenexe2.js";
const Site = {
  URL: function (a, b, c, font, col) {
    return `<br><a style='${font != undefined ? "font-family:" + font : ""};${
      col != undefined ? "color: #" + col : ""
    }' href='${c || "https"}://${a}'>${b || "Link"}`;
  },
  Text: function (a, font, col) {
    return `<br><a style='${font != undefined ? "font-family:" + font : ""}${
      col != undefined ? "; color: #" + col : ""
    }'>${a}`;
  },
};

const main = function (scenexe2) {
  let options = {
    parentPort: {
      postMessage: function () {},
    },
    port: 4000,
    testing: 0,
    start: `load('./dims//dim.ffa.js'), load('./dims//dim.sanctuary.js')`,
    secret: {
      p1: process.env.maintoken,
      p2: process.env.token,
    },
    standalone: 1,
    message: `Connect to Private Server${
      Site.Text("Testing Site.Text Function", "comic sans ms", "FFFF00") +
      Site.URL(
        "github.com",
        "Testing Site.URL Function",
        "https",
        "comic sans ms",
        "00FFFF"
      ) +
      Site.Text("Testing textColor Option", "comic sans ms") +
      Site.Text(
        "Testing Site.Text Function",
        "comic sans ms", 
        "FF00FF"
      )
    }`,
    Scenexe2File: fs.readFileSync(Scenexe2File),
    Files: false,
    certReq: false,
    textColor: "FFFFFF",
    backColor: "000000",
    textFont: "cursive",
    urlColor: "FF0000",
    Security: "http",
    certReq: true,
  };
  let data = scenexe2.run(options);
  //data.dimension.dims.crossroadsLobby.gleaming = 1
};

const scen2 =
  typeof Scenexe2File !== "undefined" && fs.existsSync(Scenexe2File)
    ? fs.readFileSync(Scenexe2File).toString()
    : console.log("Scenexe2 Server File Not Found \nServer Not Started");

if (scen2) {
  let __module__ = {
    exports: {},
  };
  let s = scen2.toString().replace(`module`, `__module__`);
  eval(s);
  main(__module__.exports);
}
