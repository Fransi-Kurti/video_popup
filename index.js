const btnEl = document.getElementById("btn");

const videoEl = document.querySelector(".video-popup-container");

const closeIconEl = document.getElementById("close_icon");

const video = document.getElementById("video");

btnEl.addEventListener("click", ()=>{
    videoEl.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=>{
    videoEl.classList.add("active");
    video.pause();
    video.currentTime = 0;
});