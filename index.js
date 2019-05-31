// Require necessary modules
let csv = require('fast-csv');
let express = require('express')
let fs = require('fs');
let http = require('http');
// let flash = require('connect-flash')
let layouts = require('express-ejs-layouts')
var methodOverride = require('method-override')
let multer = require('multer');
let session = require('express-session')

let Router = express.Router;
const upload = multer({ dest: 'tmp/csv/' });

const router = new Router();
//const server = http.createServer(app);
let port = 3000



// Declare Express app
let app = express()


// Include (use) middleware
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use('/', express.static('static'))
app.use(layouts)
app.use(express.urlencoded({ extended: false }))
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true
// }))


// Custom middleware - write data to locals on EVERY page
app.use((req, res, next) => {
  // res.locals.alerts = req.flash()
  res.locals.user = req.user
  next()
})

// Include routes from controllers
app.use('/auth', require('./controllers/auth'))
app.use('/profile', require('./controllers/profile'))
app.use('/quiz', require('./controllers/quiz'))

// Make a home route: GET /
app.get('/', (req, res) => {
  res.render('home')
})

// Catch-all route - render the 404 page
app.get('*', (req, res) => {
  res.render('404')
})

// Listen from your port
app.listen(process.env.PORT || 3000)