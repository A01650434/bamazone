var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "TbhJul#21!",
    database: "bamazon_tableDB" 
});

connection.connect(function(err){
    if (err) throw err; 
    console.log("connecred as id " + connection.threadId);
    queryAllPoducts(); // prints all products within database
    queryCarProducts(); // prints an specific category
});

function queryAllPoducts(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        for (var i = 0; i<res.length; i++){
            console.log(res[i].id + "|" + res[i].product_name + "|" + 
                res[i].department_name + "|" + res[i].price + "|" + res[i].stock_quantity);
        }
        console.log("-------------------------------------");
    });
}

function queryCarProducts(){
    var query = connection.query("SELECT * FROM products WHERE department_name=?", ["toys"], function(err, res){
        if (err) throw err;
        for (var i=0; i<res.length; i++){
            console.log(res[i].id + "|" + res[i].product_name + "|" + 
            res[i].department_name + "|" + res[i].price + "|" + res[i].stock_quantity);
        }
    });
console.log(query.sql);
connection.end(); //not quite yet
}