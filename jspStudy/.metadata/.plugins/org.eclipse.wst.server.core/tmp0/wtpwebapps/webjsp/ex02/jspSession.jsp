<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	session.setMaxInactiveInterval(5);
 %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP session</title>
</head>
<body>
	<h1>session 테스트</h1>
	<div>
		<p>isNew() : <%= session.isNew() %></p>
		<p>생성시간 : <%= session.getCreationTime() %></p>
		<p>최종접속시간 : <%= session.getLastAccessedTime() %></p>
		<p>세션 ID : <%= session.getId() %></p>
		<p>세션 유효시간 : <%= session.getMaxInactiveInterval() %></p>
	</div>
</body>
</html>