<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8");
	String name = request.getParameter("name");
	
	String gender = request.getParameter("gender");
	String gender_name = gender.equals("male")?"남자":"여자";
	
	String[] hobby = request.getParameterValues("hobby");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jsprequest result page</title>
</head>
<body>
	<!-- 연결 페이지 -->
	<h1>jsprequest result page</h1>
	<div>이름 <%=name%></div>
	<div>성별 <%=gender_name%></div>
	<div>성별 <%=gender.equals("male")?"남자":"여자"%></div>
	<div>
		취미 <%
				for(int i=0; i<hobby.length; i++) {
			%>
			<div><%=hobby[i]%></div>
			<%		
				}
			%>
	</div>
</body>
</html>