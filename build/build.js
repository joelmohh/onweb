const fs = require("fs")

let html = fs.readFileSync("build.html", "utf8")
  .replace(/^\s+/gm, "")       
  .replace(/\s*\/\/.*$/gm, "") 
  .replace(/\n\s*\n/g, "\n")    

const url = "data:text/html;charset=utf-8," + html
  .replace(/%/g, "%25")   
  .replace(/#/g, "%23")   
  .replace(/\n/g, "%0A")  

console.log(url)