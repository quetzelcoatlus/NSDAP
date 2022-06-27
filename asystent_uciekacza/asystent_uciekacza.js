const time = "23:43:10"

function mysleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$('#serverTime').on('DOMSubtreeModified', function(){
    if(document.querySelector("#serverTime").innerHTML == time){
        while(!document.querySelector("#troop_confirm_submit")){
            document.querySelector("#target_attack").click()
            await mysleep(25)
        }
        document.querySelector("#troop_confirm_submit").click()    
    }
})
