const fs = require("fs");
const fetch = require("fetch").fetchUrl;
const Scenexe2File = "Scenexe2.js";
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
    port: 4000,
    testing: 1,
    start: `load('./dims//dim.ffa.js'), load('./dims//dim.sanctuary.js', load('./dims//dim.test.js'), load('./commands.js'))`,
    secret: {
      p1: "Admin",
      p2: "Mod",
    },
    autoAdmin: "BEANS",
    standalone: 1,
    message: `Connect to Test Server${
      Site.Text("am BEANS lol", "cursive") +
      Site.URL(
        "glitch.com/~spangled-purring-crowberry",
        "Original Glitch Project"
      ) +
      Site.URL("github.com", "Github") +
      Site.URL("scenexe2.io", "Scenexe2") +
      Site.Text("Im Going To Shit Yourself", "cursive", "903F05")
    }`,
    Files: false,
    reqCert: false,
    backColor: "000000",
    textColor: "FFFFFF",
    textFont: "cursive",
    urlColor: "FF0000",
    Security: "https",
    AntiLagCap: 50000,
  };
  let data = scenexe2.run(options);
  //data.dimension.dims.crossroadsLobby.gleaming = 1
};
if (typeof Scenexe2File == "undefined") {
  console.log("Server File Not Defined"), process.exit(1);
}
if (fs.existsSync(Scenexe2File)) {
  let __module__ = {
    exports: {},
  };
  let s = fs
    .readFileSync(Scenexe2File)
    .toString()
    .replace(`module`, `__module__`);
  eval(s);
  main(__module__.exports);
} else {
  console.log("Server File Not Found"), process.exit(1);
}
