var express = require("express");
var app = express();
var route = require("./router/index");
var port = process.env.PORT || 8080 || 3000 || 4040;

app.set("json spaces", 2);
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use("/api", route.api);

app.get("/", async function (req, res) {
    var json = {
        "status": "ok",
        "code": 202,
        "message": "server run normal"
    };
    return res.json(json);
});

app.all("*", async function (req, res) {
    var json = {
        "status": "bad",
        "code": 404,
        "message": "not found api"
    };
    return res.json(json);
});

app.listen(port, async function () {
    console.log("server start on port " + port);
});