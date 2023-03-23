import express from "express";
import Airtable from "airtable";
import { GETDATA } from "./Airtable/api-airtable.js";
import { AuthForTableFlag } from "./Auth-for-table/auth.js";
import fs from "fs";


const port = 8000;

const app = express();

//Флаг авторизации
var hashForAuth = null;

app.get('/get/data', async (req,res)=>{
    
    //Парсинг параметров запроса
    let table = req.query.table;
    let maxRecords = req.query.maxrecords;
    let auth = req.query.auth;

    //Запрос на Airtable
    let airtableres = await GETDATA(table, maxRecords, AuthForTableFlag(table, auth));
    //Отправка данных
    res.status(200).json(airtableres)
    
    //console.log(airtableres)
})

app.listen(port, ()=>{
    console.log(`Server has been starten on http://localhost:${port}`);
})

