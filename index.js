const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(bodyParser.urlencoded({extended: false}));


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get ('/', (req,res)=>{
    res.render("index");
});

app.post("/login", (req, res)=>{
    const {name, password} = req.body;
    
    if (name === "Boss" && password === "boss") {
        res.render("success", {
            user: name,
        });
    } else {
        res.render("failure");
    }
});

app.listen(3000, ()=> {
    console.log('Server started on port 3000')
});