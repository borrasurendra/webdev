const dotenv=require("dotenv");
const express=require ("express");
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const cookieParser=require("cookie-parser")

const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');

const port=process.env.PORT;

//required model
const Users=require('./models/userSchema')
const Message=require('./models/msgSchema');

//to get data from frontend
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


app.get('/',(req,res) =>{
    res.send("Hello world");
})

//registration
app.post('/register', async(req,res)=>{
    try {
        const username=req.body.username;
        const email=req.body.email;
        const password=req.body.password;


        const createUser=new Users({
            username:username,
            email:email,
            password:password
        });

        const created=await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

        
    } catch (error) {
        res.status(400).send(error)
        
    }
})
//login user

app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // validate input
      if (!email || !password) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const user = await Users.findOne({ email });
  
      // check if user exists
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // check password
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // generate token
      const token = await user.generateToken();
  
      // set cookie
      res.cookie('jwt', token, {
        expires: new Date(Date.now() + 86400000),
        httpOnly: true,
      });
  
      // return response
      res.status(200).json({ message: 'Logged in', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


  //message
  app.post('/message', async(req,res)=>{
    try {
        const name=req.body.name;
        const email=req.body.email;
        const message=req.body.message;
  
  
        const sendMsg=new Message({
            name:name,
            email:email,
            message:message
        });
  
        const created=await sendMsg.save();
        console.log(created);
        res.status(200).send("message sent successfully");
  
        
    } catch (error) {
        res.status(400).send(error)
        
    }
  })

  //logout page
  app.get('/logout',(req,res)=>{
    res.clearCookie("jwt",{path:'/'})
    res.status(200).send("user logged out")
  })
 
  


app.listen(port,()=>{
    console.log("server is running")
})