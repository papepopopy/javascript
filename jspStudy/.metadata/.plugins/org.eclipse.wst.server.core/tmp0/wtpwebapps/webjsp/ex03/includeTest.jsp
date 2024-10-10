<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>include 테스트</title>

<!-- 반복 되는 영역 -->
<%@ include file="/include/bootstrap_include.jsp" %>

</head>
<body>
	<div class="container">
		<h1>인크루드 테스트</h1>
		<hr>
		안녕하세요 쇼핑몰 중심 JSP 시작부분
		<hr>
		<div>
			<jsp:include page="/include/include01.jsp" flush="true">
				<jsp:param name="name" value="동길이" />
				<jsp:param name="imgName" value="사과" />
			</jsp:include>
		</div>
		<hr>
		안녕하세요 쇼핑몰 중심 JSP 끝부분
	</div>
</body>
</html>