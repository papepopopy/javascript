<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("UTF-8");
	String name = request.getParameter("name");
	String imgName = request.getParameter("imgName");
%>
		<h1>이름은 <%=name %>입니다.</h1>
		<h2>이미지 파일이름 : <%=imgName %></h2>
