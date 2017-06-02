var omoroAudio = new Audio();
        omoroAudio.src = "omoro_kansei.mp3";
        omoroAudio.volume = 0.5;
var boxElement =  document.getElementById("box");
var buttonElement = document.getElementById("button");
var countElement = document.getElementById("buttonCount");
var count = 0;

function process(){
    if( typeof( omoroAudio.currentTime ) != 'undefined' ){
        omoroAudio.currentTime = 0;
    }
    omoroAudio.play();
    count++;
    countElement.textContent = count.toString();
}

buttonElement.onclick = function() {
    process();
}

buttonElement.ontouchend = function() {
    process();
}

boxElement.addEventListener('touchend', event => { /*iOS10のSafariで複数指で拡大できてしまうのを防ぐ*/
    event.preventDefault();
}, false);
