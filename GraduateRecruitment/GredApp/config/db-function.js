const db = require('./database');
 

/*function connectionCheck() {
    return new Promise((resolve,reject) => {
      db.getConnection(function(err, connection) {
               if(err) {
                   if(connection) connection.release();
                 reject(err)
              } else  {
                resolve('success')
              }
          })
      })
} */

function connectionCheck() {
	db.getConnection(function(err, connection) {
        if(err) {
            if(connection) connection.release(); 
       } else  {
         console.log("success")
       }
   });
};

function connectionRelease() {
    db.on('release', function (connection) {
        console.log('Connection %d released', connection.threadId);
    });
};


module.exports = {
    connectionCheck:connectionCheck(),
    connectionRelease:connectionRelease()   
};