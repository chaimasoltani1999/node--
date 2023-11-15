const fs = require("fs");

// Writing to file
fs.writeFileSync("welcome.txt", "Hello Node");

// Reading from file
const data = fs.readFileSync("welcome.txt", "utf-8");
console.log(data);