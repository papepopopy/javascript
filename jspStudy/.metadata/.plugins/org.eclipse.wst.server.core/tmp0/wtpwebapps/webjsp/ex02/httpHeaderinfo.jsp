<%@page import="java.util.Enumeration"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	Enumeration enu = request.getHeaderNames();
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HTTP 헤더 정보</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<style>
	h1 {
		padding-left: 1.5rem;
		margin-bottom: 1.5rem;
	}
</style>
</head>
<body>
	<div class='container'>
		<h1 class="pr-1">HTTP 헤더 정보</h1>
		<table class="table table-bordered form-check">
			<tbody>
			<%
				while(enu.hasMoreElements()) {
					String headerName = (String) enu.nextElement();
				%>
				<tr>
					<td><%= headerName%></td>
					<td><%= request.getHeader(headerName)%></td>
				</tr>
				<%		
				}
			%>
			</tbody>
		</table>
	</div>
</body>
</html>