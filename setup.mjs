import got from "got";
import fs from "fs";
import http from "https";

const options = { https: { rejectUnauthorized: false } };

let server = await got(
  "https://127.0.0.1:4000/server/server.js",
  options
);
let dimffa = await got(
  "https://127.0.0.1:4000/server/dim-ffa.js",
  options
);


const tankData = await got(
  "https://127.0.0.1:4000/server/tankData.js",
  options
);


fs.writeFileSync('./testing-setup//server.js', server.rawBody);
fs.writeFileSync('./testing-setup//dim-ffa.js', dimffa.rawBody);
fs.writeFileSync('./testing-setup//tankData.js', tankData.rawBody);
