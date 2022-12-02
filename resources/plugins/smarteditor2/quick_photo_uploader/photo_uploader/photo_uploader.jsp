<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.File"%>
<%@ page import="java.util.UUID"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>
<%@ page import="org.apache.commons.fileupload.FileItem"%>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="egovframework.com.cmm.service.EgovProperties"%>
<%@ page import="inseqcms.cmmn.util.inseqcmsUtil"%>
<%@ page import="inseqcms.cmmn.service.inseqcmsGlobals"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>네이버에디터 사진퀵업로드 처리</title>
</head>
<body>
<%
String imgName  = "";
String realname = "";
String callback_func = "";
String altName  = "";
boolean img_ch = false;
DiskFileItemFactory factory = new DiskFileItemFactory();
factory.setSizeThreshold(1024*1024*10); 
ServletFileUpload upload = new ServletFileUpload(factory);
upload.setSizeMax(1024*1024*100);
//UTF-8 인코딩 설정
upload.setHeaderEncoding("UTF-8");
//System.out.println(upload.getHeaderEncoding());

List<FileItem> items = upload.parseRequest(request);
Iterator<FileItem> iter = items.iterator();
	while(iter.hasNext()){
	    FileItem item = (FileItem) iter.next();
	    if(item.isFormField()){
	    	if(item.getFieldName().equals("callback_func")){
	    		callback_func = item.getString("UTF-8");
	    	}
	    	
	    	if(item.getFieldName().equals("altName")){
	    		altName = item.getString("UTF-8");
	    	}
	    	//System.out.println(item.getFieldName());
	    	//System.out.println("1=== :: " + item.getString());
	    	//System.out.println("2=== :: " + item.getString("UTF-8"));
	    	//System.out.println("2=== :: " + item.getFieldName());
	   		
	    }else{
			if(item.getName()!=null && !item.getName().equals("")){
			//서버에 업로드 할 파일명(한글문제로 인해 원본파일은 올리지 않는것이 좋음)
			String  changeName = UUID.randomUUID().toString();
					realname   = item.getName();
					imgName    = changeName+"."+item.getName().split("\\.")[1];
			File file = new File(inseqcmsGlobals.SMARTEDITOR2_UPLOAD_PATH+imgName); //로컬 실제파일 올라갈 경로	
			if(file != null){
			    String extsn = file.getName().substring(file.getName().lastIndexOf(".")) ;
			    extsn = extsn.replace(".", "");
					if (inseqcmsUtil.extsnCheck(EgovProperties.getProperty(inseqcmsGlobals.BOARD_CONF_PATH, "file.upload.allow.image"), extsn)){
						img_ch = true;
						item.write(file); //실제파일 생성
					}else{
						item.delete();
					}//else End
				}//if End file
			}//if End item.getName()
		}//else End
	}//while End

	if(img_ch){
%>
	<script type="text/javascript">
	//<![CDATA[
		//document.location="callback.html?sFileName=<%=realname%>&callback_func=<%=callback_func%>&bNewLine=true&sFileURL=/upload/smarteditor2/<%=imgName%>";
		document.location="callback.html?sFileName=<%=altName%>&callback_func=<%=callback_func%>&bNewLine=true&sFileURL=/upload/smarteditor2/<%=imgName%>";
	//]]>
	</script>
	<%}else{ %>
	<script type="text/javascript">
	//<![CDATA[
		alert("이미지파일 (gif,bmp,jpg,png,jpeg)만 업로드 가능합니다.");
		//]]>
	</script>
<%	}//if End %>

</body>
</html>