package controller;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet("/add")
public class AdditionServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

         int num1 = Integer.parseInt(req.getParameter("num1"));
         int num2 = Integer.parseInt(req.getParameter("num2"));
         int sum = num1 + num2;
        Cookie cookie = new Cookie("sum", String.valueOf(sum));
        res.addCookie(cookie);

        res.sendRedirect("sq");


    }

}