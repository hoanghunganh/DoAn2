const sql = require('./sql');
 
function register(user,password,mail,dienthoai,cb) {
    sql.executeSQL(`insert into Users(name,pass,email,sdt) values('${user}','${password}','${mail}','${dienthoai}')`, 
    (recordset) => {
        cb(recordset.recordsets[0]);
    })
}
module.exports = {
    register: register
}