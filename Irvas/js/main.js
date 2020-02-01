
    
    function call() {
      var msg   = $('form').serialize();
      var call = $('.modal-call');
       $.ajax({
         type: 'POST',
         url: 'formx.php', //обращаемся к обработчику
         data: msg,
        success: function(data) {  //в случае успеха выводим результаты в div "results"
            
         },
         error:  function(xhr, str){ //ошибка выводит соответствующее сообщение 
	    alert('Возникла ошибка: ' + xhr.responseCode);
         }
       });
   }



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

(function( $ ){

    $(function() {
    
      $('.form').each(function(){
        // Объявляем переменные (форма и кнопка отправки)
        var form = $(this),
            btn = form.find('button');
            
        // Добавляем каждому проверяемому полю, указание что поле пустое
        form.find('input').addClass('empty_field');
    
        // Функция проверки полей формы
        function checkInput(){
          form.find('input').each(function(){
            if($(this).val() != ''){
              // Если поле не пустое удаляем класс-указание
            $(this).removeClass('empty_field');
            } else {
              // Если поле пустое добавляем класс-указание
            $(this).addClass('empty_field');
            }
          });
        }
    
        // Функция подсветки незаполненных полей
        function lightEmpty(){
          form.find('.empty_field').css({'border-color':'#d8512d'});
          // Через полсекунды удаляем подсветку
          setTimeout(function(){
            form.find('.empty_field').removeAttr('style');
          },500);
        }
    
        // Проверка в режиме реального времени
        setInterval(function(){
          // Запускаем функцию проверки полей на заполненность
          checkInput();
          // Считаем к-во незаполненных полей
          var sizeEmpty = form.find('.empty_field').size();
          // Вешаем условие-тригер на кнопку отправки формы
          if(sizeEmpty > 0){
            if(btn.hasClass('disabled')){
              return false
            } else {
              btn.addClass('disabled')
            }
          } else {
            btn.removeClass('disabled')
          }
        },500);
    
        // Событие клика по кнопке отправить
        btn.click(function(){
          if($(this).hasClass('disabled')){
            // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
            lightEmpty();
            return false
          } else {
            // Все хорошо, все заполнено, отправляем форму
            form.submit();
          }
        });
      });
    });
    
    })( jQuery );
    

