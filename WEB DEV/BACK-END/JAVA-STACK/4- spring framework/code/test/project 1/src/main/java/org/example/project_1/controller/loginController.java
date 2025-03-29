package org.example.project_1;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class loginController
{
    @RequestMapping("/login")
    String login(){
        return  "login page";
    }

}
