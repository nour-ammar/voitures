import express from "express";
import carRouters from "./routes/index.js";
import bodyParser from "body-parser";
import cors from "cors";





const app = express();
const port = 3000;
app.use(bodyParser.json({limit:"30mb",extended : true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended : true}));
app.use(cors);
app.use("/car",carRouters);

app.listen(port, ()=>{
    console.log("app listening on port 3000 **********")
})