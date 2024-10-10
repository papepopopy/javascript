<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	String contextPath = request.getContextPath();
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>pageContext 기능</title>
</head>
<body>
	<h3>pageContext 기능</h3>
	<%--! <a href="http://localhost">회원가입 화면 페이지 요청</a>--%>
	<a href="/webjsp/ex03/MemberForm.jsp">회원가입 화면 페이지 요청</a>
	<a href="<%= contextPath%>/ex03/MemberForm.jsp">회원가입 화면 페이지 요청</a>
	<div>Context Path : ${contextPath}</div>
	<div>Context Path : <%= contextPath%></div>
</body>
</html>