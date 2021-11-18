var express = require("express");
var app = express.Router();
var mainJson = require("../../db/main.json");
app.get("/", async function (req, res) {
    return res.json({
        "status": "ok",
        "code": 202,
        "message": "api found"
    });
});


app.post("/login", async function (req, res) {
    var body = req.body;

    if (!body) {
        return res.json({
            "status": "bad",
            "code": 400,
            "message": "please add body"
        });
    }

    if (mainJson.user && mainJson.user.length > 0) {

        if (!body.email) {
            return res.json({
                "status": "bad",
                "code": 400,
                "message": "please add email"
            });
        }

        if (!body.password) {
            return res.json({
                "status": "bad",
                "code": 400,
                "message": "please add password"
            });
        }

        // check email
        for (var index = 0; index < mainJson.user.length; index++) {
            var loop_data = mainJson.user[index];

            if (RegExp(`^${body.email}$`, "i").exec(loop_data.email)) {

                if (RegExp(`^${body.password}$`, "i").exec(loop_data.password)) {
                    var getUserData = require(`../../db/user-data/${loop_data.id}.json`);
                    if (!getUserData) {
                        return res.json({
                            "status": "bad",
                            "code": 400,
                            "message": "data user not found"
                        });
                    }
                    getUserData["me"] = loop_data;
                    return res.json(getUserData);

                } else {
                    return res.json({
                        "status": "bad",
                        "code": 400,
                        "message": "password not match, if your forgot password please reset"
                    });
                }
            }
        }

        return res.json({
            "status": "bad",
            "code": 400,
            "message": "please email not found"
        });

    } else {
        return res.json({
            "status": "bad",
            "code": 400,
            "message": "database error"
        });
    }
});

module.exports = app;