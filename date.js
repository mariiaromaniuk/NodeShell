function date(done){
    try {
    const now = new Date();
    done(now);
    } catch(err) {
      console.log(err);
    }
  }
  
  module.exports = date;