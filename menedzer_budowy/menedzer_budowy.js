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
queue = "garage_5 market_12"

function mysleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (const e of queue.split(' ')) {
    console.log(e)
    while(!document.querySelector("#main_buildrow_" + e.split('_')[0] + " > td.build_options > span").innerHTML.match(/0:00:02/g) && 
          !document.querySelector("#main_buildrow_" + e.split('_')[0] + " > td.build_options > span").innerHTML == '') {
        console.log("Waiting 1 min for next check");
        await mysleep(60000);
    }
    console.log("Waiting 3 seconds for resources");
    await mysleep(3000);
    console.log("click");
    document.getElementById("main_buildlink_" + e).click();
    console.log("Waiting 3 seconds to let page refresh");
    await mysleep(3000);
}
