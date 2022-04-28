spears = "1300"

function mysleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for(var i=0; i<4; i++){
    if(document.querySelector("#scavenge_mass_screen > div > div.villages-container > table > tbody").children[1].children[4].className == 'option option-4 option-inactive'){
        document.querySelector("#scavenge_mass_screen > div > div.candidate-squad-container > table > tbody > tr:nth-child(2) > td:nth-child(1) > input").value=spears/13
        document.querySelector("#scavenge_mass_screen > div > div.villages-container > table > tbody > tr:nth-child(1) > td:nth-child(5) > input").checked=true
    } else if(document.querySelector("#scavenge_mass_screen > div > div.villages-container > table > tbody").children[1].children[3].className == 'option option-3 option-inactive'){
        document.querySelector("#scavenge_mass_screen > div > div.candidate-squad-container > table > tbody > tr:nth-child(2) > td:nth-child(1) > input").value=spears/13*1.5
        document.querySelector("#scavenge_mass_screen > div > div.villages-container > table > tbody > tr:nth-child(1) > td:nth-child(4) > input").checked=true
    } else if(document.querySelector("#scavenge_mass_screen > div > div.villages-container > table > tbody").children[1].children[2].className == 'option option-2 option-inactive'){
        document.querySelector("#scavenge_mass_screen > div > div.candidate-squad-container > table > tbody > tr:nth-child(2) > td:nth-child(1) > input").value=spears/13*3
        document.querySelector("#scavenge_mass_screen > div > div.villages-container > table > tbody > tr:nth-child(1) > td:nth-child(3) > input").checked=true
    } else if(document.querySelector("#scavenge_mass_screen > div > div.villages-container > table > tbody").children[1].children[1].className == 'option option-1 option-inactive'){
        document.querySelector("#scavenge_mass_screen > div > div.candidate-squad-container > table > tbody > tr:nth-child(2) > td:nth-child(1) > input").value=spears/13*7.5
        document.querySelector("#scavenge_mass_screen > div > div.villages-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > input").checked=true
    }
    document.querySelector("#scavenge_mass_screen > div > div.buttons-container > a.btn.btn-default.btn-send").click()
    await mysleep(3000);
}
