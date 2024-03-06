GHBVideo = document.getElementById("GHBVid");
document.getElementById("test").onclick = function(){
    document.getElementById("playArea").style.width = "0%" 
    document.getElementById("GHBVid").style.width = "30%" 
    GHBVideo.play()
}