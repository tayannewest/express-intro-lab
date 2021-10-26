// import modules

import express from 'express'
import * as squid from './data/squidFile.js'


// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res) {
  res.redirect('home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/squids', function(req, res) {
  squid.find({}, function(error, squids) {
    res.render('squids/index', {
      error: error,
      squids: squids
    })
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
