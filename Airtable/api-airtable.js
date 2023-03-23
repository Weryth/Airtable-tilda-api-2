import * as Airtable from "airtable";
import * as dotenv from 'dotenv';


dotenv.config();

const airtable_key = process.env.AIRTABLE_API_KEY;
const baseID = process.env.AIRTABLE_BASE_ID;

//const url = `https://api.airtable.com/v0/appvLyLGTmowghhxM/block?maxRecords=3&view=active`



export async function GETDATA (tableName, maxRecords){
    
    var apiUrl = "https://api.airtable.com/v0/" + baseID + "/" + tableName+"?maxRecords="+maxRecords;
    
    var resp = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + airtable_key
          }
    }).then(resp => resp.json())

    return resp;
    
}