//https://media.innogamescdn.com/com_DS_PL/skrypty/Asystent_Zbieracza.js
javascript:var settings={max_ressources:"99999",archers:"0",skip_level_1:"1"};var settings_spear={untouchable:"0",max_unit_number:"9999",conditional_safeguard:"0"},settings_sword={untouchable:"0",max_unit_number:"9999",conditional_safeguard:"0"},settings_axe={untouchable:"0",max_unit_number:"9999",conditional_safeguard:"0"},settings_archer={untouchable:"0",max_unit_number:"9999",conditional_safeguard:"0"},settings_light={untouchable:"0",max_unit_number:"9999",conditional_safeguard:"0"},settings_marcher={untouchable:"0",max_unit_number:"9999",conditional_safeguard:"0"},settings_heavy={untouchable:"0",max_unit_number:"9999",conditional_safeguard:"0"};function fill(c,b){let a=$(`[name=${c}]`);b=Number(b),a.trigger("focus"),a.trigger("keydown"),a.val(b),a.trigger("keyup"),a.trigger("change"),a.blur()}var units_settings={0:settings_spear,1:settings_sword,2:settings_axe,3:settings_archer,4:settings_light,5:settings_marcher,6:settings_heavy},units={0:"spear",1:"sword",2:"axe",3:"archer",4:"light",5:"marcher",6:"heavy"};function main(){var l=[25,15,10,10,80,50,50],d=[0,0,0,0,0,0,0],i=document;if(-1==(url=i.URL).indexOf("screen=place")|| -1==url.indexOf("mode=scavenge"))alert("Skrypt do u\u0139\u017Aycia w placu w zak\u0139\uFFFDadce zbieractwo");else{var m=i.getElementsByClassName("btn btn-default free_send_button btn-disabled"),e=i.getElementsByClassName("btn btn-default free_send_button"),c=e.length-m.length;if(0==c)alert("Brak dost\xc4\uFFFDpnych poziom\u0102\u0142w zbieractwa");else if(e.length>1&&1==c&&1==settings.skip_level_1)alert("Ustawiono pomini\xc4\uFFFDcie 1 poziomu zbieractwa");else{let k;for(var a=0;a<7;a++)if(0==settings.archers&&(3==a||5==a)&&a++,units_settings[a].max_unit_number>0){let n=$(`[name=${k=units[a]}]`),b=Number(n[0].parentNode.children[1].innerText.match(/\d+/)[0]);if(b>units_settings[a].untouchable?b-=units_settings[a].untouchable:b=0,b>=units_settings[a].conditional_safeguard&&(b-=units_settings[a].conditional_safeguard),1==e.length)b>units_settings[a].max_unit_number&&(b=units_settings[a].max_unit_number),d[a]=b;else{let f=0;0==settings.skip_level_1&&(f+=15),e.length>=2&&(f+=6),e.length>=3&&(f+=3),4==e.length&&(f+=2);let g=0,h;c>=1&&0==settings.skip_level_1&&(h=15,g+=15),c>=2&&(h=6,g+=6),c>=3&&(h=3,g+=3),4==c&&(h=2,g+=2),b*f/g>units_settings[a].max_unit_number?d[a]=units_settings[a].max_unit_number*h/f:d[a]=b*h/g}}let j=0;for(var a=0;a<7;a++)0==settings.archers&&(3==a||5==a)&&a++,j+=l[a]*d[a];if(1==c?settings.max_ressources*=10:2==c?settings.max_ressources*=4:3==c?settings.max_ressources*=2:settings.max_ressources*=1.3333,j>settings.max_ressources){let o=settings.max_ressources/j;for(var a=0;a<7;a++)0==settings.archers&&(3==a||5==a)&&a++,d[a]=d[a]*o}for(var a=0;a<7;a++)0==settings.archers&&(3==a||5==a)&&a++,fill(k=units[a],Math.floor(d[a]))}}}async function mysleep(a){return new Promise(b=>setTimeout(b,a))}

settings.archers = "0"
settings.skip_level_1 = "0"
settings_spear.untouchable = "500"
settings_sword.untouchable = "500"
settings_light.max_unit_number = "0"

for(var a=0; a<20; a++){
    var unfree = document.getElementsByClassName('btn btn-default free_send_button btn-disabled');
    var unlocked = document.getElementsByClassName('btn btn-default free_send_button');
    var free = unlocked.length - unfree.length;
	
    for (var i=free; i>settings.skip_level_1; i--) {
        main()
        await mysleep(100);
        document.querySelector("#scavenge_screen > div > div.options-container > div:nth-child(" + i + ") > div.status-specific > div > div.action-container > a.btn.btn-default.free_send_button").click()
        await mysleep(500);
    }
    
    let first_level = Number(settings.skip_level_1) + 1;
    var time_left = document.querySelector("#scavenge_screen > div > div.options-container > div:nth-child(" + first_level + " ) > div.status-specific > div > ul > li:nth-child(4) > span.return-countdown").innerHTML
    let ms = Number(time_left.split(':')[0]) * 60 * 60 * 1000 + Number(time_left.split(':')[1]) * 60 * 1000 +  Number(time_left.split(':')[2]) * 1000 + 10000;
    console.log("Waiting " + time_left + " (" + ms + " miliseconds).")
    await mysleep(ms)
}
