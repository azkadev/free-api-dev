var express = require("express");
var app = express.Router();

app.get("/", async function(req,res){
    return res.json({
        "status": "ok",
        "code": 202,
        "message": "api found"
    });
});

module.exports = app;