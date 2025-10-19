<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Add jsp page</title>
</head>
<body bgcolor="#f0ffff">
<%--directive--%>
<%@page import="java.util.Date" %>
<%@ page import="java.util.Scanner" %>

<%--include a page in the current page --%>
<%@ include file="header.jsp" %>

<%--add extra tags taglibe--%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="name" value="JSP"/>


<%--declaration --%>
<%!
    int num =10;

%>
<%--scriptlet--%>
<%
    int i = Integer.parseInt(request.getParameter("num1"));
    int j = Integer.parseInt(request.getParameter("num2"));
    int sum = i+j;

%>
<%--expression tag --%>
<h1>The sum of <%=i%> and <%=j%> is <%=sum%></h1>
<h1>hello world</h1>

</body>
</html>
