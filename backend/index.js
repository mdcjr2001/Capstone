// const express = require('express')
// const app = express();

// const collection = require("./models/user")
// const PORT = 8001




// // routes
// const userRoutes = require('./routes/userRoutes')



// // defining end points
// app.use('/api/users', userRoutes)




// // app.use('/auth', authRoutes);

// // app.use('/api/user', userRoutes);

// // app.post('/api/register', async (req, res) => {
// //     console.log(req.body)
// // });




// // app.use('/api/users', userRoutes 
// //  );



// app.get("/", (req,res) => {
//     res.json({message: "Welcome to MongoDb"})
// })


// app.post("/",async(req,res)=>{
//     const{email,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })



// app.post("/signup",async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })







// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`)
// });


const express = require("express");
const app = express();
const cors = require('cors');


// require("dotenv").config();
// parse requests of content-type - application / json;

let dbConnect = require("./dbConnect")
let userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.use(express.json());

app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Capstone application." });
});


app.post("/#",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})



// set port, listen for requests
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});