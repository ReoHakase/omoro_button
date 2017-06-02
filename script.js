var omoroAudio = new Audio();
        omoroAudio.src = "omoro_kansei.mp3";
        omoroAudio.volume = 0.5;
var boxElement =  document.getElementById("box");
var buttonElement = document.getElementById("button");
var countElement = document.getElementById("buttonCount");
var count = 0;

boxElement.addEventListener('touchend', event => { /*iOS10のSafariで複数指で拡大できてしまうのを防ぐ*/
    event.preventDefault();
}, false);

function process(){
    count++;
    countElement.textContent = count.toString();
    omoroAudio.currentTime = 0;
    omoroAudio.play();
    console.log("ボタンがクリックされた! カウント:" + count.toString() + "回");
}

buttonElement.onclick = function() {
    process();
}

buttonElement.ontouchstart = function() {
    process();
}
