const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change",() => {
    // change theme of the website
    document.body.classList.toggle("dark");
    document.section.classList.toggle("dark");

});

var playButton = document.querySelector(".video-play-icon");
var videoContent = document.querySelector(".video__content");
var closeVideo = document.querySelector ("#close__video");

playButton.addEventListener("click",function () {
    videoContent.style.display = "flex"
})
closeVideo.addEventListener("click",function () {
    videoContent.style.display = "none"
})
