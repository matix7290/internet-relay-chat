const qs = require("querystring")
const express = require("express")
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
const path = require("path")
var newestDateStamp = Date.now()
var newestMess

app.use(favicon(__dirname + "/static/img/favicon.ico"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/html/index.html"))
})

app.get("/style", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/css/style.css"))
})

app.get("/emojiCSS", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/css/jquery.cssemoticons.css"))
})

app.get("/script", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/js/script.js"))
})

app.get("/jquery", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/js/jquery-1.4.2.min.js"))
})

app.get("/emojiJS", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/js/jquery.cssemoticons.js"))
})

app.post("/mess", function (req, res) {
    newestDateStamp = Date.now()
    console.log('mess', req.connection.remoteAddress)
    newestMess = {
        newMess: req.body.newMess,
        date: req.body.date,
        nick: req.body.nick,
        oldNick: req.body.oldNick,
        color: req.body.color
    }
    res.end()
})

app.post("/poll", async function (req, res) {
    const oldData = Date.now()
    const dateStamp = newestDateStamp
    console.log('poll', req.connection.remoteAddress)

    while (Date.now() - oldData <= 30000) {
        if(dateStamp !== newestDateStamp) {
            res.json(newestMess)
            break
        }

        await sleep(3)
    }

    res.status(204).end()
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}