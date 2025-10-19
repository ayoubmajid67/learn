package controller;

import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebInitParam;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(
        name = "MyServlet",
        urlPatterns = "/myServlet",
        initParams = {
                @WebInitParam(name = "username", value = "admin"),
                @WebInitParam(name = "password", value = "secret")
        }
)
public class MyServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws  IOException {
        ServletConfig config = getServletConfig();
        String username = config.getInitParameter("username");
        String password = config.getInitParameter("password");



        resp.getWriter().println("Username: " + username);
        resp.getWriter().println("Password: " + password);
    }
}