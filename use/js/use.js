// tab切换&&&&&&*&************************
$('.tab_top li').on('click',function(){
    var index =$(this).index();
    $(this).addClass('onn');
    $(this).siblings().removeClass('onn');
    console.log($('.tab>div')); 
    $('.tab>div').eq(index).show();
    $('.tab>div').eq(index).siblings('div').hide();
})

// 全部的*******************************
$.ajax({
    url:'./json/use-json.json',
    type:'get',
    success:function(data){
        console.log(data);
        var all = doT.template($("#useall").text());
        
        $("#use_all").html(all(data));
    }
})
$('#more').on('click',function(e){
    e = e || event;
    e.preventDefault();
    if($(".use_more").children('li').length>24){
        $("#more").css({
            "background":"url('')",
            "color":"#a3a3a3"
        })
        $("#more").html('没有内容可加载了');
        return;
    }
    $.ajax({
        url:'./json/use-json.json',
        type:'get',
        success:function(data){
            var more = doT.template($('.usemore').text());
        
            $('.use_more').append(more(data));
        }
    })
})

// 申请的************************************
$.ajax({
    url:'./json/use-json.json',
    type:'get',
    success:function(data){
        console.log(data);
        var apply = doT.template($("#useapply").text());
        
        $("#use_apply").html(apply(data));
    }
})

// 试用的*******************************
$.ajax({
    url:'./json/use-json.json',
    type:'get',
    success:function(data){
        console.log(data);
        var tr = doT.template($("#usetry").text());
        
        $("#use_try").html(tr(data));
    }
})

// 结束的*******************************************
$.ajax({
    url:'./json/use-json.json',
    type:'get',
    success:function(data){
        console.log(data);
        var endd = doT.template($("#useend").text());
        
        $("#use_end").html(endd(data));
    }
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