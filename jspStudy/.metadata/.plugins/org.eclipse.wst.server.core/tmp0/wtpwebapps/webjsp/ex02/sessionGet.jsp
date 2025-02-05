<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%
	//같은 브라우저 내
 	String name = (String)session.getAttribute("name");
 	String id = (String)session.getAttribute("id");
 	
	// 컨텍스트 범위 내
	String address = (String) application.getAttribute("address");
	
	//요청관계만
	String age = (String)request.getAttribute("age");
 %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>session 데이터 바이딩 : Get</title>
</head>
<body>
	<h1>내장 객체 session 데이터 바인딩 : Get</h1>
	<hr>
	<h3>세션값 ID 읽기 : <%=session.getId() %></h3>
	<hr>
	<div>
		<hr>
		이름 : <%= name %> <br>
		아이디 : <%= id %> <br>
	</div>
	<% session.invalidate();%>
	<a href="/webjsp/ex02/sessionInvalidate.jsp">세션값 삭제</a>
	
	<div>
		<h3>application(ServletContext) : <%= address %></h3>
		<h3>request(ServletRequest) : <%= age %></h3>
	</div>
	<hr>
	<div>
		<h1><% out.println("나이: " + age); %></h1>
	</div>
</body>
</html>