let appModule = require("./app");           // module loading-- giving a apath--> file module
//appModule.appInit();

let handlers = require("./requestHandlers");

const express = require('express')      //repository module
const app = express();

/* app.use("/", function(req, res, next){
    console.log("Middleware1");
    next();
});

app.use("/", function(req, res, next){
    console.log("Middleware2");
    next();
});

app.use("/", function(req, res, next){
    console.log("Middleware3");
    res.send("Response received")
});
 */

app.use(express.static(__dirname));        //global member in the node that gives the current directory name 

/* app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
}); */

//app.get("/", handlers.root_get);
app.listen(8000, appModule.appInit);// server runs listening to the given port when we can get, post, put or delete

