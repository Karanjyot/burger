const express  = require("express");
const exphbs = require("express-handlebars");
// const sql = require("./config/connection.js");

// console.log(sql);

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

