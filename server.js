var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();
var port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dhaka3049",
  database: "fifagame" });

connection.connect(function(err) {
  if (err) {
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//========================================
app.get("/", function(req, res) {
    res.render("home");

});
//========================================
app.post("/allPlayers", function(req, res) {
  connection.query("SELECT * FROM playernames;", function(err, data) {
    if (err) {
      throw err;
    }
    console.log('data', data);
    res.render("nameOfAllPlayers", { playernames1: data });

  });
});
//========================================
app.post("/detailsPlayers", function(req, res) {
  connection.query("SELECT Name, Nationality, Club, Age, Aggression, Reactions, Speed, Height, Weight FROM fifagame.fulldata WHERE Name='Cristiano Ronaldo';", function(err, data) {
    if (err) {
      throw err;
    }

    console.log('data', data);
    res.render("playresNameDetails", { playernames1: data });

  });
}); 
//========================================
app.post("/topTenPlayer", function(req, res) {
  connection.query("SELECT Name, Nationality FROM fulldata Group By Rating Order By Rating DESC LIMIT 10;", function(err, data) {
    if (err) {
      throw err;
    }
    console.log('data', data);
    res.render("topTenPlayers", { playernames1: data });

  });
});
//========================================
app.post("/topTenClub", function(req, res) {
  connection.query("SELECT Club, Nationality FROM fulldata Group By Rating Order By Rating DESC LIMIT 10;", function(err, data) {
    if (err) {
      throw err;
    }
    console.log('data', data);
    res.render("topTenClubs", { playernames1: data });

  });
});
//========================================
app.post("/insertName", function(req, res) {
  connection.query("INSERT INTO editnametest (Name) VALUE (?)" , [req.body.name], function(err, data) {
    if (err) {
      throw err;
    }
      });   
  connection.query("SELECT * FROM editnametest ORDER BY id DESC;", function(err, data) {
    if (err) {
      throw err;
    }
    console.log('data', data);
    res.render("insert", { playernames1: data });

  });
});
//==========================================

app.post("/deleteName", function(req, res) {
  connection.query("DELETE FROM editnametest WHERE Name=? " , [req.body.name], function(err, data) {
    if (err) {
      throw err;
    }
      });   
  connection.query("SELECT * FROM editnametest ;", function(err, data) {
    if (err) {
      throw err;
    }
    console.log('data', data);
    res.render("delete", { playernames1: data });

  });
});
//=================================================================
//=================================================================

app.post("/updateName", function(req, res) {
  connection.query("UPDATE editnametest SET Name= ? WHERE Name= ?", [req.body.name, req.body.name], function(err, data) {
    if (err) {
      throw err;
    }
      });   
  connection.query("SELECT * FROM editnametest ;", function(err, data) {
    if (err) {
      throw err;
    }
    console.log('data', data);
    res.render("update", { playernames1: data });

  });
});
//========================================
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});

