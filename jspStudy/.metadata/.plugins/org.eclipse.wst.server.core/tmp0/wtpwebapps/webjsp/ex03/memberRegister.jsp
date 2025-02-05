<%@ page import="ex03.vo.MemberBean" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String id = request.getParameter("id");
	String pw = request.getParameter("pw");
	String name = request.getParameter("name");
	String email = request.getParameter("email");
	
	System.out.println(id);
%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>useBean 학습</title>
	<%@ include file = "/include/bootstrap_include.jsp" %>
</head>
<body>
	<jsp:useBean id="member" class="ex03.vo.MemberBean" scope="page"/>
	
	<jsp:setProperty property="id" name="member" value="<%= id %>" />
	<jsp:setProperty property="pw" name="member" value="<%= pw %>" />
	<jsp:setProperty property="name" name="member" value="<%= name %>" />
	<jsp:setProperty property="email" name="member" value="<%= email %>" />
	
	<div class="container">
		<h1>useBean test</h1>
		<div>
			<jsp:getProperty property="id" name="member"/>
			<jsp:getProperty property="pw" name="member"/>
			<jsp:getProperty property="name" name="member"/>
			<jsp:getProperty property="email" name="member"/>
		</div>
	</div>
</body>
</html>