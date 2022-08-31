var menuAlpha = document.getElementById("mj-ay-menu-opacity")
var menuBox = document.getElementById("mj-ay-menu-bg")
var toggle = document.getElementById("mj-ay-menu-toggeler")
var Closebtn = document.getElementById("Closebtn")

toggle.onclick = function () {
    menuAlpha.classList.toggle('mj-ay-active')
    menuBox.classList.toggle('mj-ay-active2')
}
Closebtn.onclick = function () {
    menuAlpha.classList.remove('mj-ay-active')
    menuBox.classList.remove('mj-ay-active2')
}

// outside click 
document.onclick = function (e) {
    if (e.target.id == "mj-ay-menu-opacity") {
        menuAlpha.classList.remove('mj-ay-active')
        menuBox.classList.remove('mj-ay-active2')
    }
}
// finished menu







var TopMenuScroolingStyle = document.getElementById("mj-ay-TopMenu");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50)
    {
        TopMenuScroolingStyle.classList.add("mj-ay-menu-scrool-bg");
    }
    else
    {
        TopMenuScroolingStyle.classList.remove("mj-ay-menu-scrool-bg");
    }
};




var video = document.getElementById('mj-ay-pop-up-video');
var videoBox = document.getElementById('mj-ay-video-modal');
var VideoBtn = document.getElementById('mj-ay-video-play');
var VideoCloseBtn = document.getElementById("mj-ay-closebtn-video");

VideoBtn.addEventListener('click', OpenBox);
function OpenBox() {
    videoBox.style.opacity = "1";
    videoBox.style.visibility = "visible";
}
VideoCloseBtn.addEventListener('click' , closeBox);
function closeBox ()
{
    videoBox.style.opacity = "0";
    videoBox.style.visibility = "hidden";
}

video.onended = function() {
    videoBox.style.opacity = "0";
    videoBox.style.visibility = "hidden";
};

// finished video pop up

