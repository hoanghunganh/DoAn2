const sql = require('./sql')

function getdetail(req,res){
    sql.executeSQL(
        `select * from Product where Id = ${req.params.id}`,
        (recordset) => {
          var row = recordset.recordsets[0][0];
          res.send(row);
        }
      );
}

module.exports = {
    getdetail:getdetail
  }