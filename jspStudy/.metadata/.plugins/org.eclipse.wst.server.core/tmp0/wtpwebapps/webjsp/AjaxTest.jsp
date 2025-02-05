<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>제이쿼리 Ajax(비동기식 처리)</title>
<%@include file="/include/bootstrap_include.jsp" %>
</head>
<body>
	<div class = 'container'>
		<div>
			<input type="button" class="btn btn-success" value="전송하기" 
			onClick="fn_process()" />
		</div>
		<br>
		<div id = "message" class="alert alert-primary">응답결과</div>
		<hr>
		<div>
			<input type="button" class="btn btn-success" value="json data 보내기" 
			onClick="fn_json_process()" />
		</div>
		<br>
		<div id = "message" class="alert alert-primary">응답결과</div>
	</div>
	<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script> 
	<script type="text/javascript">
		function fn_process() {
			// 제이쿼리 ajax
			$.ajax ({
				type: "get",
				url : "/webjsp/ajaxTest",
				async: false,
				data: {param:"Hello jQuery!!!"},
				/* success: function(data, textStatus) { */
				success: function(data, status) {
					//전송과 응답		
					console.log("서버로부터 받은 응답 결과"+data)
					$("#message").append("<div>"+data+"</div>");
				},
				error: function() {
					//실패
					console.log("에러가 발생")
				},
				complete: function() {
					//작업 완료시
					console.log("작업 완료")
				}
			})
			console.log("버튼 클릭");
		}
			
		function fn_json_process() {
			// json data
			var jsonStr = "{"name":"["홍길동","동순이", "김길순"]"}";
			/* var jsonInfo = JSON.parse(jsonStr); */
			
			
			$.ajax ({
				type: "get",
				url : "/webjsp/json",
				async: false,
				data: {jsonInfo:jsonStr},
				/* success: function(data, textStatus) { */
				success: function(data, status) {
					//전송과 응답		
					console.log("서버로부터 받은 응답 결과"+data)
					$("#message").append("<div>"+data+"</div>");
				},
				error: function() {
					//실패
					console.log("에러가 발생")
				},
				complete: function() {
					//작업 완료시
					console.log("작업 완료")
				}
			})
			console.log("버튼 클릭");}
		}
	</script>
</body>
</html>