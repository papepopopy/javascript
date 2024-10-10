<%@page import="java.util.Calendar"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%!
	/* 선언문 */
	private String str = "JSP 스터디";
	public String getName() {
		return "홍길동";
	}
%>
<%
	String name = request.getParameter("age");
	int num1 = Integer.parseInt(request.getParameter("num1"));
	int num2 = Integer.parseInt(request.getParameter("num2"));
	
	// 날짜
	Calendar c = Calendar.getInstance();
	int hour = c.get(Calendar.HOUR_OF_DAY);
	int minute = c.get(Calendar.MINUTE);
	int second = c.get(Calendar.SECOND);
	
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>JSP 페이지</title>
</head>
<body>
	<h1>JSP 페이지</h1>
	<hr>
	<h3>안녕하세요 <%=getName() %>님</h3>
	<h4><%=str%></h4>
	<h4><%=name%></h4>
	<h4><%=(num1 + num2)%></h4>
	<h3>현재 시간 <%= hour%>시 <%= minute%>분 <%= second%>초 </h3>
</body>
</html>