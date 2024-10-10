<%@ page language="java" contentType="text/html; charset=UTF-8"
	isErrorPage="true"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>예외 처리 페이지</title>
</head>
<body>
	<h2>예외 처리 페이지</h2>
	<hr>
	<%=exception.toString() %><!-- 에러메시지 -->
	<hr>
	<%= exception.getMessage() %>
	<hr>
	
	숫자만 입력하세요
	<a href="/webjsp/ex02/addException.jsp">다시하기</a>
</body>
</html>