const queue = "100 spear"

/*  pikinier = spear
    miecznik = sword
    topornik = axe
    lucznik  = archer
    zwiad    = spy
    lk       = light
    luk kon  = marcher
    ck       = heavy
    taran    = ram
    kata     = catapult
*/

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

//https://stackoverflow.com/a/39914235
async function mysleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var button = undefined;
for (var i=1;i<13;i++){
    if(document.querySelector("#train_form > table > tbody > tr:nth-child(" + i + ") > td:nth-child(2) > input")){
        button = document.querySelector("#train_form > table > tbody > tr:nth-child(" + i + ") > td:nth-child(2) > input");
        break;
    }
}

var number = queue.split(' ')[0];
var unit = queue.split(' ')[1];

for (var i=1; i<=Number(number); i++){
    fill(unit,1);
    button.click();
    var time = document.querySelector("#" + unit + "_0_cost_time").innerHTML;
    let ms = Number(time.split(':')[1]) * 60 * 1000 + Number(time.split(':')[2]) * 1000 - 5000;
    console.log(i + "/" + number + " - waiting " + ms + " miliseconds.");
    await mysleep(ms);
}    
