// 【header__inner読み込んだらhamburger起動】
// ヘッダー読み込み
fetch('include/header__inner.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('.header__inner').innerHTML = data;

    // ⬇ ヘッダー読み込みが終わったあとにハンバーガーメニューの処理
    const ham = document.querySelector('#js-hamburger');
    const nav = document.querySelector('#js-nav');

    if (ham && nav) {
      ham.addEventListener('click', function () {
        ham.classList.toggle('active');
        nav.classList.toggle('active');
      });
    }
  });

  
// 【グローバルメニュー ページ上部にきたら固定】
if (document.querySelector("#global-nav")) { // documentに#global-navがある時
  var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
  var navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
  jQuery( window ).on( 'scroll', function() {
	  if ( jQuery( this ).scrollTop() > navPos ) { // スクロール位置がグローバルメニューの位置を超えたら
		  jQuery( 'body' ).css( 'padding-top', navHeight ); // グローバルメニューの高さ分のpaddingを付ける？
		  jQuery( '#global-nav' ).addClass( 'm_fixed' ); // グローバルメニューの位置を超えたらm_fixedを付与
    } else {
		  jQuery( 'body' ).css( 'padding-top', 0 ); // グローバルメニューが表示されてる時はpaddingは0
		  jQuery( '#global-nav' ).removeClass( 'm_fixed' ); // グローバルメニューが表示されてる時はm_fixedを取り除く
    }
  });
}



// 【TOPページvideo 3枚繰り返し】
if (document.querySelector(".header__video")) { // documentに.header__videoがある時
  (function () {
    const videoContainer = document.querySelector(".header__video");
    const videos = videoContainer.querySelectorAll("video");
    let currentVideoIndex = 0; // 変数設定 --- 0番目からスタート

  if (videos.length === 0) return; // 0より大きい場合は繰り返し

  videos.forEach((video, index) => { // index = 数える
    video.style.display = index === 0 ? "block" : "none";
    video.loop = false; // 写っていないもの以外は表示なし、ループなし
  });

  videos[currentVideoIndex].play(); // 次のやつ準備してます

  videos.forEach((video) => {
    video.addEventListener("ended", () => {  // videoが終わったら
      video.style.display = "none" // displayから消える
      currentVideoIndex = (currentVideoIndex + 1) % videos.length; // +1で次のやつを設定
      videos[currentVideoIndex].style.display = "block";
      videos[currentVideoIndex].play(); // displayに表示させてplayする
    });
  });
  })();
}


// 【TOPページのFEATURE 左からスライドイン】
if (document.querySelector(".slidein")) { // documentに.slideinがある時
  let winHeight,winScroll,scrollPos;
  $(window).on('load scroll',function(){
    winScroll = $(window).scrollTop();
    winHeight = $(window).height();
	  scrollPos = winHeight * 0.9 + winScroll; // 10％の高さまでスクロール
    $(".slidein").each(function(){
      if($(this).offset().top <= scrollPos){
        $(this).addClass("show"); // slideinが10％表示されたらshowを付与する
      }else{
        $(this).removeClass("show"); // それ以外の時はshowを削除する
      }
    });
  });
}


// 【SERVICE,FEATUREのAOS】
if (document.querySelector(".service__list")) {
AOS.init({
    offset: 0,
    delay: 100,
    duration: 700,
    easing: 'ease',
});
}
if (document.querySelector(".feature__list")) {
AOS.init({
    offset: 0,
    delay: 100,
    duration: 700,
    easing: 'ease',
});
}



// 【ABOUTUSのslider】
if (document.querySelector(".slider")) { // documentに.sliderがある時
  $(function(){
    $('.slider').slick({
      autoplay: true, // 自動でスクロール
      autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
      speed: 3000, // スライドが流れる速度を設定
      cssEase: "linear", // スライドの流れ方を等速に設定
      slidesToShow: 4, // 表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, // 矢印非表示
      pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 1.5, // 画面幅750px以下でスライド3枚表示
          }
        },
            {
          breakpoint: 768,
          settings: {
          slidesToShow: 1.5, // 画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  });
}


// 【404リダイレクト】
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("a"); // クリックされた要素がaタグか、a内のspanなどだったら取る

    if (link) {
      const href = link.getAttribute("href");

      if (!href || href.trim() === "" || href === "#" || href === "javascript:void(0)") {
        e.preventDefault();
        console.log("404に飛ばします");
        window.location.href = "./404.html";
      }
    }
  });
});