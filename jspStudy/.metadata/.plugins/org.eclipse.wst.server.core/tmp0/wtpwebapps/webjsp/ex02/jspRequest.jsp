<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP 요청 페이지</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<style>
	.btn {
		
	}
</style>
</head>
<body>
<!-- 클라이언트 요청 페이지 -->

	<div class="container">
		<h1>JSP request 요청</h1>
		<hr>
		<div>
			<form action="/webjsp/ex02/jsprequest_result.jsp" method="post">
				<table class="table table-bordered form-check">
					<thead>
					</thead>
					<tbody>
						<tr>
							<td>이름</td>
							<td><input type="text" name="name" id="name" class="form-control" /></td>
						</tr>
						<tr>
							<td>성별</td>
							<td>
								<input type="radio" name="gender" value="male" checked="checked" />남자
								<input type="radio" name="gender" value="female" />여자
							</td>
						</tr>
						<tr>
							<td>취미</td>
							<td>
								<input type="checkbox" name="hobby" value="독서"/>독서
								<input type="checkbox" name="hobby" value="게임"/>게임
								<input type="checkbox" name="hobby" value="TV 시청"/>TV 시청
								<input type="checkbox" name="hobby" value="축구"/>축구
								<input type="checkbox" name="hobby" value="기타"/>기타
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<input type="submit" value="전송" class="btn btn-outline-success">
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	</div>
</body>
</html>