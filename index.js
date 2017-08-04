$(document).ready(function(){
	$("#QR").click(function(e){
		$("#QR").hide();
	});
	//头部切换效果
	$(".createborder").hover(function(e){
		for(var i = 0;i<$(".createborder").length;i++){
			$(".createborder").eq(i).css("border-bottom","2px solid #FFFFFF");
		}
		$(this).css("border-bottom","2px solid #FF4400");
	},function(){
		$(this).css("border-bottom","2px solid #FF4400");
	})
	//APP的生成
	$(".page-block2-right-block3 a").hover(function(){
		var app = "<div class = 'absolute z-index-bad texiao2 white'><img src = 'images/texiao/image5.jpg'  /><p>扫一扫淘宝</p></div>"
		app = $(app).appendTo($(this));

	},function(){
		$(this).children().remove();
	})
	//右侧hover特效
	$(".page-block3-right-section2").children().hover(function(){
		$(this).animate({"opacity":"0.5"});
	},function(){
		$(this).animate({"opacity":"1"});
	})
	//修复底部边框bug
	$(".page-block3-left-section4").hover(function(){
		var chengse = "<div class = 'texiao9'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao6'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao7'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao8'></div>";
		$(this).append(chengse);
	},function(){
		$(this).children(".texiao9").remove();
		$(this).children(".texiao6").remove();
		$(this).children(".texiao7").remove();
		$(this).children(".texiao8").remove();
	})
	//修复实惠专业户边框bug
	$(".texiaohaha").hover(function(){
		var chengse = "<div class = 'texiao14'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao15'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao16'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao17'></div>";
		$(this).append(chengse);
	},function(){
		$(this).children(".texiao14").remove();
		$(this).children(".texiao15").remove();
		$(this).children(".texiao16").remove();
		$(this).children(".texiao17").remove();		
	})
	//继续修复边框
	$(".page-block3-left-section5").hover(function(){
		var chengse = "<div class = 'texiao18'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao19'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao20'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao21'></div>";
		$(this).append(chengse);
	},function(){
		$(this).children(".texiao18").remove();
		$(this).children(".texiao19").remove();
		$(this).children(".texiao20").remove();
		$(this).children(".texiao21").remove();		
	})
	//热卖单品bug修复
	$(".page-block4-footer-blocks ").hover(function(){
		var chengse = "<div class = 'texiao22'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao23'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao24'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao25'></div>";
		$(this).append(chengse);
	},function(){
		$(this).children(".texiao22").remove();
		$(this).children(".texiao23").remove();
		$(this).children(".texiao24").remove();
		$(this).children(".texiao25").remove();		
	})

	$(".page-block4-center-big").hover(function(){
		var chengse = "<div class = 'texiao22'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao23'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao24'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao25'></div>";
		$(this).append(chengse);
	},function(){
		$(this).children(".texiao22").remove();
		$(this).children(".texiao23").remove();
		$(this).children(".texiao24").remove();
		$(this).children(".texiao25").remove();		
	})

	$(".page-block4-center-small-1").hover(function(){
		var chengse = "<div class = 'texiao22'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao23'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao24'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao25'></div>";
		$(this).append(chengse);
	},function(){
		$(this).children(".texiao22").remove();
		$(this).children(".texiao23").remove();
		$(this).children(".texiao24").remove();
		$(this).children(".texiao25").remove();		
	})

	$(".page-block4-center-small-2").hover(function(){
		var chengse = "<div class = 'texiao22'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao23'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao24'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao25'></div>";
		$(this).append(chengse);
	},function(){
		$(this).children(".texiao22").remove();
		$(this).children(".texiao23").remove();
		$(this).children(".texiao24").remove();
		$(this).children(".texiao25").remove();		
	})
	//划上去加一层图片
	$(".page-block4-center div").hover(function(){
		var chengse = "<div class = 'texiao26'><p class = 'texiao28'>火热促销:静音加厚防护垫</p><button class = 'texiao27'>去看看</button></div>";
		chengse = $(chengse).appendTo($(this));
		$(chengse).css("width",$(this).children(".hahaha").width());
		console.log($(this).children(".hahaha"));
		$(chengse).height($(this).children(".hahaha").height());
	},function(){
		$(this).children(".texiao26").remove();
	})
	// 猜你喜欢 随便做做吧
	$(".page-block7-blocks-1").hover(function(){
		var chengse = "<div class = 'texiao22'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao23'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao24'></div>";
		$(this).append(chengse);
		var chengse = "<div class = 'texiao25'></div>";
		$(this).append(chengse);
		var chengse = "<img src = 'images/texiao/image6.png' class = 'texiao29'>";
		$(this).append(chengse);

	},function(){
		$(this).children(".texiao22").remove();
		$(this).children(".texiao23").remove();
		$(this).children(".texiao24").remove();
		$(this).children(".texiao25").remove();
		$(this).children(".texiao29").remove();		
	})
})