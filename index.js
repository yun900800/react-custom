var markdownpdf = require("markdown-pdf")
  , fs = require("fs")
  , path = require('path') 

fs.createReadStream("./cv.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream(path.join("./document.pdf")))