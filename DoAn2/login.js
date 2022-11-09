const sql = require('./sql');
 
function loginn(username,password, cb) {
    sql.executeSQL(`select * from Users where name= '${username}' and pass='${password}'`, (recordset) => {
        var user = recordset.recordsets[0][0];
        cb(user);
    });
}
module.exports = {
    loginn: loginn,
}