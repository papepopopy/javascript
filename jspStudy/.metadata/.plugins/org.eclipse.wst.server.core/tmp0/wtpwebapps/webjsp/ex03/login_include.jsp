<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
		<h1>로그인</h1>
		<hr>
		<div class="mylogin">
			<form action="login_result.jsp" method="get">
				ID : <input type="text" name="user_id" class="form-control"/>
				<br>
				PW<input type="password" name="user_pw" class="form-control" />
				<hr>
				<div>
					<input type="submit" value="로그인" class="btn btn-success" />
					<input type="reset" value="다시입력" class="btn btn-danger" />
				</div>
			</form>
		</div>
	</div>
</body>
</html>