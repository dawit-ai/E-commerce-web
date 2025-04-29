const express=require("express");
const mysql=require('mysql2');
const cors=require("cors")
const port=3000;
const app=express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});
const db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'signup'
  
})
db.connect((err) => {
  if (err) throw err;
  console.log("DB connected!");
});
app.post("/signup",(req,res)=>{
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
  const values=[
    req.body.name,
    req.body.email,
    req.body.password
  ]
  db.query(sql, [values],(error,data)=>{
    if(error){
      return res.json('Error')
    }
    return res.json(data)  
  })
})
app.listen(port,(err)=>{
 if(err) 
  console.log(err)
else 
console.log('the server is ruinnig')
})