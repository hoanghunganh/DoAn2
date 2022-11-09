    const sql = require('./sql')


    function home(res){
        sql.executeSQL("select * from Product2 order by CarID", (recordset) => {
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
                        </div>
                            </div> 
                        `;
                });
                res.send(result);
            });
    }
    function getProductByCat(req,res){
        sql.executeSQL(`select * from Product where CarID = '${req.body.carid}'`, (recordset) => {
            var result = "";
            if (recordset.recordsets[0] === null || recordset.recordsets[0].length === 0) {
                res.send("Không Tìm Thấy Sản Phẩm");
            }
            else{
                recordset.recordsets[0].forEach(row => {
                    result += `
                    
                            <div class="col-4">
                                <a href="/detail/${row["Id"]}"><img src ='/img/${row["ProductImage"]}'/></a>
                                <div class="nameProduct"><b>${row["ProductName"]}</b></div>
                                <div class="priceProduct"><span style="color:#ff523b"> $${row["ProductPrice"]}.00</span></div>
                                <div style="color: #ff523b">
                                <i style="color: #ff523b" class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                </div>
                                <div>
                                    <input class="them" type="button" value="Add To Cart" onclick="addToCart(${row["Id"]})"></div>
                                    </div>
                                </div>                            
                    `;
                });
                res.send(result);
            }
        }); 
    }

    module.exports = {
        home:home,
        getProductByCat:getProductByCat
    }