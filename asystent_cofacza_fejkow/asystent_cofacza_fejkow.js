var i=2

//https://stackoverflow.com/a/39914235
async function mysleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

while (document.querySelector("#commands_outgoings > table > tbody > tr:nth-child("+i+")") && 
       document.querySelector("#commands_outgoings > table > tbody > tr:nth-child("+(i+1)+")")){
    
    if (document.querySelector("#commands_outgoings > table > tbody > tr:nth-child("+i+") > td:nth-child(1) > span > span > a:nth-child(1) > span.quickedit-label").innerHTML ==
        document.querySelector("#commands_outgoings > table > tbody > tr:nth-child("+(i+1)+") > td:nth-child(1) > span > span > a:nth-child(1) > span.quickedit-label").innerHTML){
        
        if(document.querySelector("#commands_outgoings > table > tbody > tr:nth-child("+(i+1)+") > td:nth-child(3) > a > img")){
            console.log(document.querySelector("#commands_outgoings > table > tbody > tr:nth-child("+(i+1)+") > td:nth-child(1) > span > span > a:nth-child(1) > span.quickedit-label").innerText);
            document.querySelector("#commands_outgoings > table > tbody > tr:nth-child("+(i+1)+") > td:nth-child(3) > a > img").click()
            i--;
            await mysleep(525);
        }
    }
    i++;
}
  
