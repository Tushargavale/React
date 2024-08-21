const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors=require('cors')
const app = express();
const PORT = 3000;
app.use(cors())
// Middleware
app.use(bodyParser.json());

const users = []; // In-memory user store for demonstration purposes

// Secret key for JWT
const SECRET_KEY = 'XSHHV54s8ds5815S';


const Auth=(req,resp,next)=>{

  const user=req.headers.authorization
  if(user!=='tushargavale@gmail.com123')
 {
  resp.status(400).send('invalid Token')
 }  console.log(user)

 // resp.status(200).send({Token:'tushargavale@gmail.com123'})
console.log('**************',27)
next()
}





// Register endpoint
app.post('/register', async (req, res) => {

});



app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(username,password)
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }
  if(username=='admin' && password=='admin')
  {
  //let Token=req.headers.authorization
  return res.status(200).send({Token:'tushargavale@gmail.com123'})
  }
  else{
    res.status(404)
  }
 


});


app.post('/getDoc',Auth,async(req,resp)=>{

  console.log('****************',64)
 return resp.status(200).send({name:"Tushar"}) 



})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
