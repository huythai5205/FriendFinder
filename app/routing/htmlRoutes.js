Skip to content
Toggle navigation
44 ac49f0edfa811245d0f90ff93602be ? s = 52 & d = identicon
denver - coding - bootcamp / 10 - 23 - 2017 - DENVER - Class - Repository - FSF
Project Repository Issues 0 Merge Requests 0 Pipelines Wiki Settings
Files Commits Branches Tags Contributors Graph Compare Charts
master
10 - 23 - 2017 - DENVER - Class - Repository - FSF..routes htmlRoutes.js
Dylan 's avatar
Added Express Material
Dylan committed 3 days ago
htmlRoutes.js 1.1 KB

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });
    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });
    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });
};