const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.port || 3001;




const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))
app.get("/",(req,res)=>{
    res.render("homepage")
})
app.listen(port, ()=>console.log("listening"))