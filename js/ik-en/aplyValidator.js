/**
 * 
 */
'use strict'

var AplyValidator = function(){
	var _aply = this;
	
	_aply.init = function(){
		_aply.tel = ".number-tel";
		_aply.phone = ".number-phone";
		_aply.percent = ".percent-area";
		_aply.number = ".number-area";
		_aply.bizrno = ".number-bizno";
		_aply.corgno = ".number-corgno";
		_aply.date = ".number-date";
		
		_aply.actionEvent();
		_aply.readyAction();
	};
	
	_aply.readyAction = function(){
		if(typeof $(_aply.date).val() !== 'undefined'){
			$.each($(_aply.date),function(){
				$(this).val(_aply.dateWithHyphen($(this).val()));
			});
		}
		if(typeof $( _aply.number).val() !== 'undefined'){
			$.each($(_aply.number),function(){
				$(this).val(_aply.numberWithCommas($(this).val()));
			});
		}
		
		if(typeof $( _aply.percent).val() !== 'undefined'){
			$.each($(_aply.percent),function(){
				$(this).val(_aply.percentWithCommas($(this).val()));
			});
		}
		if(typeof $(_aply.bizrno).val() !== 'undefined'){
			$.each($(_aply.bizrno),function(){
				$(this).val(_aply.bizrnoWithHyphen($(this).val()));
			});
		}
		if(typeof $(_aply.corgno).val() !== 'undefined'){
			$.each($(_aply.corgno),function(){
				$(this).val(_aply.jurirnoWithHyphen($(this).val()));
			});
		}
	};
	
	_aply.actionEvent = function(){

		$(document).on("change",_aply.tel,function(e){
			
			$(this).val(_aply.telWithHyphen($(this).val()));
		});
		$(document).on("change",_aply.phone,function(e){
			
			if($(this).val().length > 11){
				alert("휴대폰번호 길이를 초과하였습니다.");
				$(this).val("");
				return false;
			}
			$(this).val(_aply.phoneWithHyphen($(this).val()));
		});
		$(document).on("change",_aply.number,function(e){
			if($(this).val().length > 15){
				alert("숫자는 15자리까지 입력됩니다.");
				$(this).val("");
				return false;
			}
			$(this).val(_aply.numberWithCommas($(this).val()));
		});
		
		$(document).on("change",_aply.percent,function(e){
			if($(this).val().length > 15){
				alert("숫자는 15자리까지 입력됩니다.");
				$(this).val("");
				return false;
			}
			$(this).val(_aply.percentWithCommas($(this).val()));
		});
		$(document).on("change",_aply.bizrno,function(e){
			
			if($(this).val().length > 12){
				alert("사업자등록번호 길이를 초과하였습니다.");
				$(this).val("");
				return false;
			}
			$(this).val(_aply.bizrnoWithHyphen($(this).val()));
		});
		$(document).on("change",_aply.corgno,function(e){
			
			if($(this).val().length > 14){
				alert("법인등록번호 길이를 초과하였습니다.");
				$(this).val("");
				return false;
			}
			$(this).val(_aply.jurirnoWithHyphen($(this).val()));
		});
		$(document).on("change",_aply.date,function(e){
			
			if($(this).val().length > 10){
				alert("날짜 길이를 초과하였습니다.");
				$(this).val("");
				return false;
			}
			$(this).val(_aply.dateWithHyphen($(this).val()));
		});
	};
	
	_aply.saveEvent = function(){
		if(typeof $(_aply.date).val() !== 'undefined'){
			$.each($(_aply.date),function(){
				$(this).val(_aply.dateWithOutHyphen($(this).val()));
			});
		}
		if(typeof $(_aply.number).val() !== 'undefined'){
			$.each($(_aply.number),function(){
				$(this).val(_aply.numberWithOutCommas($(this).val()));
			});
		}
		
		if(typeof $(_aply.percent).val() !== 'undefined'){
			$.each($(_aply.percent),function(){
				$(this).val(_aply.numberWithOutCommas($(this).val()));
			});
		}
		
		if(typeof $(_aply.bizrno).val() !== 'undefined'){
			$.each($(_aply.bizrno),function(){
				$(this).val(_aply.numberWithOutHyphen($(this).val()));
				if($(this).val().length > 10){
					alert("사업자등록번호 길이를 초과하였습니다.");
					$(this).val("");
					return false;
				}
			});
		}
		if(typeof $(_aply.corgno).val() !== 'undefined'){
			$.each($(_aply.corgno),function(){
				$(this).val(_aply.numberWithOutHyphen($(this).val()));
				if($(this).val().length > 14){
					alert("법인등록번호 길이를 초과하였습니다.");
					$(this).val("");
					return false;
				}
			});
		}
	};
	
	_aply.numberWithCommas = function(x) {
		var pattern = /^(0|[-]?[1-9]\d*)$/;		
		x = x.toString().replace(/,/gi,"");
		
		if(x == ""){
			return "";
		}
		
		if(pattern.test(x)){
		    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}else{
			alert("숫자 정수만 입력할 수 있습니다.");
			return "";
		}
	}
	
	_aply.percentWithCommas = function(x) {

		var pattern = /^-?\d+(?:[.]\d{0,2}?)?$/;
		x = x.toString().replace(/,/gi,"");
		
		if(x == ""){
			return "";
		}
		
		if(pattern.test(x)){
		    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}else{
			alert("숫자와 소수점은 2자리까지 입력할 수 있습니다.");
			return "";
		}

	}
	
	_aply.numberWithOutCommas = function(x) {
		return x.toString().replace(/,/gi,"");
	}
	
	_aply.phoneWithHyphen = function(x){
		if(typeof x !== 'undefined'){
			x = x.toString().replace(/-/gi,"");
			return x.toString().replace(/^(01[0-9])-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/,"$1-$2-$3");
		}
		return "";
	}
	
	
	_aply.telWithHyphen = function(x){
		if(typeof x !== 'undefined'){
			x = x.toString().replace(/-/gi,"");
			if(x.length == 8){
				return x.toString().replace(/^(1544|1566|1577|1588|1644|1688)-?([0-9]{4})$/,"$1-$2");
			}else if(x.indexOf('02')==0){
				return x.toString().replace(/^(0[2-8]?)-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/,"$1-$2-$3");
			}else{
				return x.toString().replace(/^(0[2-8][0-5]?)-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/,"$1-$2-$3");
			}
		}
		return "";
	}
	
	_aply.bizrnoWithHyphen = function(x){
		if(typeof x !== 'undefined'){
			x = x.toString().replace(/-/gi,"");
			return x.toString().replace(/^([0-9]{3})-?([0-9]{2})-?([0-9]{5})$/,"$1-$2-$3");
		}
		return "";
	}
	
	_aply.jurirnoWithHyphen = function(x){
		if(typeof x !== 'undefined'){
			x = x.toString().replace(/-/gi,"");
			return x.toString().replace(/^([0-9]{6})-?([0-9]{7})$/,"$1-$2");
		}
		return "";
	}
	
	_aply.numberWithOutHyphen = function(x) {
		return x.toString().replace(/-/gi,"");
	}
	
	_aply.dateWithHyphen = function(x){
		var matchingDate =  /^[12][0-9]{3}\-[01]?[0-9]\-[0-3]?[0-9]$/;
		if(typeof x !== 'undefined'){
			x = x.toString().replace(/[\-|\.|\/|\s]/gi,"");
			var val = x.toString().replace(/^([0-9]{4})-?([0-9]{2})-?([0-9]{2})$/,"$1-$2-$3");
			if(matchingDate.test(val)){
				return val;
			}else{
				return "";
			}
		}
		return "";
	}
	
	_aply.dateWithOutHyphen = function(x) {
		var val = x.toString().replace(/-/gi,"");
		return val;
	}

};