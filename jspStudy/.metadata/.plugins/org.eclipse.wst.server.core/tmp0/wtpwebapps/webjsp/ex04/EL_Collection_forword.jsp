<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="ex03.vo.MemberBean"%>
<%
   	request.setCharacterEncoding("utf-8");
   
   	List<MemberBean> memberList = new ArrayList();
   	
   	MemberBean m1 = MemberBean.builder()
   			.id("Lee").pw("1234").name("홍길동").email("Lee@gmail.com")
   			.build();
   	
   	MemberBean m2 = MemberBean.builder()
   			.id("Lee2").pw("1234").name("홍길동2").email("Lee2@gmail.com")
   			.build();
   	
   	memberList.add(m1);
   	memberList.add(m2);
   	
   	request.setAttribute("memberList", memberList);
   	
   	// Scope의 우선순위
   	// page > request > session > application
   	
   	request.setAttribute("age", 10);
   	session.setAttribute("age", 20);
   	application.setAttribute("age", 30);
   	pageContext.setAttribute("age", 40); // 페이지를 벗어나면 소멸
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>EL 포워딩 테스트</title>
</head>
<body>
	<h1>EL 포워딩 테스트</h1>
	<jsp:forward page="el_request_result.jsp"/>
	<%-- ${age } --%>
</body>
</html>