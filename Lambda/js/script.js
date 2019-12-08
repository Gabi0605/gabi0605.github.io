
$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    $("#nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});
});

// ---------------------------------------------------


document.querySelectorAll('.modal-show').forEach(function(element) {
  element.onclick = showModal;
})

document.querySelectorAll('.modal-close').forEach(function(element) {
  element.onclick = closeModal;
})

document.querySelectorAll('.modal-wrap').forEach(function (element) {
 element.onclick = closeModal;
});

function stop() {
  event.stopPropagation();
};

document.querySelectorAll('.modal-my').forEach(function (element) {
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
  document.querySelector('.menu-content').style.marginLeft = 0;
}

document.querySelector('.button-right').onclick = function() {
  var menu =  document.querySelector('.menu-content');
  menu.classList.add('right');
  }

  var btn = document.querySelector('#btnRight');
  var absolute = document.querySelectorAll('.modal-item');
  var i = 0;
  
  btn.onclick = function() {
      absolute[i].classList.remove('showed');
      i++;
      if (i >= absolute.length) {
          i = 0;
      }
      absolute[i].classList.add('showed');
  }