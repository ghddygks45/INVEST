/*----------------------------------------------------------------------------
* 문자 앞 뒤 공백을 제거 한다.
*/
String.prototype.trim = function() { 
	return this.replace(/(^\s*)|(\s*$)/g, ""); 
};

/*----------------------------------------------------------------------------
* 내용이 있는지 없는지 확인하다.
* if(!$F("inputId").notNull()) { alert("~ 입력하세요."); $("inputId").focus(); return false; }
*
* @return : true(내용 있음) | false(내용 없음)
*/
String.prototype.notNull = function() {
	return (this == null || this.trim() == "") ? false : true; 
};

/*----------------------------------------------------------------------------
* 메일의 유효성을 체크 한다.
* if(!$F("inputId").mail()) { }
*
* @return : true(맞는 형식) | false(잘못된 형식)
*/
String.prototype.mail = function() {
	var em = this.trim().match(/^[_\-\.0-9a-zA-Z]{3,}@[-.0-9a-zA-z]{2,}\.[a-zA-Z]{2,4}$/);
	return (em) ? true : false;
};
    
/*----------------------------------------------------------------------------
* 주민번호 체크 XXXXXX-XXXXXXX 형태로 체크
* if(!$F("inputId").jumin()) { }
*
* @return : true(맞는 형식) | false(잘못된 형식)
*/
String.prototype.jumin = function() {
	var num = this.trim().onlyNum();
	if(num.length == 13) {
		num = num.substring(0, 6) + "-" + num.substring(6, 13); 
	} else {
		return false;
	}
	num = num.match(/^([0-9]{6})-?([0-9]{7})$/);
	if(!num) return false;
	var num1 = RegExp.$1;
	var num2 = RegExp.$2;
	if(!num2.substring(0, 1).match(/^[1-4]{1}$/)) return false;
	num = num1 + num2;
	var sum = 0;
	var last = num.charCodeAt(12) - 0x30;
	var bases = "234567892345";
	for (i=0; i<12; i++) {
		sum += (num.charCodeAt(i) - 0x30) * (bases.charCodeAt(i) - 0x30);
	}
	var mod = sum % 11;
	return ((11 - mod) % 10 == last) ? true : false;
};

/*----------------------------------------------------------------------------
* 사업자번호 체크 XXX-XX-XXXXX 형태로 체크
* if(!$F("inputId").biznum()) { }
*
* @return : true(맞는 형식) | false(잘못된 형식)
*/
String.prototype.biznum = function() {
	var num = this.trim().onlyNum();
	if(num.length == 10) {
		num = num.substring(0, 3) + "-" + num.substring(3, 5) + "-" + num.substring(5, 10);
	} else {
		return false;
	}
	num = num.match(/([0-9]{3})-?([0-9]{2})-?([0-9]{5})/);
	if(!num) return false;
	num = RegExp.$1 + RegExp.$2 + RegExp.$3;
	var cVal = 0;
	for (var i=0; i<8; i++) {
		var cKeyNum = parseInt(((_tmp = i % 3) == 0) ? 1 : ( _tmp == 1 ) ? 3 : 7);
		cVal += (parseFloat(num.substring(i,i+1)) * cKeyNum) % 10; 
	}
	var li_temp = parseFloat(num.substring(i,i+1)) * 5 + '0';
	cVal += parseFloat(li_temp.substring(0,1)) + parseFloat(li_temp.substring(1,2));
	return (parseInt(num.substring(9,10)) == 10 - (cVal % 10)%10) ? true : false;
};

/*----------------------------------------------------------------------------
* 전화번호 체크 XXX-XXXX-XXXX 형태로 체크
* if(!$F("inputId").phone()) { }
*
* @return : true(맞는 형식) | false(잘못된 형식)
*/
String.prototype.phone = function() {
	var num = this.trim().onlyNum();
	if(num.substring(1,2) == "2") {
		num = num.substring(0, 2) + "-" + num.substring(2, num.length - 4) + "-" + num.substring(num.length - 4, num.length);
	}
	else {
		num = num.substring(0, 3) + "-" + num.substring(3, num.length - 4) + "-" + num.substring(num.length - 4, num.length);
	}
	num = num.match(/^0[0-9]{1,2}-[1-9]{1}[0-9]{2,3}-[0-9]{4}$/);
	return (num) ? true : false;
};

/*----------------------------------------------------------------------------
* 핸드폰 체크 XXX-XXXX-XXXX 형태로 체크
* if(!$F("inputId").mobile()) { }
*
* @return : true(맞는 형식) | false(잘못된 형식)
*/
String.prototype.mobile = function() {
	var num = this.trim().onlyNum();
	num = num.substring(0, 3) + "-" + num.substring(3, num.length - 4) + "-" + num.substring(num.length - 4, num.length);
	num = num.trim().match(/^01[016789]{1}-[1-9]{1}[0-9]{2,3}-[0-9]{4}$/);
	return (num) ? true : false;
};

/*----------------------------------------------------------------------------
* 숫자만 체크
* if(!$F("inputId").num()) { }
*
* @return : true(맞는 형식) | false(잘못된 형식)
*/
String.prototype.num = function() {
	return (this.trim().match(/^[0-9]+$/)) ? true : false;
};

/*----------------------------------------------------------------------------
* 영어만 체크
* if(!$F("inputId").eng()) { }
*
* @return : true(맞는 형식) | false(잘못된 형식)
*/
String.prototype.eng = function() {
	return (this.trim().match(/^[a-zA-Z]+$/)) ? true : false;
};

/*----------------------------------------------------------------------------
* 영어와 숫자만 체크
* if(!$F("inputId").engnum()) { }
*
* @return : true(맞는 형식) | false(잘못된 형식)
*/
String.prototype.engnum = function() {
	return (this.trim().match(/^[0-9a-zA-Z]+$/)) ? true : false;
};

/*----------------------------------------------------------------------------
* 아이디 체크 영어와 숫자만 체크 첫글자는 영어로 시작
* if(!$F("inputId").userid()) { }
*
* @return : true(맞는 형식) | false(잘못된 형식)
*/
String.prototype.userid = function() {
	return (this.trim().match(/[a-zA-z]{1}[0-9a-zA-Z]+$/)) ? true : false;
};

/*----------------------------------------------------------------------------
* 한글만 체크
* if(!$F("inputId").kor()) { }
*
* @return : true(맞는 형식) | false(잘못된 형식)
*/
String.prototype.kor = function() {
	return (this.trim().match(/^[가-힣]+$/)) ? true : false;
};

/*----------------------------------------------------------------------------
* 숫자와 . - 이외의 문자는 다 뺀다. - 통화량을 숫자로 변환
* if(!$F("inputId").toNum()) { }
*
* @return : 숫자
*/
String.prototype.toNum = function() {
	var num = this.trim();
	return (this.trim().replace(/[^0-9\.-]/g,""));
};

/*----------------------------------------------------------------------------
* 숫자 이외에는 다 뺀다.
* if(!$F("inputId").onlyNum()) { }
*
* @return : 숫자
*/
String.prototype.onlyNum = function() {
	var num = this.trim();
	return (this.trim().replace(/[^0-9]/g,""));
};

/*----------------------------------------------------------------------------
* 숫자만 뺀 나머지 전부
* $F("inputId").noNum()
*
* @return : 숫자 이외
*/
String.prototype.noNum = function() {
	var num = this.trim();
	return (this.trim().replace(/[0-9]/g,""));
};

/*----------------------------------------------------------------------------
* 숫자에 3자리마다 , 를 찍어서 반환
* $F("inputId").toMoney()
*
* @return : 통화량
*/
String.prototype.toMoney = function() {
	var num = this.toNum();
	var pattern = /(-?[0-9]+)([0-9]{3})/;
	while(pattern.test(num)) {
		num = num.replace(pattern,"$1,$2");
	}
	return num;
};

/*----------------------------------------------------------------------------
* String length 반환
* $F("inputId").getLength()
*
* @return : int
*/
String.prototype.getLength = function() {
	return this.length;
};

/*----------------------------------------------------------------------------
* String length 반환 한글 3글자 영어 1글자
* $F("inputId").getByteLength()
*
* @return : int
*/
String.prototype.getByteLength = function() {
	var tmplen = 0;
	for (var i = 0; i < this.length; i++) {
		if (this.charCodeAt(i) > 127)
			tmplen += 3;
		else
			tmplen++;
	}
	return tmplen;
};

/*----------------------------------------------------------------------------
* 파일 확장자 반환
* $F("inputId").getExt()
*
* @return : String
*/
String.prototype.getExt = function() {
	var ext = this.substring(this.lastIndexOf(".") + 1, this.length);
	return ext;
};

/*----------------------------------------------------------------------------
* String에 따라서 받침이 있으면 은|이|을 을
* 받침이 없으면 는|가|를 등을 리턴 한다.
* str.josa("을/를") : 구분자는 항상 "/"로
* $F("inputId").josa()
*
* @return : 은/는, 이/가 ...
*/
String.prototype.josa = function(nm) {
	var nm1 = nm.trim().substring(0, nm.trim().indexOf("/"));
	var nm2 = nm.trim().substring(nm.trim().indexOf("/") + 1, nm.trim().length);
	var a = this.substring(this.length - 1, this.length).charCodeAt();
	a = a - 44032;
	var jongsung = a % 28;
	return (jongsung) ? nm1 : nm2;
};

/*----------------------------------------------------------------------------
* String에 따라서 받침이 있으면 은|이|을 을
* 받침이 없으면 는|가|를 등을 리턴 한다.
* "inputId".labelText()
*
* @return : LABEL 태그의 TEXT 값
*/
String.prototype.labelText = function() {
	var tagArray = document.getElementsByTagName("LABEL");
	if(tagArray == undefined) tagArray = document.getElementsByTagName("label");
	var lText = "";
	for(var i=0; i<tagArray.length; i++){
		var obj = tagArray[i];
		if(obj.htmlFor == this.trim())
			lText = getText(obj);
			//lText = obj.innerText;
	}
	return lText;
};

function getText(el){
    var text = "";
    if(el != null){
        if(el.childNodes){
            for(var i=0;i<el.childNodes.length;i++){
                var childNode = el.childNodes[i];
                if(childNode.nodeValue != null){
                    text = text + childNode.nodeValue;
                }
            }
        }
    }
    return text;
}