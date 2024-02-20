require('body-parser');
const common = require('./config.js').connection;
var ip = require("ip");
var moment= require('moment');
//Fetch record from user table
const getusers = async (req, res) => {
  let query = 'select * from users where id=$1';
  let id = req.sanitize(req.body.id);
  let prms = [id]
  common.query(query,prms, (error, result) => {
    if (error) {
      console.log(error);
      res.status(200).end('Database Error');
    }
    if (result.rows.length > 0) {
      console.log(result.rows);
      res.status(200).end(JSON.stringify(result.rows));
    } else {
      res.status(200).end('No record found');
    }
  });
};

const adduser = async (req, res) => {
  let uname = req.sanitize(req.body.name);
  let email = req.sanitize(req.body.email);
  let userid = req.sanitize(req.body.userid);
  let password = req.sanitize(req.body.password);
  let entry_date =  moment().format('YYYY-MM-DD')
  let ipaddress = ip.address(); 
  let query = 'insert into users(name,email,userid,password,entry_date,ipaddress)VALUES ($1,$2,$3,$4,$5,$6)';
  var values = [uname, email, userid, password, entry_date, ipaddress];
  common.query(query,values, function (err, result) {
    if (err) {
      console.log('Plase enter all field'+err);
    }else{
      console.log("Number of records inserted");
    }
  });
  process.on('uncaughtException', function(err) {
    console.log(err);
  });
}


const updateUser= async(req, res)=>{
  let uname = req.sanitize(req.body.name);
  let email = req.sanitize(req.body.email);
  let idval =req.body.id;
  let query = 'update users set name= $1, email= $2  where id=$3';
  const value=[uname,email,idval]
  common.query(query , value, function(err, result){
    if(err){
      res.status(200).end("Record not inserted"+err)
    }else{
      res.status(201).end("succesfully inserted record"+err)
    }
  })
}


//Add record to user table
module.exports = {
  getusers,
  adduser,
  updateUser
};