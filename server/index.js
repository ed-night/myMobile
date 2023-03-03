const express = require("express");
const mysql = require("mysql");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('ui'));
app.use(bodyParser.json());



const connect = async ()=>{
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "night",
            password: "night2000",
            database: "test",
        });
        connection.connect(()=>{
            resolve(connection);
        })
    })
} 

const query = async (text,connection)=>{
    return new Promise((resolve, reject) => {
        connection.query(text, function (error, results, fields) {
            console.log(error);
            resolve(results);
        });
    })
} 

const disconnect = async (connection)=>{
    return new Promise((resolve, reject) => {
        connection.end(()=>{
            resolve();
        })
    })
} 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {

});

app.post('/getUsers', async (req,res)=>{
    let connection = await connect();
    let res2 = await query("SELECT * FROM `users`",connection)
    console.log(res2);
    res.send({users: res2});
    await disconnect(connection);

})

app.post('/addUser', async (req,res)=>{
    const {id, name, surname, age} = req.body;
    let connection = await connect();
    let res2 = await query("INSERT INTO `users`(`user_id`, `name`, `surname`, `age`) VALUES ('"+id+"','"+name+"','"+surname+"','"+age+"')",connection)
    console.log(res2);
    res.send({users: res2});
    await disconnect(connection);

})