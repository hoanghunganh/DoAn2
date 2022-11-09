var sql = require("mssql/msnodesqlv8");
function executeSQL(strSQl, cb) {
    var config = {
      server: "DESKTOP-DVN2M98\\HOANGHUNGANH",
      user: "sa",
      password: "HUNGANH552",
      database: "Project_Web",
      driver: "msnodesqlv8",
    };
    const conn = new sql.ConnectionPool(config).connect().then((pool) => {
      return pool;
    });
    module.exports = {
      conn: conn,
      sql: sql,
    };
    //connect SOL
  sql.connect(config, function (err, db) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query(strSQl, function (err, recordset) {
      if (err) console.log(err);
      cb(recordset);
    });
  });
}


function executeSQLSync(strSQl) {
  var config = {
    server: "DESKTOP-DVN2M98\\HOANGHUNGANH",
    user: "sa",
    password: "HUNGANH552",
    database: "Project_Web",
    driver: "msnodesqlv8",
  };
  const conn = new sql.ConnectionPool(config).connect().then((pool) => {
    return pool;
  });
  module.exports = {
    conn: conn,
    sql: sql,
  };
  //connect SQL
var connectSQL = new Promise((resolve,reject)=>{
  sql.connect(config, function (err, db) {
  if (err) reject(err);
  var request = new sql.Request();
  request.query(strSQl, function (err, recordset) {
    if (err) reject(err);
    resolve(recordset);
    });
  });
})
    return connectSQL;
}

module.exports = {
    executeSQL:executeSQL,
    executeSQLSync:executeSQLSync
  }