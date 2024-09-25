const express = require("express")
const app = express()
const bodyP = require("body-parser")
app.use(bodyP.json())
app.use("./codemirror-5.65.17", express.static("D:/Project/Cyber Insight/Compiler/codemirror/codemirror-5.65.17"))
app.get("./", function(req, res){
    res.sendFile("D:/Project/Cyber Insight/Compiler/codemirror/index.html")
})



app.listen(8000)