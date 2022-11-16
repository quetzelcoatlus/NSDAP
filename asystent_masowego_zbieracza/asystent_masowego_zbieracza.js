var units = [
    ["spear", 750, 300, 150, 100, 1]
];


function mysleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fill(unit, number) {
    let field = $(`[name=${unit}]`);
    number = Number(number);
    field.trigger('focus');
    field.trigger('keydown');
    field.val(number);
    field.trigger('keyup');
    field.trigger('change');
    field.blur();
}

for(var k=0; k<10; k++){
    for(var i=4; i>0; i--){
        for(var j=0; j<units.length; j++){
            fill(units[j][0], units[j][i] * units[j][5])
            await mysleep(500);
        }
        document.querySelector("#scavenge_mass_screen > div > div.villages-container > table > tbody > tr:nth-child(1) > td:nth-child("+(i+1)+") > input").click()
        await mysleep(500);
        document.querySelector("#scavenge_mass_screen > div > div:nth-child(3) > div.buttons-container > a.btn.btn-default.btn-send").click()
        await mysleep(1000);
    }
    for(var j=0; j<units.length; j++){
        fill(units[j][0], units[j][4] * units[j][5])
        await mysleep(500);
    }
    var time_left = document.querySelector("#scavenge_mass_screen > div > div.options-container > div:nth-child(4) > div.status-specific > div > div.squad-preview > ul > li.duration-section > span.duration").innerHTML;
    let ms = Number(time_left.split(':')[0]) * 60 * 60 * 1000 + Number(time_left.split(':')[1]) * 60 * 1000 + Number(time_left.split(':')[2]) * 1000 + 5000;
    console.log("Waiting " + time_left + " (" + ms + " miliseconds).");
    await mysleep(ms);
}
