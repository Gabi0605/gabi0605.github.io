

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#scroller').fadeIn();
    } else {
        $('#scroller').fadeOut();
    }
});
$('#scroller').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});


 $(document).ready(function(){
    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

(function(){
    var boxes=[],els,i,l;
    if(document.querySelectorAll){
    els=document.querySelectorAll('a[rel=simplebox]');	
    Box.getStyles('simplebox_css','simplebox.css');
    Box.getScripts('simplebox_js','simplebox.js',function(){
    simplebox.init();
    for(i=0,l=els.length;i<l;++i)
    simplebox.start(els[i]);
    simplebox.start('a[rel=simplebox_group]');			
    });
    }
    })();