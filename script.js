const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration * 100);
}

function updateIcon() {
    if (video.paused) {
        play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
    } else {
        play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
    }
}

play.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);
video.addEventListener('click', playPause);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
video.addEventListener('timeupdate', updateProgress);
