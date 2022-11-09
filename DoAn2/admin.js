const sql = require('./sql');
 
function getHoaDon(req,res) {
    sql.executeSQL(`select C.MaHD,H.MaKH,C.MaSP,C.SoLuong,C.GiaBan from ChiTietHoaDon C join HoaDon H on C.MaHD = H.MaHD`,(recordset)=> {
        if (recordset.recordsets[0] == undefined || recordset.recordsets[0].length === 0) {
            res.send("Không Tìm Thấy Hóa Đơn");
        }
        else {
            res.send(recordset.recordsets[0]);
        }
    })
}
function updateHoaDon(req,res) {
    sql.executeSQL(`update ChiTietHoaDon set SoLuong = '${req.body.SoLuong}',GiaBan = '${req.body.GiaBan}' where MaHD = '${req.body.MaHD}' and MaSP = '${req.body.MaSP}'`,(recordset)=> {
        res.send(recordset);
    })
}
function deleteHoaDon(req,res) {
    sql.executeSQL(`delete from ChiTietHoaDon where MaHD = '${req.body.MaHD}' and MaSP = '${req.body.MaSP}'`,(recordset)=> {
        if (recordset.recordsets[0] == undefined || recordset.recordsets[0].length === 0) {
            res.send("Không Tìm Thấy Hóa Đơn");
        }
        else {
            res.send(recordset.recordsets[0]);
        }
    })
}


function getUsers(req,res){
    sql.executeSQL(`select * from Users`,(recordset)=> {
        if (recordset.recordsets[0] == undefined || recordset.recordsets[0].length === 0) {
            res.send("Không Tìm Thấy Người dùng");
        }
        else {
            res.send(recordset.recordsets[0]);
        }
    })
}
function updateUsers(req,res) {
    sql.executeSQL(`update Users set name='${req.body.Name}',pass='${req.body.Pass}',email='${req.body.Email}',sdt='${req.body.Sdt}' where Id='${req.body.UserId}'`,(recordset)=> {
        res.send(recordset);
    })
}
function deleteUsers(req,res) {
    sql.executeSQL(`delete from Users where Id = ${req.body.UserId}`,(recordset)=> {
        if (recordset.recordsets[0] == undefined || recordset.recordsets[0].length === 0) {
            res.send("Không Tìm Thấy Người Dùng");
        }
        else {
            res.send(recordset.recordsets[0]);
        }
    })
}

function getProduct(req,res) {
    sql.executeSQL(`select * from Product`,(recordset)=> {
        if (recordset.recordsets[0] == undefined || recordset.recordsets[0].length === 0) {
            res.send("Không Tìm Thấy Sản Phẩm");
        }
        else {
            res.send(recordset.recordsets[0]);
        }
    })
}
function updateProduct(req,res) {
    sql.executeSQL(`update Product set ProductName='${req.body.ProductName}',ProductPrice='${req.body.ProductPrice}' where Id='${req.body.Id}'`,(recordset)=> {
        res.send(recordset);
    })
}
 
function deleteProduct(req,res) {
    sql.executeSQL(`delete Product where Id = ${req.body.Id}`,(recordset)=> {
        if (recordset.recordsets[0] == undefined || recordset.recordsets[0].length === 0) {
            res.send("Không Tìm Thấy Sản Phẩm");
        }
        else {
            res.send(recordset.recordsets[0]);
        }
    })
}
 
module.exports = {
    getProduct: getProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    getUsers:getUsers,
    updateUsers:updateUsers,
    deleteUsers:deleteUsers,
    getHoaDon:getHoaDon,
    updateHoaDon:updateHoaDon,
    deleteHoaDon:deleteHoaDon
}