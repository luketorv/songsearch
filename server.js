const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.port || 3001;
const routes = require("./controllers");




const hbs = exphbs.create({});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))
app.use(routes)
app.listen(port, ()=>console.log("listening"))