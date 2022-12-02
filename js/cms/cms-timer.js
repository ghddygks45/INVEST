	
var str_secs =""; 
var str_mins =""; 
var mins=60;  // default(분) 셋팅  
var secs=00;   // default(초) 셋팅 
		
 // 타이머 스크립트 
	function timer_script(){ 
		secs = secs - 1;
		if(secs < 0){
			secs=59;
			mins--;
		}
		str_secs = secs.toString(); 
		str_mins = mins.toString(); 
		
		if (mins ==09 && secs == 59){	
			//cms_timerpopupCenter("/js/cms/cms-timer.html","로그인연장",490,260); //팝업창사용할 경우
			$("#cms-login-extn").show();
		}
		
		if(secs < 10){str_secs = "0" + secs;}
		if(mins < 10){str_mins = "0" + mins;}
		
		//top 시간표시 출력
		$("#cms-min").html(str_mins);
		$("#cms-second").html(str_secs);
		
		//bottom 시간표시 출력
		$("#cms-min-bottom").html(str_mins);
		$("#cms-second-bottom").html(str_secs);
		
		//로그아웃 강제처리
		if (mins ==0 && secs == 0){
			location.href='/cms/login.do?type=timerlogout';
			return;
		}
		setTimeout("timer_script()",1000);
	}


	//로그인 연장 버튼을 클릭 할 경우
	function onExtend(){
		mins=60;  // 분 초기화 
		secs=00;  // 초 초기화 
		$("#cms-min").html(mins);
		$("#cms-second").html(secs);
		$("#cms-min-bottom").html(mins);
		$("#cms-second-bottom").html(secs);
		$("#cms-login-extn").hide(); //로그인연장 숨김
		//location.reload();
	}
	
	//팝업창에서 연장 버튼을 클릭할경우[팝업창 사용할 경우 (1)]
	function fnExtend(){
		try{
			opener.onPopupExtend();
			window.close();
		}catch(e){
			window.close();
		}
	}
	
	//팝업창에서 연장 버튼을 클릭 후 실행 메소드[팝업창 사용할 경우 (2)]
	function onPopupExtend(){
		mins=60;  // 분 초기화 
		secs=00;  // 초 초기화 
		$("#cms-min").html(mins);
		$("#cms-second").html(secs);
		$("#cms-min-bottom").html(mins);
		$("#cms-second-bottom").html(secs);
		//location.reload();
		
	}

	//페이지가 로드 된후 함수 실행 
	setTimeout("timer_script()",1000);
	
	
	/**
	 * 로그인연장 팝업
	 * javascript window.open() 으로 팝업 호출시 팝업이 화면의 중앙에 뜨도록(screen center align) 하는 방법 (듀얼모니터 고려)
	 * If you're on dual monitor, the window will center horizontally, but not vertically... use this function to account for that.
	 * 출처 : https://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen
	 */
	function cms_timerpopupCenter(url, title, w, h) {
		// Fixes dual-screen position                         Most browsers      Firefox
		var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
	 
		var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
	 
		var left = ((width / 2) - (w / 2)) + dualScreenLeft;
		var top = ((height / 2) - (h / 2)) + dualScreenTop;
		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
		 
		// Puts focus on the newWindow
		if (window.focus) {
			newWindow.focus();
		}
	}	