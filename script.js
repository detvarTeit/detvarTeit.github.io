GHBVideo = document.getElementById("GHBVid");
document.getElementById("GHBIkon").onclick = function(){
    document.getElementById("playArea").style.display = "none"
    document.getElementById("GHBVid").style.display = "flex"

    GHBVideo.play()
    GHBVideo.onended = function(){
        document.getElementById("playArea").style.display = "flex"
        document.getElementById("GHBVid").style.display = "none"
    }
}
