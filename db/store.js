const fs = require("fs");
const apiRoutes = require("../routes/apiroutes.js")

let dbDataArray = fs.readFile(JSON.parse(db.json));



module.exports = dbDataArray;
