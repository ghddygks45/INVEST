$(function () {

	function activeTitle() {
		if ($(".step-tab").length > 0) {
			inputText = $(".step-tab li.active .cont")[0].innerText
			inputText = inputText.split("\n");

			steptabTitle = inputText[1];

			Title = $(document).attr("title");
			$('html head title').text(steptabTitle + " < " + Title);
		}

		// if ($(".tab").length > 0) {
		//     tabTitle = $('.tab>li>a.active').text();

		//     Title = $(document).attr("title");
		//     $('html head title').text(tabTitle + " < " + Title);

		//     $('.tab>li>a.active').attr('title', '선택됨')

		// }
	}
	activeTitle();

})

function moveToContent() {
	var contentTop = $("#content").offset().top;
	yPos = contentTop - $(".header").outerHeight();
	if (yPos < 0) {
		console.log('메인')
		$(".sec01 .visual-box .slide.slick-current>a").focus();
	} else {
		console.log('서브')
		window.scrollTo(0, yPos);
		$(".utill-area>ul>li:first-child>button").focus();
	}
}