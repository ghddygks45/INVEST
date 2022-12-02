console.log("${uservo.mber_id}")
Kakao.init('50edb9e32c3737f671557e927148cab5');
/* jQuery 소셜 공유하기 버튼 스크립트 */
$(document).ready(function(){
	
	$("a[data-toggle='sns_share']").click(function(e){
		e.preventDefault();
		
		var _this = $(this);
		var sns_type = $(this).data('service');
		var title = $(this).data('title');
		//var href = current_url;
		var href = location.href;

		var loc = "";
		var img = $("meta[name='og:image']").attr('content');

		if( ! sns_type || !href || !title) return;
		
		if( sns_type == 'facebook' ) {
			loc = '//www.facebook.com/sharer/sharer.php?u='+href+'&t='+title;
		}else if ( sns_type == 'twitter' ) {
			loc = '//twitter.com/home?status='+encodeURIComponent(title)+' '+href;
		}else if ( sns_type == 'google' ) {
			loc = '//plus.google.com/share?url='+href;
		}else if ( sns_type == 'pinterest' ) {
			loc = '//www.pinterest.com/pin/create/button/?url='+href+'&media='+img+'&description='+encodeURIComponent(title);
		}else if ( sns_type == 'kakaostory') {
			loc = 'https://story.kakao.com/share?url='+encodeURIComponent(href);
		}else if ( sns_type == 'band' ) {
			loc = 'http://www.band.us/plugin/share?body='+encodeURIComponent(title)+'%0A'+encodeURIComponent(href);
		}else if ( sns_type == 'naver' ) {
			loc = "http://share.naver.com/web/shareView.nhn?url="+encodeURIComponent(href)+"&title="+encodeURIComponent(title);
		}else if ( sns_type == 'kakaotalk') {
			sharekKakaotalk(title,href);
			return false;
		}else {
			return false;
		}
		
		window.open(loc);
		return false;
	});

});

/**
 * 카카오톡 공유
 * @param title
 * @param href
 */
function sharekKakaotalk(title,href){
	Kakao.Link.sendDefault({
		objectType: 'feed',
		content: {
			title: title,
			description: "",
			imageUrl: 'http://cms.inseq.co.kr:9090/resources/inseqcms/images/kakaotalk-inseq.jpg',
			link: {
				//webUrl: webLink,
				webUrl: href,
				mobileWebUrl: href
			}
		},
		buttons: [{
			title: '자세히보기',
			link: {
				webUrl: href,
				mobileWebUrl: href
			}
		}]
	});
}