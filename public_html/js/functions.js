
// スクロールしたら発動
$(window).scroll(function() {

	// スクロール量を変数に格納
	var sc = $(this).scrollTop();
	var w = $(this).width();
	
	if ( w > 1050){
		if( sc > 615) { $('header').addClass('smaller'); }
		if( sc < 200) { $('header').removeClass('smaller'); }
	}
});

$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});