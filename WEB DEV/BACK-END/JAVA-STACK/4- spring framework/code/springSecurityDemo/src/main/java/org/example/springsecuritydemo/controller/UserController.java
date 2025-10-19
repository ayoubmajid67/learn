package org.example.springsecuritydemo.controller;

import jakarta.validation.Valid;
import org.example.springsecuritydemo.model.Users;
import org.example.springsecuritydemo.repo.UserRepo;
import org.example.springsecuritydemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class UserController {

    @Autowired
    UserService userService;
    @PostMapping("/register")
 public ResponseEntity<?> registerUser( @Valid @RequestBody Users user) {

        try{
            Users registeredUser=  userService.registerUser(user);

            if( registeredUser != null){
                return ResponseEntity.ok(registeredUser);

            }
            else {
                return ResponseEntity.badRequest().body("User already exists");
            }
        }catch (SQLException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@Valid @RequestBody Users user) {
        System.out.println("loginUser:");
         String accessToken=    userService.loginUser(user);

         if(accessToken != null){

             return ResponseEntity.ok(accessToken);
         }
         else{
             return ResponseEntity.badRequest().body("Invalid Credentials");
         }


    }

}
