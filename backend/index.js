const express = require("express");
const app = express();
const cors = require('cors');


// require("dotenv").config();
// parse requests of content-type - application / json;

let dbConnect = require("./dbConnect")
let userRoutes = require('./routes/userRoutes');
let postRoutes = require('./routes/postRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.use(express.json());

app.use('/api/users', userRoutes);

app.use('/api/posts', postRoutes);


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

app.post("/Createpost",async(req,res)=>{
    const{id, Caption, img, Tags}=req.body

    const data={
        id:id,
        Caption:Caption,
        img:img,
        Tags:Tags,
    }

    try{
        const check=await collection.findOne({id:id})

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

app.delete("/",async(req,res)=> {
    const{id, Caption, img, Tags}=req.body

    const data={
        id:id,
        Caption:Caption,
        // img:img,
        Tags:Tags,
    }
})


// set port, listen for requests
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});