import fs from "fs";

export function AuthForTableFlag(table, auth){

    let flagForAuth = false;

    var hashForAuth = fs.readFileSync("auth-key.json");
    hashForAuth = JSON.parse(hashForAuth);

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
    return flagForAuth;
}