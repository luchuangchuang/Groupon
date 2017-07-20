// 以下是轮播图
var mySwiper=new Swiper(".swiper-container",{
	autoplay:2500,
	loop:true,
});
// 以下是查看更多
$('#watchMore').click(function(){
	if($("#hiddenLove").is(":hidden")){
		$("#hiddenLove").show();
	    $(this).html("点击收回");
	}else{
		$("#hiddenLove").hide();
		$(this).html("查看所有团购");
	}	
});
/*$("li").mouseover(function(){
	$(this).css("background","pink");
});*/

// 以下是选择城市
$("li").click(function(){
	$("#showCity").html($(this).html());
	$("#selectCity").css("display","none");
	$("#arrow").css("transform","rotateZ(0deg)");
});
$("#arrow").click(function(){	
	if($("#selectCity").is(":hidden")){
		$(this).css("transform","rotateZ(180deg)");
		$("#selectCity").show();		
	}else{
		$("#selectCity").hide();
		$(this).css("transform","rotateZ(360deg)");
	};
});
$("#showCity").click(function(){
	if($("#selectCity").is(":hidden")){
		$("#arrow").css("transform","rotateZ(180deg)");
		$("#selectCity").show();
	}else{
		$("#selectCity").hide();
		$("#arrow").css("transform","rotateZ(0deg)");
	};
});
// 以下是倒计时
function timer(){
	 var tagDay=new Date(2017,11,11);
	 var today=new Date();
	 var timesub=tagDay.getTime()-today.getTime();
	 var day=parseInt(timesub/1000/60/60/24);
	 var hour=parseInt(timesub/1000/60/60%24);
	 var minute=parseInt(timesub/1000/60%60);
	 var second=parseInt(timesub/1000%60);
	 $("#timer").html(day+"天"+hour+":"+minute+":"+second);
}
var time=setInterval(timer,1000);
