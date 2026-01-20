const express = require ('express');

const app = express();
const port = 3000 ;

app.use(express.json());

// this will handle only get api to /user
app.get("/user",(req,res)=>{
    res.send({firstName : "Kiran", lastName: "Tayade"})
});

// this will handle only post api to /user
app.post("/user",(req,res)=>{
    console.log(req.body);
    //Saving data to DB;

    res.send ("Data saved Successfuly");
    
});

//this will handle only delete api to /user
app.delete("/user",(req, res)=>{
    console.log("User Deleted Successfully");   
});

// this will match all API call to /test
app.use("/test",(req,res) => {
    res.send("Hello From test request Handler");
});


app.listen(3000,()=>{
    console.log("server running on port :: ", port);
    
});