var levels = [2,3,4];  //wpisz poziomy zbieractwa, które mają być odświeżane i JUŻ są aktywne z równym podziałem wojska
var units = [1,2]; //jednostki do zaznaczania w zbieractwie: 1-pik, 2-miecz, 3-topór, itd.

//https://stackoverflow.com/a/39914235
async function mysleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (var a=0; a<40; a++){
    var min = 99999999;
    var choose = 0;
    var time = "";
    for (level of levels){
        if(! document.querySelector("#scavenge_screen > div > div.options-container > div:nth-child(" + level + ") > div.status-specific > div > ul > li:nth-child(4) > span.return-countdown")){
            min = 1000;
            choose = level;
            time = "00:00:01";   
            break;
        }
        var time_left = document.querySelector("#scavenge_screen > div > div.options-container > div:nth-child(" + level + ") > div.status-specific > div > ul > li:nth-child(4) > span.return-countdown").innerHTML;
        let ms = Number(time_left.split(':')[0]) * 60 * 60 * 1000 + Number(time_left.split(':')[1]) * 60 * 1000 + Number(time_left.split(':')[2]) * 1000 + 5000;
        if (ms < min){
            min = ms;
            choose = level;
            time = time_left;
        }
    }
    
    console.log("Waiting " + time + " (" + min + " miliseconds) for level " + choose + " scavenge. [" + new Date().toLocaleString() + "]");
    await mysleep(min);
    
    for (unit of units){
        console.log("Selecting troops " + unit);
        document.querySelector("#scavenge_screen > div > div.candidate-squad-container > table > tbody > tr:nth-child(2) > td:nth-child(" + unit + ") > a").click()
        await mysleep(1000);
    }
    
    console.log("Sending troops for " + choose + " level scavenge.");
    document.querySelector("#scavenge_screen > div > div.options-container > div:nth-child(" + choose + ") > div.status-specific > div > div.action-container > a.btn.btn-default.free_send_button").click();
    await mysleep(1000);
}
