var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: " ",
    database: "bamazon_tableDB" 
});

connection.connect(function(err){
    if (err){
        console.error("connection err" + err.stack);
    }
    loadProd();
});

function loadProd(){
    
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.table(res);
        promptCustForProd(res);
    });
}

function promptCustForProd(inventory){
    inquirer
    .prompt([{
        type: "input",
        name: "choice",
        message: "What's your item ID?",
        validate: function(val){
            return !isNaN(val) || val.toLowerCase() === "q"; 
        }
    }])
    .then(function(val){
    checkExit(val.choice);
    var choiceId = parseInt(val.choice);
    var product = checkInventory(choiceId, inventory);      

    if(product){
        promptCustomerForQuantity(product);
    }else{
        console.log("Srry we don't have that product on our inventory");
        loadProd();
    }
    });
}

function promptCustomerForQuantity(product){
    inquirer
    .prompt([{
        type: "input",
        name: "quantity",
        message: "How many would you like?",
        validate: function(val){
            return val > 0 || val.toLowerCase() === "q";
        }
    }])
    .then(function(val){
        checkExit(val.quantity);
        var quantity = parseInt(val.quantity);

        if(quantity > product.stock_quantity){
            console.log("Empty stock");
            loadProd();
        }else{
            makePurchase(product, quantity);
        }
    });
}

function makePurchase(product, quantity){
    connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [quantity, product.item_id],
        function(err, res){
            console.log("Successfull purchase" + quantity + " " + product.product_name);
            loadProd();
        }
    );
}

function checkInventory(choiceId, inventory){
    for (var i=0; i<inventory.length; i++){
        if(inventory[i].item_id === choiceId){
            return inventory[i];
        }
    }
    return null;
}

function checkExit(choice){
    if(choice.toLowerCase() === "q"){
        console.log("thnx 4 buying");
        process.exit(0);
    }
}