const mysql = require("mysql");

let connection = mysql.createConnection({
    host : 'misteriodb.ce2cuughwsdj.us-east-1.rds.amazonaws.com',
    user : 'Dev',
    password : 'MisterioDev2019',
    database : 'misteriodb'
});

connection.connect();
select(connection);
connection.query("Insert into User values (100,1,'Name Lastname','nln@unal.edu.co','someCarreer','2000-01-01')", show);
select(connection);
connection.query("Update User set name='New name' where name='Name Lastname'",show);
select(connection);
connection.query("Delete from User where mail='nln@unal.edu.co'",show);
select(connection);
connection.end();

function select(connection){
    connection.query("SELECT * FROM `User`", show);
}

function show(error, results, fields) {
    if (error) throw error;
    console.log('\n\n');
    console.log(results);
}