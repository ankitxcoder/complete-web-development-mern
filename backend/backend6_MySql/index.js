const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');

const app = express();

app.set('view engine','ejs');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sqlest',
  password:'Ankit@@@123'
});
try{
connection.query("SHOW TABLES", (err,result)=>
{
  if(err) throw err;
  console.log(result);
});
} catch(err){
  console.log(err);
}
connection.end();

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

console.log(createRandomUser())