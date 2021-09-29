
const child_process = require("child_process"); 
const newProcess = child_process.spawn("node", ["fibonacci.js"], {stdio : "inherit"});
