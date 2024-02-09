const express = require('express');
// require('dotenv').config();
const PORT = process.env.PORT || 4000;
const app = express();
app.set('view engine','ejs')
app.use(express.static('public'))
app.get('/',(req,res)=>{
  res.render('admin');
});

app.get('/product',(req,res)=>{
  res.render('product');
});


app.get('/admin',(req,res)=>{
  res.render('hello');
});

app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`)
});