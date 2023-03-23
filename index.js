import express from "express";
import Airtable from "airtable";
import { GETDATA } from "./Airtable/api-airtable.js";
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

    let flagForAuth = false;
    
    //считывание данных авторизации
    hashForAuth = fs.readFileSync("auth-key.json");
    hashForAuth = JSON.parse(hashForAuth);

    

    //Авторизация
    switch(table){
        case "block":{
            if(auth == hashForAuth.block){
                flagForAuth = true;
            }
        }break;
        case "course":{
            if(auth == hashForAuth.course){
                flagForAuth = true;
            }
        }break;
        case "author":{
            if(auth == hashForAuth.author){
                flagForAuth = true;
            }
        }break;
        case "promocode":{
            if(auth == hashForAuth.promocode){
                flagForAuth = true;
            }
        }break;
        case "acts":{
            if(auth == hashForAuth.acts){
                flagForAuth = true;
            }
        }break;
        case "student":{
            if(auth == hashForAuth.student){
                flagForAuth = true;
            }
        }break;
        case "pay":{
            if(auth == hashForAuth.pay){
                flagForAuth = true;
            }
        }break;
        case "advertising":{
            if(auth == hashForAuth.advertising){
                flagForAuth = true;
            }
        }break;
        case "idea":{
            if(auth == hashForAuth.idea){
                flagForAuth = true;
            }
        }break;
        case "lessions":{
            if(auth == hashForAuth.lessions){
                flagForAuth = true;
            }
        }break;
        
    }
    //Запрос на Airtable
    let airtableres = await GETDATA(table, maxRecords, flagForAuth);
    //Отправка данных
    res.status(200).json(airtableres)
    
    //console.log(airtableres)
})

app.listen(port, ()=>{
    console.log(`Server has been starten on http://localhost:${port}`);
})

