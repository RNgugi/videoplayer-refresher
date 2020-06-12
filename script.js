const video = document.getElementById('video');
const play = document.getElementById('play');
const skip = document.getElementById('skip');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play and pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

//update progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  //Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  //Get duration minutes
  let dur = Math.floor(video.duration / 60);
  if (dur < 10) {
    dur = '0' + String(mins);
  }

  //Get duration seconds
  let dursec = Math.floor(video.duration % 60);
  if (dursec < 10) {
    dursec = '0' + String(mins);
  }

  timestamp.innerHTML = `${mins}:${secs}/${dur}:${dursec}`;
}

//set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//skip video
function videoSkip() {
    video.currentTime = progress.value + 10;
    video.play();
  }

//event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

skip.addEventListener('click', videoSkip);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
