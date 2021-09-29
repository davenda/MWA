const express = require("express");
const path = require("path");
const app = express();
app.set("port", 3000);

app.get('/', function(req, res){
    console.log("Get Received.");
    res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

const server = app.listen(app.get("port"), function(){
    console.log("Listening to port ", app.get("port"));
})