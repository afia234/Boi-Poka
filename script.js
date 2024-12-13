const audio = document.getElementById('audio-player');

function playAudio()
{
    audio.play();
}

function pauseAudio() {
    audio.pause();
}



function muteAudio() {
    audio.muted = true;
}

function unmuteAudio() {
    audio.muted = false;
}




const video = document.getElementById('video-player');

// Play the video
function playVideo() {
    video.play();
}

// Pause the video
function pauseVideo() {
    video.pause();
}

// Mute the video
function muteVideo() {
    video.muted = true;
}

// Unmute the video
function unmuteVideo() {
    video.muted = false;
}

// Restart the video from the beginning
function restartVideo() {
    video.currentTime = 0;
    video.play();
}



