// Module file - prints the contents of bash.js file to the console

const fs = require('fs');

function cat(done, file){
  fs.readFile(file, 'utf8', (err, data)=>{
    if (err)
       throw err
    else
       done(data);
  })
}

module.exports = cat;