$(function () {

	if ($(this).width() > 1218) {
		// PC버전일때 draggable 실행
		$('.main-layer-popup').draggable();
	} else {
		// mobile 메뉴 클릭 시 첫 번째 메뉴 활성화
		$(document).on("click", ".mobile .btn-menu", function () {
			$(".mobile .gnb > ul > li:first-child > a").addClass("active");
		})
	}

	// 메인 레이어팝업 (오늘 하루 보지 않기 체크된 팝업 히든 처리)
	$('.main-layer-popup').each(function () {
		var pop = $(this);
		if (popupGetCookie($(this).attr("id"))) { // '오늘 하루 보지 않기 체크'를 했다면
			pop.hide();
		} else {
			pop.show();
		}
	});
	//$('.main-layer-popup').draggable();

	// 스크롤 시 헤더 스타일 바뀜
	//$('.header').addClass('off');

	// $(document).on("mouseenter focusin", ".desktop .gnb > ul > li > a", function () {
	// 	$('.header').addClass('on').removeClass('off');
	// })
	// $(document).on("mouseleave focuout", ".desktop .gnb > ul", function () {
	// 	$('.header').addClass('on').removeClass('off');
	// })

	// $(window).scroll(function () {
	// 	scrollValue = $(document).scrollTop();
	// 	if (scrollValue !== 0) {
	// 		/*$('.header').css('position','fixed');
	// 		$('.header').addClass('on').removeClass('off');*/
	// 		$('.header').addClass('on').removeClass('off fixed');
	// 		$(document).on("mouseleave focuout", ".desktop .gnb >ul", function () {
	// 			$(".header").addClass("on").removeClass("off");
	// 		})
	// 	} else if (scrollValue == 0) {
	// 		$('.header').addClass('off').removeClass('on');
	// 		$(document).on("mouseleave focuout", ".desktop .gnb > ul", function () {
	// 			$('.header').removeClass('on').addClass('off');
	// 		})
	// 		$('#gnb>ul>li>a').removeClass('open');
	// 	}
	// });

	// 탭메뉴
	$('.sec03 .tab-menu>li').on('click', function () {
		$(this).parent('.tab-menu').children('li').removeClass('active').find(">a").removeAttr("title");
		$(this).addClass('active').find(">a").attr("title", "선택됨");
		var idx = $(this).index();
		$(this).closest($('.tab-area')).find($('.tab-contents')).removeClass('active');
		$(this).closest($('.tab-area')).find($('.tab-contents')).eq(idx).addClass('active').find(".slide-sec").slick('setPosition');
		// $(this).closest($('.tab-area')).find($('.tab-contents')).eq(idx).addClass('active')
		$('.sec03 .l-box .tab-contents').slick('setPosition');
		$('.sec03 .r-box .tab-contents').slick('setPosition');
	})

	// 클릭시 sec02까지 스크롤
	$('.scroll-btn').on('click', function () {
		var offset = $('.sec03').offset().top;
		var headerHeight = $('.header').outerHeight();
		$('html, body').animate({
			scrollTop: offset - headerHeight
		}, 400);
	})

	// sec03 슬라이드-1
	$('.sec03 .l-box .tab-contents').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
	})

	// sec03 슬라이드-2
	$('.sec03 .r-box .tab-contents').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		rows: 2,
		arrows: true,
	})

	// sec04 슬라이드
	$('.project .tab-contents').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [{
				breakpoint: 1217,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false,
					arrows: true,
				}
			},
			{
				breakpoint: 340,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					arrows: true,
				}
			}

		]
	})

	// sec04 아이콘 바꾸기
	$(".project .tab-box .slide>a").mouseenter(function () {
		var oldSrc = $(this).find(".ico-box>img").attr('src');
		var newSrc = oldSrc.replace(".", "_active.");
		$(this).find(".ico-box>img").attr('src', newSrc)
	})
	$(".project .tab-box .slide>a").mouseleave(function () {
		var oldSrc = $(this).find(".ico-box>img").attr('src');
		var newSrc = oldSrc.replace("_active.", ".");
		$(this).find(".ico-box>img").attr('src', newSrc)
	})

})

// 리사이즈 했을 경우
$(window).resize(function () {
	if (this.resizeTO) {
		clearTimeout(this.resizeTO);
	}
	this.resizeTO = setTimeout(function () {
		$(this).trigger('resizeEnd');
	}, 100);
});

// 리사이즈가 끝났을 경우
$(window).on("resizeEnd", function () {
	if ($(this).width() < 1218) {
		$('.main-layer-popup').draggable('destroy');
	} else {
		$('.main-layer-popup').draggable();
		$(".gnb > ul > li:first-child > a").removeClass("active");
	}
});

// 레이어팝업 (오늘 하루 보이지 않기)
function PopupCloseDay(winName) {
	var id = $(winName).parents('.main-layer-popup').attr('id');
	mainPopupSetCookie(id, "done", 1);
	$('#' + id).hide();
}

// 레이어 팝업 닫기
function closePopup(obj) {
	$(obj).parents('.main-layer-popup').hide();
}

// 레이어 팝업 쿠키 찾기
function popupGetCookie(name) {
	var nameOfCookie = name + "=";
	var x = 0;
	while (x <= document.cookie.length) {
		var y = (x + nameOfCookie.length);
		if (document.cookie.substring(x, y) == nameOfCookie) {
			if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
				endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf(" ", x) + 1;
		if (x == 0)
			break;
	}
	return "";
}

// 레이어 팝업 쿠키 생성
function mainPopupSetCookie(name, value, expiredays) {
	var todayDate = new Date();
	todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);
	if (todayDate > new Date()) {
		expiredays = expiredays - 1;
	}
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}