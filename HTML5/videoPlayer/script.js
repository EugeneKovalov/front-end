(function () {
    const btnBackward = document.querySelector('.btn-backward');
    const btnFullscreen = document.querySelector('.btn-expand');
    const btnMute = document.querySelector('.btn-mute');
    const btnMuteIcon = btnMute.querySelector('.fa');
    const btnPlay = document.querySelector('.btn-play');
    const btnPlayIcon = btnPlay.querySelector('.fa');
    const btnForward = document.querySelector('.btn-forward');
    const btnReset = document.querySelector('.btn-reset');
    const btnStop = document.querySelector('.btn-stop');
    const progressBarFill = document.querySelector('.progress-bar-fill');
    const videoElement = document.querySelector('.video-element');
    let videos = [{ name: '766601639.mp4' }, { name: '775691538.mp4' }, { name: '796814664.mp4' }];

    const fullscreen = () => {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.webkitRequestFullscreen) {
            videoElement.webkitRequestFullscreen();
        }
    }
    const moveBackward = () => {
        videoElement.currentTime -= 3;

    }
    const moveForward = () => {
        videoElement.currentTime += 3;
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
    const restartVideo = () => {
        videoElement.currentTime = 0;
        btnPlay.removeAttribute('hidden');
        btnPlayIcon.classList.remove('fa-pause');
        btnPlayIcon.classList.add('fa-play');
        btnReset.setAttribute('hidden', 'true');
    }
    const stopVideo = () => {
        videoElement.pause();
        videoElement.currentTime = 0;
        btnPlayIcon.classList.remove('fa-pause');
        btnPlayIcon.classList.add('fa-play');
    }
    const updateProgress = () => {
        progressBarFill.style.width = (100 / videoElement.duration) * videoElement.currentTime + '%';
    }
    const toLibrary = () => {
        videos.forEach(function (elem) {
            let ul = document.getElementById('library-collection');
            let li = document.createElement('li');
            li.className = 'list-group-item list-group-item-action unselectable';
            li.innerText = elem.name;
            li.addEventListener('click', toPlaylist);
            ul.appendChild(li);
        });
    };
    const toPlaylist = (e) => {
        let ul = document.getElementById('playlist-collection');
        let li = document.createElement('li');
        let btnRemove = document.createElement('span');
        btnRemove.className = 'fa fa-trash-o';
        btnRemove.style.paddingLeft = '20%';
        btnRemove.addEventListener('click', remove);
        li.className = 'list-group-item list-group-item-action unselectable';
        li.id = randId();
        li.innerText = e.target.innerText;

        li.appendChild(btnRemove);
        li.addEventListener('dblclick', play);
        ul.appendChild(li);
    };
    const remove = (e) => {
        document.getElementById(e.target.offsetParent.id).remove();
    }
    const play = (e) => {
        videoElement.src = 'media/' + e.target.innerText;
        playPauseVideo();
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
    const playListPlay = (playlist) => {
        let i = 1;
        if (i < playlist.length) {
            videoElement.src = 'media/' + playlist[i - 1].innerText;
            playPauseVideo();

            videoElement.addEventListener('ended', () => {
                if (i < playlist.length) {
                    videoElement.src = 'media/' + playlist[i].innerText;
                    playPauseVideo();
                    i++;
                }
            });
        }
    }
    const playListPlayRandom = (playlist) => {
        let i = 1;

        function shuffle(playlist) {
            let i = playlist.length, temp, index;
            while (i > 0) {
                index = Math.floor(Math.random() * i);
                i--;
                temp = playlist[i];
                playlist[i] = playlist[index];
                playlist[index] = temp;
            }
            return playlist;
        }
        playlist = shuffle(playlist);

        if (i < playlist.length) {
            videoElement.src = 'media/' + playlist[i - 1].innerText;
            playPauseVideo();

            videoElement.addEventListener('ended', () => {
                if (i < playlist.length) {
                    videoElement.src = 'media/' + playlist[i].innerText;
                    playPauseVideo();
                    i++;
                }
            });
        }
    }
    function randId() {
        return Math.random().toString(36).substr(2, 10);
    }
    function getPlaylist() {
        let playlist = document.getElementById('playlist-collection');
        if (playlist.hasChildNodes()) {
            return Array.from(playlist.childNodes);
        }
    }
    toLibrary();

    btnBackward.addEventListener('click', moveBackward);
    btnFullscreen.addEventListener('click', fullscreen);
    btnMute.addEventListener('click', mute);
    btnPlay.addEventListener('click', playPauseVideo);
    btnForward.addEventListener('click', moveForward);
    btnReset.addEventListener('click', restartVideo);
    btnStop.addEventListener('click', stopVideo);
    videoElement.addEventListener('ended', () => {
        btnPlay.setAttribute('hidden', 'true');
        btnReset.removeAttribute('hidden');
    });
    videoElement.addEventListener('timeupdate', updateProgress);
    document.getElementById('playlist-play-order').addEventListener('click', function () {
        playListPlay(getPlaylist());
    });
    document.getElementById('playlist-play-random').addEventListener('click', function () {
        playListPlayRandom(getPlaylist());
    });
})();