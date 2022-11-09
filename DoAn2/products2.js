const sql = require('./sql')

function products2(res){
    sql.executeSQL("select * from Product order by CarID", (recordset) => {
        var result = "";
        recordset.recordsets[0].forEach((row) => {
          result += `
                        
                        <div class="col-4">
                            <a href="/detail/${row["Id"]}"><img src ='/img/${row["ProductImage"]}'/></a>
                            <div class="nameProduct"><b>${row["ProductName"]}</b></div>
                            <div class="priceProduct"><span style="color:#ff523b"> $${row["ProductPrice"]}.00</span> 
                            </div>
                            <div style="color: #ff523b">
                            <i style="color: #ff523b" class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            </div>
                            <div><input class="them" type="button" value="Add To Cart" onclick="addToCart(${row["Id"]})"></div>
                            </div> 
                            `;
          });
          res.send(result);
          });
}
module.exports = {
    products2:products2
  }