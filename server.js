const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3001;
const routes = require("./controllers");
const session = require("express-session");
const sequelize = require("./config/connection.js");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  app.use(session(sess));



const hbs = exphbs.create({});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))
app.use(routes)
app.listen(port, ()=>{
    console.log("listening");
    sequelize.sync({force: false})
});
