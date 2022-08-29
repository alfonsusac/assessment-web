const express           = require('express')
const expressLayouts    = require('express-ejs-layouts')
const mongoose          = require('mongoose')
const methodOverride    = require('method-override')

const app = express()
const port = 5000

// Models and Routes
const CommentModel = require('./models/Comment')

// Database
mongoose.connect('mongodb://localhost/assessment', () => {
    console.log("Connected to DB!")
})

// Static Files
app.use(express.static('public'))

// Layouts
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

// Forms
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// Routes
app.get('/', async (req, res) => {
    res.render('index', {title: "Index"})
})


// External Routes
const articleRoute = require('./routes/articleRoute')







// Listen
app.listen(port, () => {
    console.info(`App listening on port ${port} | http://localhost:${port}`)
})