/* Budynki
main - ratusz
barracks - koszary
stable - stajnia
garage - warsztat
watchtower - wieza
snob - palac
smith - kuznia
place - plac
market - rynek
wood - tartak
stone - cegielnia
iron - huta
farm - zagroda
storage - spichlerz
hide - schowek
wall - mur
*/

//Deklaracja kolejki budowy, składnia: "<nazwa_budynku>_<poziom> ..."
const queue = "garage_5 market_12"

//https://stackoverflow.com/a/39914235
function mysleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (const e of queue.split(' ')) {
    console.log(e)
    while(!document.querySelector("#main_buildrow_" + e.split('_')[0] + " > td.build_options > span").innerHTML.match(/0:00:0[0-9]/g) && 
          !document.querySelector("#main_buildrow_" + e.split('_')[0] + " > td.build_options > span").innerHTML == '' ||
           document.getElementById("buildorder_4")) {
        console.log("Waiting 1 min for next check");
        await mysleep(60000);
    }
    console.log("Waiting 15 seconds for resources");
    await mysleep(15000);
    console.log("Building " + e.split('_')[0] + " to level " + e.split('_')[1]);
    document.getElementById("main_buildlink_" + e).click();
    console.log("Waiting 3 seconds to let page refresh");
    await mysleep(3000);
}
