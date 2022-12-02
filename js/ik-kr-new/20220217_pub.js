$(function () {

	$(".time-btn-box>.time-btn").on('click', function () {
		$(".time-btn-box>.time-btn").removeClass('active')
		$(this).addClass('active')
	})

	// $(".tooltip .tooltip-btn").on('hover', function () {
	// 	$(this).parent('.tooltip').toggleClass('open');
	// })

	// $(document).click(function (e) {
	// 	if ($(e.target).parents('.tooltip').length < 1) {
	// 		$('.tooltip').removeClass('open');
	// 	}
	// })

	$('.tooltip .tooltip-btn').hover(function (e) {
		$(this).parent('.tooltip').addClass('open');
	}, function () {
		$(this).parent('.tooltip').removeClass('open');
	});

	// datepicker
	$(".datepicker").datepicker({
		changeYear: true,
		changeMonth: true,
		dateFormat: "yy-mm-dd",
		showMonthAfterYear: true,
		monthSuffix: "년",
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일2'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월',
			'11월', '12월'
		],
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월',
			'12월'
		],
		numberOfMonths: [1, 1],
		buttonText: "달력 열기",
		showOn: "button",
		yearRange: "c-50:c+10"
	});

	$(".combi-tab-box .combi-tab-list>ul>li>a").on('click', function () {
		var idx = $(this).parent('li').index()
		$(".combi-tab-list>ul>li>a").removeClass('active');
		$(".combi-tab-list>ul>li>a").attr('title', '');
		$(this).addClass('active');
		$(this).attr('title', '선택됨')
		$(".combi-tab-content .combi-cont").removeClass('open')
		$(".combi-tab-content .combi-cont").eq(idx).addClass('open')
	})
	$(".combi-tab-list>ul>li:first-child>a").trigger('click');

	$(".cal-box .cal-tab-list>ul>li>a").on('click', function () {
		var idx = $(this).parent('li').index()
		$(".cal-tab-list>ul>li").removeClass('active');
		$(".cal-tab-list>ul>li>a").attr('title', '');
		$(this).parent('li').addClass('active');
		$(this).attr('title', '선택됨')
		$(".cal-tab-content .cal-content").removeClass('open')
		$(".cal-tab-content .cal-content").eq(idx).addClass('open')
	})
	$(".cal-tab-list>ul>li:first-child>a").trigger('click');



})




function popupPrint(popup) {
	var inbody = document.body.innerHTML;

	window.onbeforeprint = function () { // 프린트 화면 호출 전 발생하는 이벤트

		document.body.innerHTML = $(".layer-popup-box[data-popup=" + popup + "] .pop-content")[0].innerHTML
	}

	window.onafterprint = function () { // 프린트 출력 후 발생하는 이벤트
		document.body.innerHTML = inbody; // 이전 body 영역으로 복구
	}

	window.print();

}