var sendMessage = document.querySelector(".sendMessage");
var blockThank = document.querySelector('.thank')

sendMessage.onclick = function() {
    blockThank.classList.remove('hide');
    setTimeout(hideThank, 1000);
}

function hideThank() {
    blockThank.classList.add('hideBlock');
}