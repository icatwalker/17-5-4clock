/**
 * Created by Administrator on 2017/5/4.
 */
function arrangePoint(ele,points,direct,between){ // 元素 半径  点数 顺时针逆时针 1顺时针-1逆时针  间距
    ele=$(ele);
    var r=.5*parseFloat(ele.css("width"));
    r*=.9;
    var deg=2*Math.PI/points;
    for(var i= 1,html="",total;i<=points;i++){
        html+="<div class='point'>"+(total=(i==60||i*between==60)?0:i*between)+"</div>";
    }
    ele.children(".center").html(html);
    var dots=ele.children(".center").children();
    var dots_width=parseFloat(window.getComputedStyle($(".point")[0]).width);
    $.each(dots,function(i){
        dots[i].style.top=-r*Math.cos(deg+deg*i)-.5*dots_width+"px";
        dots[i].style.left=r*direct*Math.sin(deg+deg*i)-.5*dots_width+"px";
    });
}
arrangePoint(".hour",12,1,1);
arrangePoint(".mins",60,-1,1);
arrangePoint(".second",6,1,10);

//arrangePoint(".second",60,1);

var timer=null;

function run(){
    clearTimeout(timer);
    timer = null;
    var time=new Date();
    var second=time.getSeconds();
    $("div.second").css({"transform":"rotate("+(-second*6)+"deg)"});
    $("div.second").css({"webkitTransform":"rotate("+(-second*6)+"deg)"});
    $("div.second").css({"oTransform":"rotate("+(-second*6)+"deg)"});
    $("div.second").css({"msTransform":"rotate("+(-second*6)+"deg)"});
    $("div.second").css({"mozTransform":"rotate("+(-second*6)+"deg)"});

    $(".second .point").css({"transform":"rotate("+(second*6)+"deg)"});
    $(".second .point").css({"webkitTransform":"rotate("+(second*6)+"deg)"});
    $(".second .point").css({"oTransform":"rotate("+(second*6)+"deg)"});
    $(".second .point").css({"msTransform":"rotate("+(second*6)+"deg)"});
    $(".second .point").css({"mozTransform":"rotate("+(second*6)+"deg)"});

    var mins=time.getMinutes()+second/60;
    $("div.mins").css({"transform":"rotate("+(mins*6)+"deg)"});
    $("div.mins").css({"webkitTransform":"rotate("+(mins*6)+"deg)"});
    $("div.mins").css({"oTransform":"rotate("+(mins*6)+"deg)"});
    $("div.mins").css({"msTransform":"rotate("+(mins*6)+"deg)"});
    $("div.mins").css({"mozTransform":"rotate("+(mins*6)+"deg)"});

    $(".mins .point").css({"transform":"rotate("+(-mins*6)+"deg)"});
    $(".mins .point").css({"webkitTransform":"rotate("+(-mins*6)+"deg)"});
    $(".mins .point").css({"oTransform":"rotate("+(-mins*6)+"deg)"});
    $(".mins .point").css({"msTransform":"rotate("+(-mins*6)+"deg)"});
    $(".mins .point").css({"mozTransform":"rotate("+(-mins*6)+"deg)"});

    var hour=time.getHours()+mins/60;
    $("div.hour").css({"transform":"rotate("+(-hour*30)+"deg)"});
    $("div.hour").css({"webkitTransform":"rotate("+(-hour*30)+"deg)"});
    $("div.hour").css({"oTransform":"rotate("+(-hour*30)+"deg)"});
    $("div.hour").css({"msTransform":"rotate("+(-hour*30)+"deg)"});
    $("div.hour").css({"mozTransform":"rotate("+(-hour*30)+"deg)"});

    $(".hour .point").css({"transform":"rotate("+(hour*30)+"deg)"});
    $(".hour .point").css({"webkitTransform":"rotate("+(hour*30)+"deg)"});
    $(".hour .point").css({"oTransform":"rotate("+(hour*30)+"deg)"});
    $(".hour .point").css({"msTransform":"rotate("+(hour*30)+"deg)"});
    $(".hour .point").css({"mozTransform":"rotate("+(hour*30)+"deg)"});
}
window.setInterval(run,1000);



