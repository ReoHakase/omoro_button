var omoroAudio = new Audio();
        omoroAudio.src = "./omoro_kansei.mp3";
        omoroAudio.volume = 0.5;
var buttonElement = document.getElementById("button");
var countElement = document.getElementById("buttonCount");
var count = 0;

buttonElement.onclick = function() {
    count++;
    countElement.textContent = count.toString();
    omoroAudio.currentTime = 0;
    omoroAudio.play();
    console.log("ボタンがクリックされた! カウント:" + count.toString() + "回");
}
