var express = require('express');

//App setup
var app = express();
var server = app.listen(3000, () => {
    console.log("listening to req on port 3000!\n");
});
 
//static files
app.use(express.static('public'));
