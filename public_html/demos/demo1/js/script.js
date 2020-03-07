/*
 * Hiraku2(ドロワーメニュー)
 *
 * btn：
 *  オフキャンバスメニューを開閉するためのボタンのセレクターを指定
 * 
 * fixedHeader:
 *   position：fixedを指定した要素でオフキャンバスメニュー開閉時に
 *   メインコンテンツに合わせてスライドさせたいコンテンツ
 *   があればそのセレクターを指定
 * 
 * direction：
 *  オフキャンバスメニューを開閉する方向を指定（right or left）
 * 
 */
new Hiraku(".offcanvas-right", {
  btn: "#offcanvas-btn-right",
  fixedHeader: ".fixed-top",
  direction: "right"
});

/*
 * Swiper
 */
var swiper = new Swiper('.swiper-container', {
  loop: true,/*  スライダーループ設定  */
  speed: 300,/*  スライド速度 300ミリ秒（0.3秒） */
  paginationClickable: true,
  simulateTouch: true,
  slidesPerView: 3, /* 複数のスライド設定 */
  spaceBetween: 3,  /* スライドとスライドの間の距離（余白）単位:px */
  initialSlide: 2,  /*一番最初に表示させるスライドの番号(0スタート)。デフォルトでは0。 */
  centeredSlides : true,
  autoHeight: true, /* 自動で高さ調整 */
  /*  ページネーション設定  */
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  /*  スライダーオート再生設定  */
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  /*  ブレイクポイント設定  */
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 3,
      initialSlide: 1,
    }
  }
  
});

/*
 * WOW(アニメーション) initalize 
 */
new WOW().init();


/*
 * スムーズスクロール
 */

 /* スクロール量を確認 */
jQuery(window).on("scroll", function($) {

  if (jQuery(this).scrollTop() > 600){
    jQuery('.floating').show();
  } else {
    jQuery('.floating').hide();
  }

});

jQuery('.floating').click(function (){
  jQuery('body,html').animate({ scrollTop: 0 }, 1000, 'swing');
  return false;
});

/**
 * ページ内スクロール
 */
jQuery('a').click(function(){
  var offsetY = -100;// スクロールのオフセット値
  var speed = 500; //msec
  var href =$(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top + offsetY;
  
  jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;

});

/*
 * click event
 */
$('.nav-link').on({
  'click': function() {
    console.log('クリックされました！');
    $('.nav-link').removeClass('nav-item-border');
    $(this).addClass('nav-item-border');
  }
})

/*
 * Tab
 */
$('.tab li').on({
  'click': function() {
    var index = $('.tab li').index(this);
    $('.tab li').removeClass('active');
    $(this).addClass('active');
    var target = $('.tab-content ul').removeClass('show').eq(index);
    target.addClass('show');
  }
})

/*
 * アコーディオン アイコン
 */

$(".accbox label").on({
  'click': function() {
    var isclosed = $(this).children('.acc-close-icon').length;
    
    if (isclosed){/* close:閉じている時の処理 */
      var target = $(this).children('.acc-close-icon');
      target.removeClass('acc-close-icon');
      target.addClass('acc-open-icon');
    }else{/* open:開いている時の処理 */
      var target = $(this).children('.acc-open-icon');
      target.removeClass('acc-open-icon');
      target.addClass('acc-close-icon');
    }
  },
})

