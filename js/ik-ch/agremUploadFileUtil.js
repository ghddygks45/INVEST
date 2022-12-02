/**
 * 
 */

$(document).on("click",".file-find",function(e){
	e.preventDefault();
	
	var _tmp_sn = $(this).data('tmp_sn');
	var _atfile_sn = $(this).data('atfile_sn');
	var _atfile_name = $(this).data('orginl_atfile_name');
	var _file_type = $(this).data('file_type');
	var _file_kind = $(this).data('file_kind');
	
	if(typeof $(this).data('orginl_atfile_sn') !== "undifind"){
		var _ori_atfile_sn = $(this).data('orginl_atfile_sn');
	}
	//업로드 제한
	var upload_ext = $("#file_upload_deny").val();
	
	
	if($("#"+_atfile_sn).val() != null){
			deletebind($("#"+_ori_atfile_sn).val()
					,$("#"+_file_type).val()
					,$("#"+_file_kind).val());
		$("#"+_atfile_name).text("");
		$(".choice-file").hide();
	}
	
	//사이즈 조정은 마음대로
	var width = 500;	//가로
	var height = 270;	//높이
	
	popup_centr("/front/file/select.do?tmp_sn="+_tmp_sn+"&atfile_sn="+_atfile_sn+"&atfile_name="+_atfile_name+"&deny_file="+upload_ext+"&allow_ext=true","winfile",width,height,"no");
});

$(document).on("click",".file-remove",function(){
	var _tmp_sn = $(this).data('tmp_sn');
	var _atfile_sn = $(this).data('atfile_sn');
	var _atfile_name = $(this).data('orginl_atfile_name');
	var _file_type = $(this).data('file_type');
	var _file_kind = $(this).data('file_kind');
	
	if(typeof $(this).data('orginl_atfile_sn') !== "undifind"){
		var _ori_atfile_sn = $(this).data('orginl_atfile_sn');
	}
	
	if($("#"+_atfile_name).text() ==''){
		alert("삭제할 파일 정보가 없습니다.");
		return false;
	}else{
		if($("#"+_ori_atfile_sn).val() != null){
			deletebind($("#"+_ori_atfile_sn).val()
					,$("#"+_file_type).val()
					,$("#"+_file_kind).val());
		}
		$("#"+_tmp_sn).val("");
		$("#"+_atfile_sn).val("");
		//$("#"+_ori_atfile_sn).val("");
		$("#"+_atfile_name).text("");
		$(".choice-file").hide();
	}
});


/**
 * 팝업화면 중앙처리
 * @param urls.win
 */
var popup_centr = function(urls, windowNm, w, h, scrollopt) {
    var wl = (window.screen.width/2)  - (w/2 + 10);
    var wt = (window.screen.height/2) - (h/2 + 50);

    var opts = "status=no,height="+h+",width="+w+",resizable=no,left="+wl+",top="+wt+",screenX="+wl+",screenY="+wt+",scrollbars="+scrollopt;
    popwin = window.open( urls, windowNm, opts );
    if (popwin) popwin.focus();
    return popwin;
}
