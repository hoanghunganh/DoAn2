const sql = require('./sql')
function shoppingcart(arrid,cb){
    sql.executeSQL(`select * from Product where Id in ${arrid}`, (recordset) => {
        var result = "";
        if (recordset.recordsets[0] === null || recordset.recordsets[0].length === 0) {
            cb("Bạn chưa chọn sản phẩm");
        }
        else{
            recordset.recordsets[0].forEach(row => {
                result += `
                
                        <div style='width:300px' class="product" productId="${row["Id"]}" price="${row["ProductPrice"]}">
                        <a href="/detail/${row["Id"]}"><img style='width:100px' src ='/img/${row["ProductImage"]}'/></a>
                        <div style='text-align:center' class="name" line-height:30px'><b>${row["ProductName"]}</b></div>
                        <div style='text-align:center' class="price"><span style="color:#ff523b"> $${row["ProductPrice"]}.00</span></div>
                        <input class="soluong" onclick="TongTien()" max="10" min="1" type="number">
                        <div style='text-align:center'><input class="xoasp" type="button" value = "Xóa Sản Phẩm" onclick= "onDeleteProduct(${row["Id"]})"></div>
                      </div>
                                 
                `;
            });
            cb(result);
        }
    });  
}

async function BuyProduct(MaKH,arrSP){
    await sql.executeSQLSync(`insert into HoaDon(MaKH,NgayBan) values('${MaKH}',GETDATE())`);
    var data = await sql.executeSQLSync(`select @@IDENTITY as MaHD;`);
    console.log(data.recordsets[0][0].MaHD)
    arrSP.forEach(async item =>{
        await sql.executeSQLSync(`insert into ChiTietHoaDon(MaHD,MaSP,SoLuong,GiaBan) 
        values ('${data.recordsets[0][0].MaHD}','${item.MaSP}','${item.SoLuong}','${item.GiaBan}')`);
    })
     
         
}

module.exports = {
    shoppingcart:shoppingcart,
    BuyProduct:BuyProduct
  }