// 导购模块加载页面通过ajax请求获得页面信息
$.ajax({
    url:'./json/guid_show.json',
    success:function (data) {
        console.log(data);
        //dot.js 模板引擎
        var p_data=doT.template($("#guid_json").text());
        $(".guid_show").html(p_data(data));

    },
    error:function (err) {
        throw err;
    }
});
//导购部分点击加载更多
$('.guid_more').click(
    function(e){
        e = e||event;
        e.preventDefault();
        // console.log($('.guid_show').children("li").length);
        if($('.guid_show').children("li").length>16){
            $(this).removeClass("guid_more").addClass("no_more").html("没有内容可加载了");
            return;
        }else{
            $.ajax({
                url:'./json/load_more.json',
                success:function(data) {
                    var p_data = doT.template($("#guid_json").text());
                    $(".guid_show").append(p_data(data));
                }
            });

        }});
//导购详情分享部分js
$(".share,.bshare-custom").hover(function () {
    $(".bshare-custom").show();
},function () {
    $(".bshare-custom").hide();
});


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

