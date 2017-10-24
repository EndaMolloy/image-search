var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
require('dotenv').config()
var app = express()
var GoogleSearch = require('google-search')

var googleSearch = new GoogleSearch({
  key: process.env.GOOGLE_API,
  cx: process.env.GOOGLE_CX
});

app.use(bodyParser.json())

var search = require('./models/search')

//connect to mongoDB
var mongoDB = 'mongodb://localhost/searchImg'
mongoose.connect(mongoDB,{
  useMongoClient: true,
})

app.get('/api/imagesearch/:imgToSearch*',(req,res)=>{

//In ES6 {imgToSearch} = req.parms is the same as ES5 imgToSearch = req.params.imgToSearch

  var {imgToSearch} = req.params
  var offset = getOffset()

  //set pagination offset
  function getOffset(){
    offset = req.query.offset

    if(offset){
      return offset
    }
      return 1
  }

  // Create an instance of model search and save the new model instance, passing a callback
  search.create({imgSearch: imgToSearch},(err,imgMod)=>{
    if(err) return handleError(err)
    //res.json(imgMod)
  })


  // var imgMod = new search({
  // imgSearch: imgToSearch
  // })
  // imgMod.save(err =>{
  //   if(err) return res.send('Error connecting to db')
  //       res.json(imgMod) })

  googleSearch.build({
    q:imgToSearch,
    fileType: "jpeg",
    start: offset,
    num:10
  },(err,results)=>{
    if(err) return handleError(err)

    var arr = []
    for(var i =0; i<10; i++){
      //console.log(results);
      arr.push({
        title: results.items[i].title,
        url: results.items[i].link,
        snippet: results.items[i].snippet
      })
    }
    res.json(arr)
  })

})

app.get('/api/latest/',(req,res)=>{

search.find({},(err,doc)=>{
  if(err) res.send(err)

  res.json(doc)
})
.select({"imgSearch":1,"date": 1, "_id": 0})
.limit(10)
.sort('-date')


})


app.listen(3000,()=>{
  console.log('serv\'s up')
})
