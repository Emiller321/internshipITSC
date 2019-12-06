
 //Setting up the database connection through knex
 var knex = require('knex')({
   client: "pg",
   version: "4.15",
   connection:{
    host: "localhost",
    user: "postgres",
    password: "SillyMilly101",
    database: "application",
    charset : 'utf8'
    }
 });

 //This lets me use bookshelf and allows to connect to the datatbase
var bookshelf = require('bookshelf')(knex);

 //Models
 var Position = bookshelf.Model.extend({
     tableName: 'position'
    });

var Manager = bookshelf.Model.extend({
        tableName: 'managerlogin'
 });

 var Applicant = bookshelf.Model.extend({
    tableName: 'applicants'
});

exports.bookshelf = bookshelf;
exports.Applicant = Applicant;
exports.Manager = Manager;
exports.Position = Position;

