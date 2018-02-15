var oFriends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friend", function (req, res) {
        console.log("posting");
        const user = req.body;
        let maxScore = Number.MAX_SAFE_INTEGER;
        let friendMatch;

        oFriends.forEach(friend => {

            let friendScore = 0;
            for (let i = 0; i < friend.scores.length; i++) {
                friendScore += Math.abs(+friend.scores[i] - +user['scores'][i]);
            }

            if (friendScore < maxScore) {
                friendMatch = friend;
                maxScore = friendScore;
            }

        });

        console.log(user);
        oFriends.push(user);
        res.json(friendMatch);
    });

};