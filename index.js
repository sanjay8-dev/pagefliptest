const express =require("express");
const app =express();
const pageFlip = require("page-flip");
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render("test");
});

app.listen(3000, ()=>{
    console.log("server started!")
  
});

