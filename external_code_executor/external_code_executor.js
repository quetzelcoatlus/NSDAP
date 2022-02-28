// https://stackoverflow.com/a/31374433

var loadJS = function(url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};
var yourCodeToBeCalled = function(){
    //your code goes here
}

loadJS('https://shinko-to-kuma.com/scripts/timer.js', yourCodeToBeCalled, document.body); //milisekundy
