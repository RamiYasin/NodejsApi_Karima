const express = require("express"); // standared
const cors = require('cors');
const app = express(); // standared
const bodyParser = require('body-parser');
const {Sequelize} = require("sequelize");

//const {mosta5dem} =require("./Models");

const db =require("mysql");
app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// create connection to MySQL database

const sequelize = new Sequelize('knode', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

async function DBconnect (){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } 
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


/*const connection = db.createConnection(
    {
    host:'localhost',           // your host
    user:'root',               // your user           // that is a config file
   password:'123456',         // your pass
    database:'knode'         // your schema
}
);*/

// connect to MySQL database
/*connection.connect((err)=>{            // to creat a connection to db
    if(err){
        console.log(err);
        return;
    }
    console.log("Connected to the database")
});*/

// to import all users

app.get('/users',(req,res)=>{         
      const sql ="SELECT * FROM mosta5dem;"
      connection.query(sql,(err,result) =>{      // result is the raw data from db
        if(err){
            console.log(err);
            return;
        }
        res.status(200).json(result);    // res is the way how to respone the data
      });
});

app.post('/useradd',(req,res)=>{

const {username, password} = req.body;

//const username = req.body;
//const password = req.body;

    const sql ='INSERT INTO mosta5dem (username, password) VALUES (?,?)'; //sql query with parameters
    connection.query(sql,[username, password],(err,result) =>{      //add the parameters as a array
      if(err){
          console.log(err);
          return;
      }
      res.status(200).json(result);    // res is the way how to respone the data
    });

});

//app.put();  // to edit the Data    as home work

//app.delete(); // to delete the data  as home work

app.listen(3000,()=>{
    DBconnect ();
    console.log("server is running")
    
})
