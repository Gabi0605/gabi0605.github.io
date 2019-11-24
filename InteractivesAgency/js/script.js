document.querySelectorAll('.modal-show').forEach(function(element) {
    element.onclick = showModal;
})

document.querySelectorAll('.modal-close').forEach(function(element) {
    element.onclick = closeModal;
})

// document.querySelector('.modal-wrap').onclick = (function (event) {
//     console.log(event.target.classList);
//     for (let i = 0; i < event.target.classList.length; i++) {
//         if (event.target.classList[i] == 'modal-wrap') {
//             closeModal();

//         } 
//     }
//     // element.onclick = closeModal;
//  });

 document.querySelectorAll('.modal-wrap').forEach(function (element) {
   element.onclick = closeModal;
 });

function stop() {
    event.stopPropagation();
 };

 document.querySelectorAll('.modal').forEach(function (element) {
    element.onclick = stop;
 });

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function(event) {
        if (event.keyCode == 27) closeModal();
    }
    
}

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function(element) {
        element.classList.add('hide');
    })
    document.onkeydown = null;
    document.querySelector('.form-slider').style.marginLeft = 0;
}

