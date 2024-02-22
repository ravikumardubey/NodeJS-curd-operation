
require('body-parser');
const common = require('../config.js').connection;
var ip = require("ip");
var moment = require('moment');
var Emiter = require('events');
var myEmiter = new Emiter();
const loginuser = async (req, res) => {
    let userid = req.sanitize(req.body.username);
    let password = req.sanitize(req.body.password);
    let sqlq = 'select * from users  where userid=$1 AND password =$2';
    let values = [userid, password];
    common.query(sqlq, values, function (err, result) {
            if (result.rows.length) {
                myEmiter.on('sendEmail', (data) => {
                console.log(`Dear ${data.name} your email send your email id is ${data.email}`);
            })
            res.send(result.rows);
        }
    })
}

myEmiter.emit('sendEmail',{
    name: 'ravi kumar dubey',
    email: 'dubey.ravi7@gmail.com'
})

module.exports = {
    loginuser,
};