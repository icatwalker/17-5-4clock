/**
 * Created by Administrator on 2017/5/4.
 */
function arrangePoint(ele,points,direct,between){ // 元素 半径  点数 顺时针逆时针 1顺时针-1逆时针
    ele=$(ele);
    var r=.5*parseFloat(ele.css("width"));
    r*=.9;
    var deg=2*Math.PI/points;
    for(var i= 1,html="";i<=points;i++){
        html+="<div class='point'>"+i*between+"</div>";
    }

    ele.children(".center").html(html);
    var dots=ele.children(".center").children();
    console.log(dots);
    var dots_width=parseFloat(window.getComputedStyle($(".point")[0]).width);
    console.log(dots_width);
    $.each(dots,function(i){
        console.log(dots[i]);
        dots[i].style.top=-r*Math.cos(deg+deg*i)-.5*dots_width+"px";
        dots[i].style.left=r*direct*Math.sin(deg+deg*i)-.5*dots_width+"px";
    });
}
arrangePoint(".hour",12,1,1);
arrangePoint(".mins",60,-1,1);
arrangePoint(".second",6,1,10);

//arrangePoint(".second",60,1);
var time=new Date();
var second=parseInt(time.getSeconds());
var hour=parseInt(time.getHours());
var mins=parseInt(time.getMinutes());
console.log(time);
console.log("hour:"+hour);
console.log("mins:"+mins);
console.log("second:"+second);
var total_second=hour*3600+mins*60+second;
var begin_hours_d=total_second*360/3600/12;
var bengin_mins_d=mins*6+second*6/60;
var begin_second_d=second*6;
num=0;
setInterval(function(){
    $(".second").css({"transform":"rotateZ("+ -begin_second_d+num*6+"deg)"});
    $(".second .point").css({"transform":"rotateZ("+ begin_second_d+num*6+"deg)"});

    $(".mins").css({"transform":"rotateZ("+bengin_mins_d+num*360/3600+"deg)"});
    $(".mins .point").css({"transform":"rotateZ("+ -bengin_mins_d+num*360/3600+"deg)"});

    $(".hour").css({"transform":"rotateZ("+ -begin_hours_d+"deg)"});
    $(".hour .point").css({"transform":"rotateZ("+ begin_hours_d+"deg)"});
    console.log(total_second);
    num++;
},10);



