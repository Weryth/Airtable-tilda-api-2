import express from "express";
import Airtable from "airtable";

const port = 8000;

const app = express();

app.post('/hello', (req,res)=>{
    res.status(200).json({body: "Привет!"})
    
})

app.listen(port, ()=>{
    console.log(`Server has been starten on http://localhost:${port}`);
})

