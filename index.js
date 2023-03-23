import express from "express";
import Airtable from "airtable";
import { GETDATA } from "./Airtable/api-airtable.js";

const port = 8000;

const app = express();

app.get('/get/data', async (req,res)=>{
    //console.log(req.body)
    let table = req.query.table;
    let maxRecords = req.query.maxrecords;
    let airtableres = await GETDATA(table, maxRecords);
    res.status(200).json(airtableres)
    //console.log(airtableres)
})

app.listen(port, ()=>{
    console.log(`Server has been starten on http://localhost:${port}`);
})

