// Module file - prints out the full path to the current working directory

function pwd (done){
    done(process.cwd());
}

module.exports = pwd;