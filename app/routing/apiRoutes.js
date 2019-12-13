var friends = require("../data/friends.js");

var path = require("path");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var bff = {
            name: "Mario",
            photo: "123uyeiuyw",
            difference: 1000
        };
        console.log("This is the req.body" + JSON.stringify(req.body))

        var userData = req.body;
        // userData = JSON.stringify(userData);
        console.log("This is the user data: " + userData)
        console.log("This are the user scores: " , userData.scores)
        var userScores = [];
        for (var s of userData.scores) {
            userScores.push(parseInt(s));
        }
        userData.scores = userScores

        // console.log("This are the user scores: " + userScores);

        var totalDifference = 0;

        for (var i = 0; i <= friends.length -1; i++) {
           // console.log(friends)
            console.log("Current friend: " + JSON.stringify(friends[i]));
            totalDifference = 0;

            for (var j = 0; j<friends[i].scores.length; j++) {
                totalDifference += Math.abs(userScores[j]-parseInt(friends[i].scores[j]));
            }
            if (totalDifference <= bff.difference) {
                bff.name = friends[i].name;
                bff.photo = friends[i].photo;
                bff.difference = totalDifference;
            }
        }
        friends.push(userData);
        res.json(bff);
    })
}