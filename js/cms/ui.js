$(document).ready(function () {
	// SNB
	$('#snb .on').each(function () {
		$(this).parentsUntil($("#snb"), 'li').addClass('on').children('ul').show();
	});
	$('#snb>li>a').click(function () {
		if ($(this).next('ul').length > 0) {
			$(this).next('ul').slideToggle('fast').parent('li').addClass('on').siblings('li').removeClass('on').children('ul').slideUp('fast');
			return false;
		}
	});

	// 탭메뉴
	$('.tab_menu').each(function () {
		var tabcols = $(this).children('li').length;
		if (tabcols < 5) $(this).children('li').css({
			'width': 'calc' + (100 / tabcols) + '% - 10px'
		});
	});

	// 기간설정버튼
	$('.term_setting button').click(function () {
		$(this).addClass('on').siblings('button').removeClass('on');
	});

	// 카드디자인 body 배경색 조정
	$('.dashboard, .bbs-setting').closest('body').addClass('bg_lightgray');

	// 맨 위로
	$('.btn_top').on('click', function () {
		$('body, html').animate({
			scrollTop: 0
		}, 300);
		return false;
	});
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('.btn_top').fadeIn();
		} else {
			$('.btn_top').fadeOut();
		}
	});
});

// 팝업 오픈
var popOpenBtn = null;

function openWindow(obj, popName, w, h) {
	var popW = 850;
	var popH = 400;

	popOpenBtn = $(obj);
	var myUrl = $(obj).attr('href');

	if (w) popW = w;
	if (h) popH = h;
	var left = (screen.width - popW) / 2;
	var top = (screen.height - popH) / 2;

	window.open(myUrl, popName, 'width=' + popW + ', height=' + popH + ', left=' + left + ', top=' + top + ', scrollbars=yes');
}

// 팝업 닫기 : 크롬은 프로토콜 문제로 서버에 올려야 작동함
function closeWindow() {
	if (window.opener != null) {
		window.opener.openerFocus();
	}
	window.close();
}

// 팝업 닫은 뒤 포커싱 처리
function openerFocus() {
	if (popOpenBtn != null) {
		$(popOpenBtn).focus();
		popOpenBtn = null;
	}
}

//레이어팝업
$(document).on("keydown", '.btn_layer_close', function (e) {
	if (e.keyCode == 9 && !e.shiftKey) { // tab
		e.preventDefault();
		$(this).siblings('.tit_layer').attr('tabindex', '0').focus();
	}
}).on("keydown", '.tit_layer', function (e) {
	if (e.keyCode == 9 && e.shiftKey) { // shift + tab
		e.preventDefault();
		$(this).siblings('.btn_layer_close').focus();
	}
}).on('click', '.layer_popup .bg', function () {
	// closeLayer();
});

$(window).keydown(function (e) {
	if ($('.layer_popup').is(':visible') && e.keyCode == 27) {
		e.preventDefault();
		closeLayer();
	}
}).on('load resize', function () {
	$('.layer_popup:visible').each(function () {
		if ($('.bg', this).is(':visible')) {
			var mt = -($(this).outerHeight() / 2) + 'px';
			var ml = -($(this).outerWidth() / 2) + 'px';
			$(this).css({
				'margin': mt + ' 0 0 ' + ml
			});
		} else {
			$(this).css({
				'margin': '0'
			});
		}
	})
});

var openModalBtn = null;
var layerObj = null;

function openLayer(obj) {
	$('html').addClass('no_scroll');
	$('#layer_cal').remove();
	openModalBtn = $(obj);
	var layerType = $(obj).attr('class');

	layerObj = $(obj).attr('href');
	$(layerType).hide();

	setTimeout(function () {
		$(layerObj).show();

		$('.tit_layer', layerObj).attr('tabindex', '0').focus();
		if ($('.bg', layerObj).is(':visible')) {
			var mt = -($(layerObj).outerHeight() / 2) + 'px';
			var ml = -($(layerObj).outerWidth() / 2) + 'px';
			$(layerObj).css({
				'margin': mt + ' 0 0 ' + ml
			});
		}
	}, 100);


}

function closeLayer(obj) {
	var myContainer = $(obj).closest('div').parent('div');
	if ($(myContainer).attr('class') == 'alert') {
		myContainer.hide().children().children('.tit_layer').removeAttr('tabindex');
	} else if ($(myContainer).attr('class') == 'modal') {
		$('.modal').hide().children().children('.tit_layer').removeAttr('tabindex');
	} else {
		var openedLayer = $('.layer_popup:visible:last').attr('id');
		$('.layer_popup:visible:last').hide().children().children('.tit_layer').removeAttr('tabindex');
		var openerBtn = $('a[href="#' + openedLayer + '"]:first');
		$(openerBtn).focus();
	}
	if (openModalBtn != null) {
		$(openModalBtn).focus();
		var openerBtn = openModalBtn;
		openModalBtn = null;
	}
	layerObj = null;
	$('#layer_cal').remove();
	$('html').removeClass('no_scroll');

	/* var scrolltop = $(openerBtn).position().top - $(window).height()/2;
	console.log(scrolltop);
	$(document).scrollTop(scrolltop); */
}
