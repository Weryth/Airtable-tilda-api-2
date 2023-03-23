import express from "express";
import Airtable from "airtable";
import { GETDATA, TakeDATA } from "./Airtable/api-airtable.js";

const port = 8000;

const app = express();

app.get('/get/block', async (req,res)=>{
    
    let airtableres = await TakeDATA();
    res.status(200).json(airtableres)
    //console.log(airtableres)
})

app.listen(port, ()=>{
    console.log(`Server has been starten on http://localhost:${port}`);
})

