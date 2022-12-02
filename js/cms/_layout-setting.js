/* 
	본 JS는 퍼블리싱 편의를 위해 
	중복되는 공통 레이아웃 영역을 로드할 목적으로 작성된 문서입니다.
	서버언어로 레이아웃을 구성하게되면 오류를 유발하는 코드이오니
	Back-End 개발시 이 파일을 반드시 삭제해주시기 바랍니다.
*/
$(function () {
	$('#header').load('_inc-header.html', function () {
		// callback
	});
	$('#sidebar').load('_inc-sidebar.html', function () {
		// callback
	});
	$('#footer').load('_inc-footer.html', function () {
		// callback
	});
});
