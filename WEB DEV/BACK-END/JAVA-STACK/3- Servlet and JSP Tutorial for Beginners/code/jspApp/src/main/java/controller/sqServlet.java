package controller;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.Optional;

@WebServlet("/sq")
public class sqServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {

       Cookie[] cookies= req.getCookies();
        PrintWriter out = res.getWriter();
       if(cookies==null){
          out.println("there is no cookies");
          return;
       }
        Optional<Cookie>  sumCookie=Arrays.stream(cookies).filter((cookie)-> cookie.getName().equals("sum")).findFirst();
        if(sumCookie.isPresent()){

            try{
                int sum = Integer.parseInt(sumCookie.get().getValue());

                System.out.println("the sum"+sum);
                out.println("the sum :" + sum);
            }catch (Exception e){
                out.println("an error occurred while parsing the sum");
            }

        }


    }

}
