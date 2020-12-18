const path = require("path");
const fs = require("fs");
const util = require("util");
//const readfilePromise = util.promisify(fs.readFile);
//const dbData = require("../db/store.js");

module.exports = function (app) {
  // app.get("/api/notes", function (req, res) {
  //     readfilePromise("db/db.json", "utf8").then((data) => {
  //     res.json(JSON.parse(data))
  //     console.log(JSON.parse(data));
  //     }).catch((error) => {
  //         console.log(error);
  //         res.json(true);
  //         });
  //     });

  app.get("/api/notes", function (req, res) {
    fs.readFile(__dirname + "/../db/db.json", function (err, data) {
      if (err) console.log(err);
      res.send(JSON.parse(data));
    });
  });

  app.post("/api/notes", function (req, res) {
    fs.readFile(__dirname + "/../db/db.json", function (err, data) {
      if (err) console.log(err);
      let array = JSON.parse(data);
      array.push(req.body);
      for (let i = 0; i < array.length; i++) {
        array[i].id = i;
      }
      fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(array), function (err, data) {
        if (err) {
          console.log(err);
        } else {
          res.send(array);
        }
      });
    });
  });

  app.delete("/api/notes/:id", function (req, res) {
    console.log(req.params.id);
    let array = JSON.parse(data);
    let = req.body;
    console.log();
    res.json();
  });
};

//need a delete function
