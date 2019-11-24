var goTopBtn = document.querySelector('.scrollToTop');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('toShow');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('toShow');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  $(document).ready(function(){
    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});



// ------------------------------



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