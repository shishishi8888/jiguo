//最上面的文本
$('.transition').animate({
    'top': '90px',
    'right': '17%'
}, 500)

$.ajax({
    url: "./JSON/index.json",
    type: 'get',
    dataType: 'json',
    success: function (data) {
        // console.log(data);
        //dot.js模板引擎
        //传模板
        var lunbo = doT.template($("#lunbo").text());
        var first = doT.template($("#first").text());
        var two = doT.template($("#two").text());
        var last = doT.template($("#last").text());
        //把数据放入对应区域
        $("#list").html(lunbo(data));
        $("#two_list").html(first(data));
        $("#three_list").html(two(data));
        $("#last_list").html(last(data));

    }
});
//轮播图******************************************************

//4个li的总宽度
var ul_w = $('.hot ul').innerWidth();
console.log(ul_w);
var stopp = true;
//
$('.hot').on('mouseenter', function () {
    stopp = false;
})
$('.hot').on('mouseleave', function () {
    stopp = true;
})
//点击左边按钮
$('.prev').on('click', function () {
    run_l();
    console.log($('.hot ul li').slice(8));
})
//点击右边按钮
$('.next').on('click', function () {
    run_r();
    console.log($('.hot ul li').slice(0, 4));
})
//向左滚动
function run_r() {
    if(!stopp){
        return
    }else if(stopp){
        stopp=false;
        $('.hot ul').stop(true, true).animate({
            'marginLeft': -ul_w
        }, 2000, function () {
            $('.hot ul').css('marginLeft', '0px');
            $('.hot ul li').slice(0, 4).appendTo($('.hot ul'));
            stopp = true;
        })
    }
}
//向有滚动
function run_l() {
    if(!stopp){
        return
    }else if(stopp){
        stopp = false;
        $('.hot ul').css('marginLeft', -ul_w);
        $('.hot ul li').slice(-4).prependTo($('.hot ul'));
        $('.hot ul').stop(true, true).animate({
            'marginLeft': '0px'
        }, 2000, function () {
            stopp = true;
        })
    }
}
setInterval(run_r, 2000);

// *********************加载更多*****************************
$('#more').on('click', function (e) {
    e = e || event;
    e.preventDefault();
    if($('#more_list').children('li').length>16){
        $("#more").css({
            "background": "url('')",
            "color": "#a3a3a3"
        })
        $("#more").html('没有内容可加载了');
        return;
    };
    $.ajax({
        url: './json/index.json',
        type: 'get',
        success: function (data) {
            var more = doT.template($('.morelist').text());

            $('#more_list').append(more(data));
        }
    })
})

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