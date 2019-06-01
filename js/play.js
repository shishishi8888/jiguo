// 酷玩模块加载页面通过ajax请求获得页面信息
$.ajax({
    url:'./json/play_show.json',
    success:function (data) {
       console.log(data);
        //dot.js 模板引擎
            var p_data=doT.template($("#play_json").text());
            $(".play_show").html(p_data(data));

    },
    error:function (err) {
          throw err;
    }
});

//酷玩模块点击加载更多
/*
var indexNum=0;
   var  allen;
$('.playMore').click(function (e) {
    e= e ||event;
    e.preventDefault();
    var param = '';//加载html变量
    $.post("json/loadmore.json",function (data) {
         allen = data.length;
         console.log(allen);
        var data1 = data[indexNum];
        console.log(typeof data1);
        var dlen = data1.length;
        for (var j =0;j<dlen;j++){
            var thisd = data1[j];
            var img = thisd["img"];
            var detail = thisd["detail"];
            var text = thisd["text"];
            var price = thisd["price"];
            var xinNum = thisd["xinNum"];
            var replayNum = thisd["replayNum"];
            param+='<li>';
            param+='<a href="#">';
            param+='<img src="'+img+'" alt="">';
            param+= '<p class="play_title">'+text+ '</p>';
            param+='<span class="play_detail">'+detail+'</span>';
            param+='<div class="price_box">';
            param+='<span class="play_price">'+price+'</span>';
            param+='<div class="play_icon">';
            param+= '<span class="icon_xin">'+xinNum+'</span>';
            param+='<span class="icon_replay">'+replayNum+'</span>';
            param+='</div></div></a></li>';
        }
        $('.play_show').append(param);
        indexNum++;
        if(indexNum>=allen){
            $(".play_more").removeClass("play_more").html('<span class="no_more">没有更多啦~</span>');
        }else{
            $(".play_more").html("点击加载更多");
        }
    },"json");
});
*/
$('.play_more').click(
    function(e){
        e = e||event;
        e.preventDefault();
        // console.log($('.play_show').children("li").length);
        if($('.play_show').children("li").length>24){
            $(this).removeClass("play_more").addClass("no_more").html("没有内容可加载了");
            return;
        }else{
        $.ajax({
            url:'./json/load_more.json',
            success:function(data) {
                var p_data = doT.template($("#play_json").text());
                $(".play_show").append(p_data(data));
            }
        });

    }});

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



