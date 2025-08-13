import express from "express";
const app =express();
app.use(express.json());
import mongoose from "mongoose";
import nodemon from "nodemon";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
app.use(cors());
import { postBook,getBook,deleteBook}from "./controller/books.js"

const PORT = process.env.PORT || 5000;


const connectMongoDB = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        
        if(connect){
            console.log(" Database is connected to the server")
        }
    }catch(e){
        console.log(e.error)
    }
}
connectMongoDB();

app.use(cors({
  origin: ["http://localhost:5173" || "http://localhost:5174" ],
  methods: ['GET', 'POST' ,'DELETE'],
  credentials: true
}));

/// routes

app.post("/api/books",postBook);
app.get("/api/books",getBook);
app.delete("/api/books/:id",deleteBook);


app.listen(PORT,(req,res)=>{
    console.log("server is running");
})

