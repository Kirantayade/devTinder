const express = require ('express');

const app = express();
const port = 3000 ;

app.use(express.json());

app.get(
    "/user",
    (req,res, next)=>{
        console.log("Handling the route user!!");
        next();
    },
    (req,res,next)=>{
        console.log("Handling the route user 2!!");
        next();
    },
   (req,res,next)=>{
        console.log("Handling the route user 3!!");
        next();
    },
    (req,res,next)=>{
        console.log("Handling the route user 4!!");
        next();
    },
    (req,res,next)=>{
        console.log("Handling the route user 5!!");
        res.send("5th Response");
    },
);

app.listen(3000,()=>{
    console.log("server running on port :: ", port);
    
});