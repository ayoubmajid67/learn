package org.example.project_1.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


// indicate that this class is a controller  :
//@Controller // we use Controller when we are returning a layouts
@RestController // we use RestController when we are returning data
public class HomeController {

   @RequestMapping("/")
    public String great(){

        return "Hello World d";

    }

    @RequestMapping("/about")
    public String about(){

       return  "We don't teach, we Educate";
    }

}
