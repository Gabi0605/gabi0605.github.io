var sendMessage = document.querySelector(".sendMessage");
var blockThank = document.querySelector('.thank');
var blockSorry = document.querySelector('.sorry');
var input = document.querySelectorAll('.input');

sendMessage.onclick = function() {
    if (input[0].value==''||input[1].value==''||input[2].value=='') {
    blockSorry.classList.remove('delete');
    setTimeout(function() {hideSorry(blockThank, timeremove = 1000)}, 3000)
    } else {
    blockThank.classList.remove('delete');
    setTimeout(function() {hideThank(blockThank, timeremove = 1000)}, 3000)
    }
    for(var i=0; i<input.length; i++) {
        input[i].value='';
    }
}
function hideThank(blockThank, timeremove = 1000) {
    blockThank.classList.add('hide');
    setTimeout(function() {deleteThank(blockThank)}, timeremove);
}
function deleteThank(blockThank) {
    blockThank.classList.add('delete');
    blockThank.classList.remove('hide');
}
function hideSorry(blockThank, timeremove = 1000) {
    blockSorry.classList.add('hide');
    setTimeout(function() {deleteSorry(blockSorry)}, timeremove);
}
function deleteSorry(blockThank) {
    blockSorry.classList.add('delete');
    blockSorry.classList.remove('hide');
}