Skip to content
Toggle navigation
44 ac49f0edfa811245d0f90ff93602be ? s = 52 & d = identicon
denver - coding - bootcamp / 10 - 23 - 2017 - DENVER - Class - Repository - FSF
Project Repository Issues 0 Merge Requests 0 Pipelines Wiki Settings
Files Commits Branches Tags Contributors Graph Compare Charts
master
10 - 23 - 2017 - DENVER - Class - Repository - FSF..routes apiRoutes.js
Dylan 's avatar
Added Express Material
Dylan committed 3 days ago
apiRoutes.js 2.36 KB

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
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/tables", function (req, res) {
        res.json(tableData);
    });
    app.get("/api/waitlist", function (req, res) {
        res.json(waitListData);
    });
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
    app.post("/api/tables", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false);
        }
    });
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
    app.post("/api/clear", function () {
        // Empty out the arrays of data
        tableData = [];
        waitListData = [];
        console.log(tableData);
    });
};