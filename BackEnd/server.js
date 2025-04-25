const express=require(express);
const app=express();
const port=3000;
app.get('/',(req,res)=>{
  res.send('<h2> welcome to home page<h2>')
})
app.listen(port,(err)=>{
 if(err) 
  console.log(err)
else 
console.log('the server is ruinnig')
})