<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	//같은 브라우저 내
	session.setAttribute("name", "홍길동");
	session.setAttribute("id", "hong");
	
	// 컨텍스트 범위 내
	application.setAttribute("address", "부산");
	String address = (String) application.getAttribute("address");
	
	//요청관계만
	request.setAttribute("age","10");
	String age = (String)request.getAttribute("age");
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>session 데이터 바인딩</title>
</head>
<body>
	<h1>내장 객체 session 데이터 바인딩 : Set</h1>
	<hr>
	<h3>생성된 세션 ID : <%=session.getId() %></h3>
	<h3>생성된 세션 값 : <%=session.getAttribute("name") %>, <%= session.getAttribute("id") %></h3>
	<hr>
	<h3>aqqlication(ServletContext) : <%= address %></h3>
	<h3>request(ServletRequest) : <%= age %></h3>
	
	<h3>sendRedirect 방식(클라이언트에 접속하는 방식)</h3>
	<a href="/webjsp/ex02/sessionGet.jsp">세션값 읽기</a>
	<hr>
	
	<h3>RedirectDispatcher 방식(서버에서 페이지에 연결하는 방식)</h3>
	<div>
		<h3>application(ServletContext) : <%= address %></h3>
		<h3>request(ServletRequest) : <%= age %></h3>
	</div>
	<%
		RequestDispatcher dispatch = request.getRequestDispatcher("sessionGet.jsp");
		dispatch.forward(request, response);
	%>
</body>
</html>