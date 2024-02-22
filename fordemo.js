//const path = require('path');
//dirname
//console.log('Folder Name',path.dirname(__filename));
//filename
//console.log('File Name',path.basename(__filename));
// Exection Name
//console.log('Exection Name', path.extname(__filename));
//Parse
//console.log('Parse Name',path.parse(__filename));
//Join
//console.log('Parse Name',path.join(__dirname,'order','app.js'));

/*** 
  file system
**/
//const fs = require('fs');
// fs.mkdir(path.join(__dirname,'/goitext'),(err)=>{
//     if(err){
//       throw err;
//     }
//     console.log('folder created');
// });

/*** 
  create file 
**/
// fs.writeFile(path.join(__dirname, '/text', 'hello.txt'), 'hello word', (err) => {
//   if (err) {
//     throw err;
//   }
//   fs.appendFile(path.join(__dirname,'/text','hello.txt'),'ravi kumar ubdye',(err)=>{
//     if(err){
//       throw err;
//     }else{
//       console.log('append data in to file');
//     }
//   })
//   console.log('folder created');
// });

/*** 
  Read file 
**/
// fs.readFile(path.join(__dirname,'/text','hello.txt'),'utf-8',(err,data)=>{
//     if(err){
//        throw err;
//     }
//     let dataval= Buffer.from(data);
//     console.log(dataval.toString());
// })


//OS Module
//const os = require('os');
// console.log('CPU Architracture', os.arch())  //CPU Architracture
// console.log('CPU Type',os.type());  //CPU Type
// console.log('get cpu all information',os.cpus());  //get cpu all information
// console.log('return free memoty in bite or integer',os.freemem());   // return free memoty in bite or integer
// console.log('return windows platform',os.platform());   // return windows platform
// console.log('return total memory',os.totalmem());   // return windows platform
//console.log('return up time',os.uptime());   // return windows platform

//Evenet moduke 
// const Emitter = require('events');
// const myEmiter = new Emitter();

// myEmiter.on('somename', (data) => {
//   console.log(data);
// })

// myEmiter.emit('somename', {
//   name: 'ravi kumar dubey'
// });


// class abc extends Emitter {
//   register(username) {
//     console.log(`${username} register succsesfully `);
//     this.emit('sendmial', username);
//     this.emit('sendotp',{name:'ravi kumar dubey',age:'50', mobile : '9958663113'})
//   }
// }
// const obj = new abc();
// obj.on('sendmial', (data) => {
//   console.log('mail send');
// })

// obj.on('sendotp', (data)=>{
//     console.log(`${data.name}  your opt send in ${data.mobile }`)
// })

// obj.register('ravo');




