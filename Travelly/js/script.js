var subscribe = document.querySelector("#subscribe");
var blockThank = document.querySelector('.thank');
var blockSorry = document.querySelector('.sorry');
var input = document.querySelector('#input');

subscribe.onclick = function() {
    if (input.value=='') {
    blockSorry.classList.remove('delete');
    setTimeout(function() {hideSorry(blockThank, timeremove = 1000)}, 1500)
    } else {
    blockThank.classList.remove('delete');
    setTimeout(function() {hideThank(blockThank, timeremove = 1000)}, 1500)
    }
    input.value='';
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