<%@ page language="java" contentType="text/html; charset=UTF-8"

    pageEncoding="UTF-8"%>
<%
	int num = Integer.parseInt(request.getParameter("num"));
	
	int sum = 0;
	for (int i=0; i<=num;i++) {
		sum += i;
	}
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Error 페이지</title>
</head>
<body>
	<h2>계산 결과 : <%=sum %></h2>
</body>
</html>