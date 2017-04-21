'use strict';

var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var mongoURL = 'mongodb://admin:s3cur3@ds161640.mlab.com:61640/urban-ipsum';
var db;

MongoClient.connect(mongoURL, function (err, database) {
  // ... start the server
  if (err) {
    return console.log('error: ', err);
  }
  db = database;
  app.listen(3000, function () {
    console.log('listening on port 3000');
  });
});

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/ipsum', function (req, res) {
  db.collection('ipsum').save(req.body, function (err, result) {
    if (err) {
      return console.log(err);
    }
    console.log('saved to db');
    res.redirect('/');
  });
});

// TODO
// Scrape Urban Dictionary php page
// Hit URL for each letter in the alphabet
// Scrape the #columnist element for the words in 'a' tags
// Save each word to Mongo DB in the 'ipsum' collection

// Generate ipsum
// Define max words in a sentence and max words in a paragraph
// Make function to have user pick amount of paragraphs
// Randomly select words from collection based on user input
// Format into paragraphs and return to user

app.get('/scrape', function (req, res) {
  // all web scraping here
  // endpoint: http://www.urbandictionary.com/popular.php?character={0}
  // {0} = letter
  // soup.find(id="columnist").find_all('a')
  url = 'http://www.urbandictionary.com/popular.php?character=A';
  request(url, function (error, response, html) {
    // first check for errors
    if (!error) {
      // next use cheerio on loaded html
      var $ = cheerio.load(html);
      // define variables
      var word = '';
      $('#columnist li').each(function (i) {
        console.log($(this));
      });
    }
  });
});

app.listen('8081');

exports = module.exports = app;