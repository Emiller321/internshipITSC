
//This line is defining express module so we can use it 
const express = require('express');

//This line is defining the three models form bookshelf
const {Position, Applicant, Manager} = require('./bookshelf');

const app = express();

//This line is letting the app use the public directory to serve images, files , etc
app.use(express.static('public'));

//This line defines the path of the file
var path = require('path');

//Pulls index.html file to present to the user 
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/index.html'));
 });

 //This gets all the positions and displays the results
 app.get('/position', function(req, response){
     console.log()
        Position.fetchAll().then(results => {
            console.log(results)
            response.json(results);
          });
    });

    // app.post('/', function(request, response){
    //     // let val = await Applicant.forge({'First':req.body.FirstName, 'Last':req.body.LastName, 'Email':req.body.Email}).save();

    //     console.log(val.toJSON());
    //     console.log('success')
    //  });

app.get('/manager', function(req, response){
    response.sendFile(path.join(__dirname + '/managerpage.html'));
});


//This is saying that the application is ready at the local host on port 3000
 app.listen(3000, function(){
    console.log('Application is ready at http://localhost:3000');
});



//This line is defining the bcrypt module so we can use it 
//  const bcrypt = require('bcrypt');
// const app = bcrypt();

//Sends the data to the server/ bcrypt stuff
//  app.post('/manager', function(req, response){
//      var username = req.body.username;
//      var enteredPassword = req.body.password;
//      new User({username: username}).fetch().then(function(found){
//          if (found){
//              console.log("User's username was found in database.")
//              bcrypt.compare(enteredPassword, found.get('password'), function(err,res){
//                  if(res){
//                      req.session.regenerate(function(){
//                          console.log("Password matches")
//                          response.redirect('/manager')
//                          req.session.found = found.username;
//                      });
//                  } else {
//                      console.log("password does not match");
//                      response.redirect('/')
//                  }
//              })
//          } else {
//              console.log("username did not match");
//              response.redirect('/');
//          }
//         })
//      });
