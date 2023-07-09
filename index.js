const express = require("express"); // standared
const app = express(); // standared

const db =require("mysql");

// create connection to MySQL database
const connection = db.createConnection(
    {
    host:'localhost',           // your host
    user:'root',               // your user           // that is a config file
   password:'123456',         // your pass
    database:'knode'         // your schema
}
);

// connect to MySQL database
connection.connect((err)=>{            // to creat a connection to db
    if(err){
        console.log(err);
        return;
    }
    console.log("Connected to the database")
});

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


app.listen(3000,()=>{
    console.log("server is running")
    
})
