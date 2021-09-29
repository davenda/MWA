const express = require('express');
const app = express();
app.listen(3000);
console.log("Listening to port", app.get("port"));
