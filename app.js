let progress = document.getElementById("progress");
let surah = document.getElementById("surah");
let ctrlIcon = document.getElementById("ctrlIcon");

surah.onloadedmetadata = function () {
    progress.max = surah.duration;
    progress.value = surah.currentTime;
};

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        surah.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        surah.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


surah.addEventListener("timeupdate", () => {
    progress.value = surah.currentTime;
});

progress.onchange = function () {
    surah.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};

