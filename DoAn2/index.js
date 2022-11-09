var express = require("express")
const sql = require('./sql')
const search = require('./search')
const shoppingcart = require('./shoppingcart')
const products = require('./products')
var products2 = require('./products2')
var getDetail = require('./getDetailData')
const register= require('./register');
const admin = require("./admin")
var loginn = require('./login')
var app = express();
app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("views", "./views")
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/register', function (req, res) {
  register.register(req.body.user, req.body.password,req.body.mail,req.body.dienthoai, (user) => {
      res.send(user);
  });
});
app.get("/", function (req, res) {
  products.home(res);
});
app.get("/productss", function (req, res) {
  products2.products2(res);
});
app.get("/getDetailData/:id", function (req, res) {
  getDetail.getdetail(req,res)      
});
app.get("/admin" , function(rep,res){
  res.render("admin.ejs")
})

app.post('/getHoaDon', function (req, res) {
  admin.getHoaDon(req, res);
});
app.post('/updateHoaDon', function (req, res) {
  admin.updateHoaDon(req, res);
});
app.post('/deleteHoaDon', function (req, res) {
  admin.deleteHoaDon(req, res);
});




app.post('/getUsers', function (req, res) {
  admin.getUsers(req, res);
});
app.post('/updateUsers', function (req, res) {
  admin.updateUsers(req, res);
});
app.post('/deleteUsers', function (req, res) {
  admin.deleteUsers(req, res);
});

app.post('/getProduct', function (req, res) {
  admin.getProduct(req, res);
});
app.post('/updateProduct', function (req, res) {
  admin.updateProduct(req, res);
});
app.post('/deleteProduct', function (req, res) {
  admin.deleteProduct(req, res);
});

app.post('/search', function(req,res){
  search.search(req,res)
});
app.post('/getProductByCarID', function(req,res){
  products.getProductByCat(req,res);
});

app.post('/getlogin', function (req, res) {
  loginn.loginn(req.body.username, req.body.password, (user) => {
      res.send(user);
  })
});
app.post('/getshoppingcart', function (req, res) {
  shoppingcart.shoppingcart(req.body.arrid, (result) => {
      res.send(result);
  })
});
app.post('/BuyProduct',async function (req, res) {
  await shoppingcart.BuyProduct(req.body.MaKH,req.body.arrSP);
  res.send("ok");
});





app.get("/login" , function(rep,res){
  res.render("login.ejs")
})
app.get("/detail/:Id" , function(rep,res){
    res.render("detail.ejs")
})
app.get("/index" , function(rep,res){
    res.render("index.ejs")
})
app.get("/products" , function(rep,res){
    res.render("products.ejs")
})
app.get("/products2" , function(rep,res){
    res.render("products2.ejs")
})
app.get("/cart" , function(rep,res){
    res.render("cart.ejs")
})
app.get("/contact" , function(rep,res){
    res.render("contact.ejs")
})
app.listen(4000)

