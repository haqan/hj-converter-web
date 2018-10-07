import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from 'styled-components'

import App from "../shared/App";

const sheet = new ServerStyleSheet();
const app = express();

app.use(express.static("dist"));

const html = renderToString(sheet.collectStyles(<App />));
const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

app.get("*", (req, res) => {

  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Youtube To MP3 Converter - Get the sound</title>
        <meta name="keywords" content="YouTube to mp3, mp3 converter, YouTube mp3, YouTube to mp3 converter, convert YouTube to mp3, video to mp3, download YouTube mp3, mp3 download, mp3converter"/>
  	    <meta name="description" content="Convert YouTube video clips to high quality MP3 files in seconds and play them on your preferred MP3 player."/>
  	    <meta name="robots" content="index, follow">
        ${styleTags}
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="bundle.js" defer></script>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
