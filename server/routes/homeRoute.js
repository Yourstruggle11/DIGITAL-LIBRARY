import  express  from "express";

const route = express.Router();


route.get("/", function(req, res){
    res.send("hello")
})

export default route;