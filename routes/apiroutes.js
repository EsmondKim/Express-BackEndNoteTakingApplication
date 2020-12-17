const path = require("path");
const fs = require("fs");
const util = require("util");

const readfilePromise = util.promisify(fs.readFile);

module.exports = function(app) {
    
app.get("/api/notes", function (req, res) {
    readfilePromise("db/db.json", "utf8").then((data) => {
    res.json(JSON.parse(data)) 
    console.log(JSON.parse(data));

    }).catch((error) => {
        console.log(error); 
        });
    });

    app.post("/api/notes", function (req, res) {
        let  = req.body
        console.log();
        res.json();
        });

    app.delete("/api/notes", function (req, res) {
        let  = req.body
        console.log();
        res.json();
        });
    
}



  


//need a delete function

