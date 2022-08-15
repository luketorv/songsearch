const path = require('path')
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const port = process.env.port || 3001;
const routes = require("./controllers");

const sess = {
    secret: 'Semi secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

app.use(session(sess));

const hbs = exphbs.create({});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))
app.use(routes)
app.listen(port, ()=>console.log("listening"))

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(routes);

app.get("/",(req,res)=>{
    res.render("homepage")
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

