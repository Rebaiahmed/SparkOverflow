const express = require('express');
const morgan = require('morgan');
const path = require('path');
const  request = require('request');
const app = express();
const axios = require("axios");
const cors = require('cors');
const crypto = require('crypto');
const csv=require('csvtojson')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 9000;

//****************************************//
//***********************//
// Setup logger


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'src')));
//********************************//
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//***********************************************//
//********************************************//







//**************test csv files*******************//







/*************Define our routes*************/

app.get('/programmers_professions', function(req,res){


  var list =[];
  csv()
  .fromFile('data/programmers_professions.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})



//***************************Countries***************************//



app.get('/countries', function(req,res){


  var list =[];
  csv()
  .fromFile('data/countries.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})



//********************************************//
//*********educations**************************
app.get('/educations', function(req,res){


  var list =[];
  csv()
  .fromFile('data/educations.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})


//*****************************************************//
//***********get gender****************************//
app.get('/programmer_hobbies', function(req,res){


  var list =[];
  csv()
  .fromFile('data/programmers_hobbies.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})


//**************************//






//*****************************************************//
//***********get gender****************************//
app.get('/gender', function(req,res){


  var list =[];
  csv()
  .fromFile('gender.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})





//*****************************************************//
//***********Web Developers****************************//
app.get('/web_developers', function(req,res){


  var list =[];
  csv()
  .fromFile('data/web_developers.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})



//*****************************************************//
//***********Nbr of Web Developers****************************//
app.get('/nbr_web_developers', function(req,res){


  var list =[];
  csv()
  .fromFile('data/nbr_web_developers.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})






//*****************************************************//
//***********Mobile Developers****************************//
app.get('/nbr_mobile_developers', function(req,res){


  var list =[];
  csv()
  .fromFile('data/nbr_mobile_developers.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})

//**********************************//

app.get('/mobile_developers', function(req,res){


  var list =[];
  csv()
  .fromFile('data/mobile_developers.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})










//*****************************************************//
//***********IDE****************************//
app.get('/ide', function(req,res){


  var list =[];
  csv()
  .fromFile('data/ide.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})




//*****************************************************//
//***********Version Control ****************************//
app.get('/version_control', function(req,res){


  var list =[];
  csv()
  .fromFile('data/version_control.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})






//*****************************************************//
//***********Methodlogies ****************************//

//*****************************************************//
//***********databases ****************************//
app.get('/methodologies', function(req,res){


  var fs  = require("fs");
  fs.readFile('data/methodologies.txt', function(err, f){
      var array = f.toString().split('\n');
      res.json(array)
  });

})






//*****************************************************//
//***********platforms ****************************//
app.get('/paltforms', function(req,res){

  var fs  = require("fs");
  fs.readFile('data/platforms.txt', function(err, f){
      var array = f.toString().split('\n');
      res.json(array)
  });

})








//*****************************************************//
//***********databases ****************************//
app.get('/databases', function(req,res){


  var fs  = require("fs");
  fs.readFile('data/database.txt', function(err, f){
      var array = f.toString().split('\n');
      res.json(array)
  });

})



  //*****************************************************//
  //***********programming_languages ****************************//
  app.get('/programming_languages', function(req,res){

    var fs  = require("fs");
    fs.readFile('data/programming_languages.txt', function(err, f){
        var array = f.toString().split('\n');
        res.json(array)
    });

})




//*****************************************************//
//***********frameworks ****************************//
app.get('/frameworks', function(req,res){

  var fs  = require("fs");
  fs.readFile('data/frameworks.txt', function(err, f){
      var array = f.toString().split('\n');
      res.json(array)
  });

})

//*********************************//

//*****************************************************//
//***********diversity ****************************//
app.get('/developertype', function(req,res){

  var fs  = require("fs");
  fs.readFile('data/developertype.txt', function(err, f){
      var array = f.toString().split('\n');
      res.json(array)
  });

})










  //*****************************************************//
  //***********diversity ****************************//
  app.get('/diversity', function(req,res){


    var list =[];
    csv()
    .fromFile('gender.csv')
    .on('json',(jsonObj)=>{
        // combine csv header row and csv line to a json object
        // jsonObj.a ==> 1 or 4
        //console.log("jsosn" + JSON.stringify(jsonObj));
        list.push(jsonObj)
    })
    .on('done',(error)=>{
        console.log('end')
        console.log("our list" + JSON.stringify(list));
        res.json(list);
    })

})










app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
