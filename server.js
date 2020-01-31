const express  = require("express");
const exphbs = require("express-handlebars");
// const sql = require("./config/connection.js");

// console.log(sql);



var app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bootcamp123!",
    database: "burgers_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected");
  });

app.get("/", (req,res) =>{

  connection.query("SELECT * FROM burgers", function(err, response){

    if (err) throw err;
    var data = { burgersdata: [...response]};

    res.render("index", data);
  });
});


app.post("/", (req, res)=>{

    var input = req.body.burger;

    connection.query("INSERT INTO burgers(burger_name) VALUES(?)",[input], (err, result)=>{

        if (err) throw err;
        res.redirect("/")

    });
});

app.post("/api/devour:id", (req, res)=>{

    var input = req.params.id;

    connection.query("UPDATE burgers SET devoured WHERE ?", [input], (err, result)=>{

        if (err) throw err;
        
        console.log(input)
    })
})
  app.listen(PORT, ()=>{
      console.log(`connected to PORT ${PORT}`);
  })