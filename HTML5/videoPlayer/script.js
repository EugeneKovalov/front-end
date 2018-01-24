const btnBackward = document.querySelector('.btn-backward');
const btnExpand = document.querySelector('.btn-expand');
const btnMute = document.querySelector('.btn-mute');
const btnMuteIcon = btnMute.querySelector('.fa');
const btnPlay = document.querySelector('.btn-play');
const btnPlayIcon = btnPlay.querySelector('.fa');
const btnForward = document.querySelector('.btn-forward');
const btnReset = document.querySelector('.btn-reset');
const btnStop = document.querySelector('.btn-stop');
const progressBar = document.querySelector('.progress-bar');
const progressBarFill = document.querySelector('.progress-bar-fill');
const videoElement = document.querySelector('.video-element');

const expandVideo = () => {
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
    }
}

const moveBackward = () => {
    videoElement.currentTime -= 2;
}
const moveForward = () => {
    videoElement.currentTime += 2;
}

const mute = () => {
    if (videoElement.muted) {
        videoElement.muted = false;

        btnMuteIcon.classList.remove('fa-volume-up');
        btnMuteIcon.classList.add('fa-volume-off');
    } else {
        videoElement.muted = true;

        btnMuteIcon.classList.remove('fa-volume-off');
        btnMuteIcon.classList.add('fa-volume-up');
    }
}

const playPauseVideo = () => {
    if (videoElement.paused) {
        videoElement.play();

        btnPlayIcon.classList.remove('fa-play');
        btnPlayIcon.classList.add('fa-pause');
    } else {
        videoElement.pause();

        btnPlayIcon.classList.remove('fa-pause');
        btnPlayIcon.classList.add('fa-play');
    }
}

const restartVideo = () => {
    videoElement.currentTime = 0;

    btnPlay.removeAttribute('hidden');
    btnReset.setAttribute('hidden', 'true');
}

const stopVideo = () => {
    videoElement.pause();
    videoElement.currentTime = 0;
    btnPlayIcon.classList.remove('fa-pause');
    btnPlayIcon.classList.add('fa-play');
}

const updateProgress = () => {
    let value = (100 / videoElement.duration) * videoElement.currentTime;

    progressBarFill.style.width = value + '%';
}

let videos = [
    {
  name: '766601639'
},
    {
  name: '775691538'
},
    {
  name: '796814664'
}]

const library = () => {
    let ul = document.createElement('ul');
    ul.className = 'list-group';

    videos.forEach(function (elem, i) {
        let li = document.createElement('li');
        li.id = '' + i;
        li.className = 'list-group-item';
        li.innerText = elem.name;

        ul.appendChild(li);
        document.getElementById('library').appendChild(ul);
    })
};

library();

btnBackward.addEventListener('click', moveBackward, false);
btnExpand.addEventListener('click', expandVideo, false);
btnMute.addEventListener('click', mute, false);
btnPlay.addEventListener('click', playPauseVideo, false);
btnForward.addEventListener('click', moveForward, false);
btnReset.addEventListener('click', restartVideo, false);
btnStop.addEventListener('click', stopVideo, false);
videoElement.addEventListener('ended', () => {
    btnPlay.setAttribute('hidden', 'true');
    btnReset.removeAttribute('hidden');
}, false);
videoElement.addEventListener('timeupdate', updateProgress, false);