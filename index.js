StartVideo = document.getElementById("StartVid");
document.getElementById("play").onclick = function(){
    document.getElementById("play").style.display = "none"
    StartVideo.style.display = "flex"
    StartVideo.play();
    StartVideo.onended = function(){
        window.open('game.html')
    }
}