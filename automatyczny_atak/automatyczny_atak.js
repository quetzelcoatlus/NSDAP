//var jqry = document.createElement('script');
//jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
//document.getElementsByTagName('head')[0].appendChild(jqry);
//jQuery.noConflict();

time = document.querySelector("#date_arrival > span");
button = document.getElementById("troop_confirm_go");

date = "dzisiaj o 15:01:28"   // wprowadź czas dojścia ataku, który pokrywa się z wartością w linii "Przybycie:" w ekranie potwierdzenia ataku
milis = 555                   // wprowadź milisekundę, w której ma wejść atak
delay = 20                    // parametr opóźnienia ataku - do indywidualnej konfiguracji 

$('.relative_time').on('DOMSubtreeModified', function(){
      if(time.innerText == date){
        m1 = Date.now();
        m2 = m1;
        send = milis+delay;
        while (m2 - m1 < send)
            m2 = Date.now();

        button.click();
    }
})
