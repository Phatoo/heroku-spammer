global.APP = {}
global.CFG = require('./../config')

APP.modules = {
    request: require('request'),
    mongoose: require('mongoose')
}

// global.mongo = require('./mongo/index')

APP.utils = {
    // regex: require('./regex')
}


var express = require('express');
var app = express();

app.configure(function(){
    app.listen(CFG.app.port);
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname+"/public"));
    require('./router')(app);
})

app.configure("development", function() {
    app.use(express.errorHandler,{
        dumpExceptions: true,
        showStack: true
    })
})          

console.log("123");

app.configure("production", function() {
    app.use(express.errorHandler,{
        dumpExceptions: false,
        showStack: false
    })
})  

// APP.modules.mongoose.connect(CFG.db.mongoUrl, {});

console.log('Server started on port', 5000)
