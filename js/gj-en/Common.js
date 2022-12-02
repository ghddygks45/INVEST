/********************************************************
 파일명 : Common.js
 설 명 : ui 공통 JavaScript
수정일    수정자    Version    Function 명
 ----------- -------- ---------- --------------
 2020.07.27  Geist Korea   1.0     최초 생성
*********************************************************/

/************************************************************************
 함수명 : fn_open_popup
 설 명 : 레이어 팝업 열기
 인 자 : id(연결되는 레이어팝업 .layer-popup-box의 data-popop 속성값과 동일하게 작성)
 작성자 : Geist Korea
 수정일 수정자 수정내용
 ------ ------ -------------------
 2020.07.27 Geist Korea 최초 생성
************************************************************************/
function fn_open_popup(e,id){
    $(e).attr('data-wa-btn','focus');
    $(".layer-popup-box[data-popup="+id+"]").addClass("active");
    $(".layer-popup-box[data-popup="+id+"]").attr('tabindex','0').focus();
    $(".layer-popup-box.active table").each(function(){
        if($(this).width() > $(this).parent(".table").width()){
            if(!$(this).parent(".table").find(".info-scroll").length){
                if($("html").attr("lang") == "ko"){
                    $(this).parent(".table").prepend(infoScroll);
                } else if($("html").attr("lang") == "en"){
                    $(this).parent(".table").prepend(infoScroll2)
                } else if($("html").attr("lang") == "ja"){
                    $(this).parent(".table").prepend(infoScroll3)
                } else{
                    $(this).parent(".table").prepend(infoScroll4)
                }
            }
        } else {
            $(this).parent(".table").find(".info-scroll").remove();
        }
    })
}

/************************************************************************
 함수명 : fn_hide_popup
 설 명 : 레이어 팝업 닫기
 인 자 : id(해당 레이어팝업 .layer-popup-box의 data-popop 속성값과 동일하게 작성)
 작성자 : Geist Korea
 수정일 수정자 수정내용
 ------ ------ -------------------
 2020.07.27 Geist Korea 최초 생성
************************************************************************/
function fn_hide_popup(id){
    $(".layer-popup-box[data-popup="+id+"]").removeClass("active")
    $("[data-wa-btn='focus']").focus();
    $("[data-wa-btn='focus']").removeAttr('data-wa-btn');
}

/************************************************************************
 함수명 : fn_confirm_browser
 설 명 : 현재 브라우저가 ie인지 체크
 작성자 : Geist Korea
 수정일 수정자 수정내용
 ------ ------ -------------------
 2020.08.06 Geist Korea 최초 생성
************************************************************************/
function fn_confirm_browser() {    
    var ieBrowser;    
    var ua = window.navigator.userAgent;    
    var msie = ua.indexOf("MSIE ");    

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // Internet Explorer    
    {    
        ieBrowser = true;
        $("html").addClass("ie")
    } else //Other browser    
    {     
        ieBrowser = false;
    }   
    return ieBrowser;
}

/************************************************************************
 함수명 : fn_action_printing
 설 명 : 현재 페이지 프린트
 작성자 : Geist Korea
 수정일 수정자 수정내용
 ------ ------ -------------------
 2020.07.27 Geist Korea 최초 생성
************************************************************************/
function fn_action_printing(){
    window.open('print.html','','width=1280,height=900,left=0,scrollbars=yes');return false;
}

/************************************************************************
 함수명 : fn_download_pdf
 설 명 : 현재 페이지 pdf로 저장
 작성자 : Geist Korea
 수정일 수정자 수정내용
 ------ ------ -------------------
 2020.08.06 Geist Korea 최초 생성
************************************************************************/
function fn_download_pdf(){
    window.open('download-pdf.html','','width=1280,height=900,left=0,scrollbars=yes');return false;
}

/************************************************************************
 함수명 : fn_download_img
 설 명 : 현재 페이지 img로 다운로드
 작성자 : Geist Korea
 수정일 수정자 수정내용
 ------ ------ -------------------
 2020.08.06 Geist Korea 최초 생성
************************************************************************/
function fn_download_img(){
    window.open('download-img.html','','width=1280,height=900,left=0,scrollbars=yes');return false;
}

var infoScroll = [];
infoScroll += ("<div class='info-scroll'>");
infoScroll += (" <div class='txt'>");
infoScroll += ("  <strong>표를 좌우로 움직여서 확인하실 수 있습니다.</strong>");
infoScroll += ("  <div>(터치하여 안내창을 닫으신 후 사용해주세요.)</div>");
infoScroll += (" </div>");
infoScroll += ("</div>");

var infoScroll2 = [];
infoScroll2 += ("<div class='info-scroll'>");
infoScroll2 += (" <div class='txt'>");
infoScroll2 += ("  <strong>You can check the table by moving it from side to side.</strong>");
infoScroll2 += ("  <div>(Touch to close the information window and use it.)</div>");
infoScroll2 += (" </div>");
infoScroll2 += ("</div>");

var infoScroll3 = [];
infoScroll3 += ("<div class='info-scroll'>");
infoScroll3 += (" <div class='txt'>");
infoScroll3 += ("  <strong>テーブルを左右に動かして確認できます。</strong>");
infoScroll3 += ("  <div>(タッチして案内ウィンドウを閉じてからご利用ください)</div>");
infoScroll3 += (" </div>");
infoScroll3 += ("</div>");

var infoScroll4 = [];
infoScroll4 += ("<div class='info-scroll'>");
infoScroll4 += (" <div class='txt'>");
infoScroll4 += ("  <strong>可以左右移动确认桌子。</strong>");
infoScroll4 += ("  <div>(触摸后请关上导购窗口后使用。)</div>");
infoScroll4 += (" </div>");
infoScroll4 += ("</div>");


$(document).ready(function(){
    // desktop, mobile 구분
	if($(this).width() < 1218) {
		$("html").removeClass().addClass("mobile");
	} else {
		$("html").removeClass().addClass("desktop");
    }
    
    // desktop gnb
    $(document).on("mouseenter focusin", ".desktop .gnb > ul > li > a", function(){
        $(".desktop .gnb > ul > li > a").removeClass("open");
        $(this).addClass("open");
        
        // gnb height값 변경
        var gnbMaxHeight=[];
        var max

        $(".desktop .gnb > ul > li > div").each(function(){
	        gnbMaxHeight.push($(this).height());
		});
		max = gnbMaxHeight.reduce( function (previous, current) {
			return previous > current ? previous:current;
		});
		$(".desktop .gnb > ul > li > div").height(max);
        $(".desktop .bg").height(max+46);
        $(".desktop .gnb > ul > li > div").show();

		return false;
    })
    $(document).on("mouseleave", ".desktop .gnb", function(){
        $(".desktop .gnb > ul > li > a").removeClass("open");
        $(".desktop .bg").height(0);
        $(".desktop .gnb > ul > li > div").removeAttr("style");
    })

    $(document).on("mouseenter focusin",".desktop .gnb > ul > li > div",function(){
        $(".desktop .gnb > ul > li > a").removeClass("open");
        $(this).prev().addClass("open");
    })

    // m gnb
    $(document).on("click", ".header .btn-menu", function(){
        $('body').addClass('fixed');
        $(".gnb-wrap").addClass("open");
    })
    $(document).on("click", ".header .btn-close", function(){
        $('body').removeClass('fixed');
        $(".gnb-wrap").removeClass("open");
    })
    $(document).on("click", ".mobile .gnb > ul > li > a", function(){
        if(!$(this).next("div").length == 0){
            $(this).addClass("active").parent("li").siblings().find(">a").removeClass("active");
            return false;
        }
    })
    $(document).on("click", ".mobile .gnb .has_dep3", function(e){
        e.preventDefault()
        $(this).toggleClass("active");
    })

    // 3depth가 있을 경우 상위 2depth에 클래스 추가
    $(".gnb .dep2 > li > a").each(function(){
        if(!$(this).next("ul").length == 0){
            $(this).addClass("has_dep3");
            return false;
        }
    })

    // 페이지 공유하기
    $(document).on("click", ".utill-area .share-area .btn", function(){
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
            $(this).find("span").text("공유하기 레이어팝업 닫기")
        } else{
            $(this).find("span").text("공유하기 레이어팝업 열기")
        }
    })

    // lnb
    $(".lnb > ul > li > a").each(function(){
        if(!$(this).next("ul").length == 0){
            $(this).addClass("has_dep3");
        }
    }) 

    $(document).on("click", ".lnb .has_dep3", function(){
        $(".lnb .has_dep3").removeClass("active").next("ul").hide();
        $(this).addClass("active");
        $(this).next("ul").slideToggle(500);
        return false;
    })
    
    // 패밀리사이트
    $(document).on("click", ".footer .family .btn", function(e){
        if($(this).hasClass("open")){
            $(this).removeClass("open").attr("title","관련기관 레이어 열기")
        } else{
            $(this).addClass("open").attr("title","관련기관 레이어 닫기")
        }
    })

    // 모바일에서 가로 스크롤이 있는 테이블
	$(document).on("touchstart", ".info-scroll", function(){
		$(this).fadeOut();
    })
    
    // 모바일에서 table에 가로 스크롤이 생길 시 터치문구영억 추가
    $("table").each(function(){
        if($(this).width() > $(this).parent(".table").width()){
            if($("html").attr("lang") == "ko"){
                $(this).parent(".table").prepend(infoScroll);
            } else if($("html").attr("lang") == "en"){
                $(this).parent(".table").prepend(infoScroll2)
            } else if($("html").attr("lang") == "ja"){
                $(this).parent(".table").prepend(infoScroll3)
            } else{
                $(this).parent(".table").prepend(infoScroll4)
            }
        }
    })

    // tab
    $(document).on("click", ".tab-active a", function(){
        var tabIdx = $(this).data("tab");
        $(".tab-content").hide();
        $("#"+tabIdx).show();
        $("#"+tabIdx).find("table").each(function(){
            if($(this).width() > $(this).parent(".table").width()){
                if(!$(this).prev(".info-scroll").length){
                    if($("html").attr("lang") == "ko"){
                        $(this).parent(".table").prepend(infoScroll);
                    } else if($("html").attr("lang") == "en"){
                        $(this).parent(".table").prepend(infoScroll2)
                    } else if($("html").attr("lang") == "ja"){
                        $(this).parent(".table").prepend(infoScroll3)
                    } else{
                        $(this).parent(".table").prepend(infoScroll4)
                    }
                }
            } else{
                if($(this).prev(".info-scroll").length){
                    $(this).prev(".info-scroll").remove();
                } 
            }
        })
    })

    // 갤러리 게시판 썸네일 크기 조절
	$(".gallery-board li .thumb").find("img").each(function(){
		var w = $(this).width();
		var	h = $(this).height();
		if (w < h) {
			$(this).parent().addClass("mih")
		} else {
			$(this).parent().addClass("miw")
		}
    });

    // toggle 게시판 ex) 서식자료
    $(document).on("click", ".toggle-top a", function(){
        $(this).parents("li").toggleClass("open");
    })

    // 모바일로 접속했는지 체크
    var filter = "win16|win32|win64|mac|macintel";
    if(0 > filter.indexOf(navigator.platform.toLowerCase())){
        $("body").addClass("client-mobile")
    }

    // 팝업 내에서 print 버튼 클릭 시
    $(document).on("click", ".btn-pop-print", function(){
        var beforePrint = function() {
            $(".layer-popup-box.active").parents().addClass("hide-parent")
            $(".hide-parent,.layer-popup-box.active").siblings().addClass("hide-content")
        };
        var afterPrint = function() {
            $("*").removeClass("hide-parent hide-content")
        };
        var launchedFromMenu = true;
    
        if (window.matchMedia) {
            var mediaQueryList = window.matchMedia("print");
            mediaQueryList.addListener(function(mql) {
                if (mql.matches) {
                    beforePrint();
                } else {
                    afterPrint();
                }
            });
        }
        
        window.onbeforeprint = beforePrint;
        window.onafterprint = afterPrint;
        window.print();
    })
    
    // 팝업 내에서 pdf 다운로드 버튼 클릭 시
    $(document).on("click", ".btn-pop-pdf", function(){
        var svg = document.querySelector("svg");    
        var canvas = document.createElement("canvas");    
        var canvasIE = document.createElement("canvas");    
        var context = canvas.getContext("2d");
        var data = (new XMLSerializer()).serializeToString(svg);    
        canvg(canvas, data);    
        var svgBlob = new Blob([data], {    
            type: "image/svg+xml;charset=utf-8"    
        }); 
    
        $("body").addClass("pdf");
        $(".layer-popup-box").parents().addClass("hide-parent");
        $(".hide-parent,.layer-popup-box.active").siblings().addClass("hide-content");
    
        setTimeout (function(){
            var url = canvas.toDataURL(svgBlob);//DOMURL.createObjectURL(svgBlob);    
    
            var img = new Image();    
            img.onload = function() {    
                context.canvas.width = $(".chart-area").find("svg").width();
                context.canvas.height = $(".chart-area").find("svg").height();  
                context.drawImage(img, 100,100);    
        
                var dataUrl;    
                if (fn_confirm_browser()) { // Check of IE browser     
                    var svg = $(".chart-area").innerHTML;    
                    canvg(canvasIE, svg);    
                    dataUrl = canvasIE.toDataURL("image/JPEG");    
                } else {    
                    dataUrl = canvas.toDataURL("image/jpeg");    
                }      
                
            };
            img.src = url;
        
            if (fn_confirm_browser()) {
               $('.chart-area').append(img);
               $(".chart-area>svg").hide()
            }
        
            html2canvas($('.layer-popup-box.active .popup')[0]).then(function(canvas) {
                // 캔버스를 이미지로 변환
                var imgData = canvas.toDataURL('image/jpeg');
                var imgWidth = 210; // 이미지 가로 길이(mm) A4 기준
                var pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                var doc = new jsPDF('p', 'mm');
                var position = 0;
        
                // 첫 페이지 출력
                doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
        
                // 한 페이지 이상일 경우 루프 돌면서 출력
                while (heightLeft >= 20) {
                    position = heightLeft - imgHeight;
                    doc.addPage();
                    doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }
        
                // 파일 저장
                doc.save("content.pdf");
                $("body").removeClass("pdf");
                $("*").removeClass("hide-parent hide-content")
                $(".chart-area>img").remove();
                $(".chart-area>svg").show();
            })  
        },100)
    })

    // 언어선택 버튼 클릭 시
    $(document).on("click",".lang_box>a",function(){
        $(".lang_box").toggleClass("active");
    })
})

// 리사이즈 했을 경우
$(window).resize(function(){
    if(this.resizeTO){
        clearTimeout(this.resizeTO);
    }
    this.resizeTO = setTimeout(function(){
        $(this).trigger('resizeEnd');
    }, 100);
});

// 리사이즈가 끝났을 경우
$(window).on("resizeEnd", function(){
    $(".gnb-wrap").removeClass("active").removeAttr("style")
	// desktop, mobile 구분
	if($(this).width() < 1218) {
		$("html").removeClass().addClass("mobile");
	} else {
        $("html").removeClass().addClass("desktop");
        $("body").removeClass("fixed");
    }

    $("table").each(function(){
        if($(this).width() > $(this).parent(".table").width()){
            if(!$(this).parent(".table").find(".info-scroll").length){
                if($("html").attr("lang") == "ko"){
                    $(this).parent(".table").prepend(infoScroll);
                } else if($("html").attr("lang") == "en"){
                    $(this).parent(".table").prepend(infoScroll2)
                } else if($("html").attr("lang") == "ja"){
                    $(this).parent(".table").prepend(infoScroll3)
                } else{
                    $(this).parent(".table").prepend(infoScroll4)
                }
            }
        } else {
            $(this).parent(".table").find(".info-scroll").remove();
        }
    })
});

