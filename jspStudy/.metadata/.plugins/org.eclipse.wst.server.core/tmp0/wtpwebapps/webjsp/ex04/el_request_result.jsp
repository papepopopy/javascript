<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>el_request_result</title>
</head>
<body>
	<h1>test</h1>
	이름 : ${param.id }<br>
	비밀번호 : ${param.pw }<br>
	이름 : ${param.name }<br>
	email : ${param.email }<br>
	<h3>EL 포워딩(EL_forword.jsp)에서 포워딩 후 정보공유 결과</h3>
	주소 : ${requestScope.address }
	
	<h3>EL 포워딩(EL_forword.jsp)에서 포워딩 후 정보공유 결과</h3>
	주소 : ${memberList[0]}<br>
	주소 : ${memberList[0].id}
	<hr>
	주소 : ${memberList[1]}<br>
	주소 : ${memberList[1].id}
	
	<hr>
	<h1>EL 포워딩 우선순위</h1>
	${age }
</body>
</html>