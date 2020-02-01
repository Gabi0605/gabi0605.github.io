
document.querySelectorAll('.btn-collapse').forEach(function(element) {
    element.onclick = showCollapse;
})

function showCollapse() {
    let collapseId = this.dataset.show;
    let content = document.querySelectorAll('.collapse-content');
    for (var i = 0; i < content.length; i++) {
        if (content[i].classList.contains('collapse-active')) {
            content[i].classList.remove('collapse-active');
        }
    }
    let btn = document.querySelectorAll('.btn-collapse');
    for (var i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains('btn-collapse-active')) {
            btn[i].classList.remove('btn-collapse-active');
        }
    }

    document.querySelector(collapseId).classList.add('collapse-active');
    this.classList.add('btn-collapse-active');
}

document.querySelectorAll('.finish-btn-collapse').forEach(function(element) {
    element.onclick = showFinish;
})

function showFinish() {
    let finishId = this.dataset.finish;
    let content = document.querySelectorAll('.finish-collapse-content');
    for (var i = 0; i < content.length; i++) {
        if (content[i].classList.contains('finish-collapse-content-active')) {
            content[i].classList.remove('finish-collapse-content-active');
        }
    }
    let btn = document.querySelectorAll('.finish-btn-collapse');
    for (var i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains('finish-btn-collapse-active')) {
            btn[i].classList.remove('finish-btn-collapse-active');
        }
    }

    document.querySelector(finishId).classList.add('finish-collapse-content-active');
    this.classList.add('finish-btn-collapse-active');
}

document.querySelectorAll('.btn-modal').forEach(function(element) {
    element.onclick = showModal;
})

function showModal() {
    let modal = document.querySelector('.modal');
    let form = document.querySelector('.form-modal');
    modal.classList.remove('hide');
    document.addEventListener('keydown', function (e) {
        if(e.keyCode === 27) {
                modal.close();
        };
    });
    modal.onclick = function() {
        modal.close();
    }
    
    modal.close = function() {
        modal.classList.add('hide');
    }
    form.onclick = function() {
        event.stopPropagation()
    }
}

