import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from"cors";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURL;

//connect  to mongodb
try{
 mongoose.connect("mongodb://127.0.0.1:27017/bookStore");
  console.log("connected to mongodb");
} catch(error){
  console.log("Error: ",error);
}

//defining route;
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})