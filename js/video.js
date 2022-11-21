// Add js here.
var video = document.getElementByClassName("video");
var videoControls = document.getElementByClassName("options");

video.autoplay = false;
video.loop = false;
video.load();


var playButton = document.getElementById('play');
function playVid() {
    video.play();
}
playButton.addEventListener("click", playVid);

var pauseButton = document.getElementById('pause');
function pauseVid() {
    video.pause();
}
pauseButton.addEventListener("click", pauseVid);


var slower = document.getElementById('slower');
video.defaultPlaybackRate = 1.0
function slowPlaySpeed() {
    video.playbackRate /= 2;
    if (video.playbackRate = 1){
        alert("Video is at slowest speed!");
    }
}
slower.addEventListener("click", slowPlaySpeed);

var faster = document.getElementById('faster');
video.defaultPlaybackRate = 1.0
function fastPlaySpeed() {
    video.playbackRate *= 2;
    if (video.playbackRate = 2){
        alert("Video is at fastest speed!");
    }
}
faster.addEventListener("click", fastPlaySpeed);

var skip = document.getElementById('skip');
function skipahead() {
    // var video = document.getElementById("video");
    video.currentTime += 15;
    if (video.currentTime > 67){
        video.currentTime = 0;
    }
}
skip.addEventListener("click", skipahead);

var mute = document.getElementById('mute');
function muteandunmute(){
    if (mute == 'mute'){
        video.muted = true;
        document.body.innerHTML = document.body.innerHTML.replace(mute.innerHTML, 'Unmute');
    }
    else{
        video.muted = false;
        document.body.innerHTML = document.body.innerHTML.replace(mute.innerHTML, 'Mute');
    }
}
mute.addEventListener("click", muteandunmute);

let volume = document.getElementById('slider');
volume.addEventListener("change", function(e) {
    video.volume = e.currentTarget.value / 100;
})
