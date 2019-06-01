//*******************返回顶部*********************** */
$(window).scroll(function () {
    var scroTop = document.documentElement.scrollTop;
    if (scroTop > 100) {
        $('.backTop').show();
    } else {
        $('.backTop').hide();
    }
})
$('.backTop').on('click', function (e) {
    e = e || event;
    e.preventDefault();
    $('html,body').stop(true, true).animate({
        'scrollTop': '0'
    }, 2000);
});