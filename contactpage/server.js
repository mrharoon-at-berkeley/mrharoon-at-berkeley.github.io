const express = require("express");
const fs = require("fs");
const path = require("path");
const port = 3000;

const app = express();

let totalViews = 0;

const mainFolder = path.join(__dirname, "..");

if (fs.existsSync("views.txt")) {
  totalViews = parseInt(fs.readFileSync("views.txt", "utf8"));
}

function getCookie(cookieString, name) {
  if (cookieString) {
    let cookie = cookieString
      .split(";")
      .find((cookie) => cookie.trim().startsWith(name + "="));
    if (cookie) {
      return parseInt(cookie.split("=")[1]);
    }
  }
  return 0;
}

app.get("/", (req, res) => {
  let userViews = getCookie(req.headers.cookie, "userViews");
  totalViews++;
  userViews++;
  fs.writeFileSync("views.txt", totalViews.toString());
  let html = fs.readFileSync(mainFolder + "/contactpage/contact.html", "utf8");
  html = html.replace("{{count}}", totalViews);
  html = html.replace("{{yourCount}}", userViews);

  res.setHeader("Set-Cookie", `userViews=${userViews}`);

  res.send(html);
});

app.get("/style.css", (req, res) => {
  res.sendFile(path.join(mainFolder, "contactpage", "style.css"));
});
app.get("/script.js", (req, res) => {
  res.sendFile(path.join(mainFolder, "contactpage", "script.js"));
});
app.get(
  "/urban-chaotic-seamless-pattern-swatch-gradient-vector-32018056.jpg",
  (req, res) => {
    res.sendFile(
      path.join(
        mainFolder,
        "contactpage",
        "urban-chaotic-seamless-pattern-swatch-gradient-vector-32018056.jpg"
      )
    );
  }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
