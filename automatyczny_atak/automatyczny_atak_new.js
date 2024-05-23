// automatyczny_atak.js reworked with ChatGPT to use MutationObserver instead of deprecated DOMSubtreeModified

// Input parameters
date = "dzisiaj o 02:30:37";    // wprowadź czas dojścia ataku, który pokrywa się z wartością w linii "Przybycie:" w ekranie potwierdzenia ataku
milis = 555;                    // wprowadź milisekundę, w której ma wejść atak
delay = 20;                     // parametr opóźnienia ataku - do indywidualnej konfiguracji 

// Selectors
time = document.querySelector("#date_arrival > span");
button = document.getElementById("troop_confirm_submit");

// Callback function to execute when mutations are observed
function callback(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
            if (time.innerText == date) {
                let m1 = Date.now();
                let m2 = m1;
                let send = milis + delay;
                while (m2 - m1 < send) {
                    m2 = Date.now();
                }
                button.click();
                observer.disconnect(); // Stop observing once the button is clicked
                break;
            }
        }
    }
}

// MutationObserver configuration
const config = { childList: true, characterData: true, subtree: true };

// Create an instance of MutationObserver with the callback
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(time, config);
