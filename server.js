var express = require('express');
var app = express();
let path = require('path'); 

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join('./Client/dist' )));

require('./config/mongoose.js');

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(8000,function(){
    console.log('listening on port 8000');
})