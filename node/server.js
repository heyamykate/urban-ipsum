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

var firebase = require('firebase');
var express = require('express');
var fs = require('fs');
var axios = require('axios');
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
//var MongoClient = require('mongodb').MongoClient

//var mongoURL = 'mongodb://admin:s3cur3@ds161640.mlab.com:61640/urban-ipsum';
//var db;

// MongoClient.connect(mongoURL, (err, database) => {
//     // ... start the server
//     if (err) {
//         return console.log('error: ', err);
//     }
//     db = database;
//     app.listen(3000, () => {
//         console.log('listening on port 3000');
//     })
// });
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

var app = express();
app.use(bodyParser.urlencoded({ extended: true }))

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var words = []

function scrape(letters) {

    for (var i = 0; i < letters.length; i++) {
        var words = [];
        var url = `http://www.urbandictionary.com/popular.php?character=${letters[i]}`
        axios.get(url)
            .then(function(response) {
                var $ = cheerio.load(response.data);
                var items = $('#columnist').find('a');
                $(items).each(function(index, item) {
                    words.push({
                        word: $(item).text()
                    })
                })
                return words;
            })
            .then(function(words) {
                console.log('words: ', words.length);
            })
    }
    // console.log('word count: ', words.length);
    // return words;
}
app.get('/scrape', function(req, res) {
    // all web scraping here
    // endpoint: http://www.urbandictionary.com/popular.php?character={0}
    // {0} = letter
    // soup.find(id="columnist").find_all('a')
    scrape(letters);
    // var result = scrape(letters);
    // console.log('result: ', result);
    // for (var i = 0; i < letters.length; i++) {
    //     url = `http://www.urbandictionary.com/popular.php?character=${letters[i]}`
    //     request(url, function(error, response, html) {
    //         // first check for errors
    //         if (!error) {
    //             // next use cheerio on loaded html
    //             var $ = cheerio.load(html);
    //             var items = $('#columnist').find('a');
    //             //console.log(items)
    //             $(items).each(function(index, item) {
    //                 var word = {
    //                         word: ''
    //                     }
    //                     //console.log($(item).text())
    //                 var wordVal = $(item).text();
    //                 wordVal = wordVal.replace(/(\r\n|\n|\r)/gm, "");
    //                 word.word = wordVal
    //                 words.push(word)
    //             })
    //         }
    //     })
    //     console.log(words)
    // fs.writeFile('output.json', JSON.stringify(words, null, 4), function(err) {
    //     console.log('file success')
    // })
    // if (words.length > 0) {
    //     db.collection('ipsum').insertMany(words, (err, result) => {
    //         if (err) {
    //             return console.log(err)
    //         }
    //     })
    // }
})

app.listen('8081')

exports = module.exports = app;
