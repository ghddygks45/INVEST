var defaultGetOptions = {
		method: 'GET',
		contentType: 'text/plain; charset=UTF-8',
		dataType: 'json',
};
var defaultPostOptions = {
		method: 'POST',
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
};
var defaultPutOptions = {
		method: 'PUT',
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
};
var defaultDeleteOptions = {
		method: 'DELETE',
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
};
var defaultUploadOptions = {
		method: 'POST',
		contentType: false,
		processData: false,
};

// if Http Status not 200
var commonErrorCallback = function (jqXHR, textStatus, errorThrown) {
	defaultFailCallback.call(jqXHR, textStatus,errorThrown);
};
// if undefined failCallback
var defaultFailCallback = function (response,status,error) {window.alert(status);};

var baseAjax = function (url, options, successCallback, failCallback) {
	
	var callBack = function (data) {
		if (data != null) {
			$('.loading').hide();
			successCallback.call(this, data,options);
		} else {
			failCallback === undefined
				? defaultFailCallback.call(data, this,null)
				: failCallback.call(data, this,null);
		}
	};
	var requestUrl = url;
	$.ajax(requestUrl, options)
		.done(callBack).fail(failCallback === undefined ? commonErrorCallback : failCallback).always(alwaysFunc);
	
};

var alwaysFunc = function(){
	$('.loading').hide();
}

var getAjax = function (url, successCallback, failCallback, extendOptions, isLoadingBar) {
	if(isLoadingBar === undefined || isLoadingBar){
		$('.loading').show();
	}
	var today = new Date();
	
	baseAjax(url, $.extend(defaultGetOptions, extendOptions), successCallback, failCallback);
};

var postAjax = function (url, successCallback, failCallback, extendOptions, isLoadingBar) {
	if(isLoadingBar === undefined || isLoadingBar){
		$('.loading').show();
	}
	baseAjax(url, $.extend(defaultPostOptions, extendOptions), successCallback, failCallback);
};

var putAjax = function (url, successCallback, failCallback, extendOptions, isLoadingBar) {
	if(isLoadingBar === undefined || isLoadingBar){
		$('.loading').show();
	}
	baseAjax(url, $.extend(defaultPutOptions, extendOptions), successCallback, failCallback);
};

var deleteAjax = function (url, successCallback, failCallback, extendOptions, isLoadingBar) {
	if(isLoadingBar === undefined || isLoadingBar){
		$('.loading').show();
	}
	baseAjax(url, $.extend(defaultDeleteOptions, extendOptions), successCallback, failCallback);
};

// add extendOptions data(formData Object)
var uploadAjax =  function (url, successCallback, failCallback, extendOptions, isLoadingBar) {
	if(isLoadingBar === undefined || isLoadingBar){
		$('.loading').show();
	}
	baseAjax(url, $.extend(defaultUploadOptions, extendOptions), successCallback, failCallback);
};

// args: url, successCallback, failCallback, extendOptions
var Ajax = {
	get: getAjax,
	post: postAjax,
	put: putAjax,
	upload: uploadAjax,
	delete: deleteAjax,
};