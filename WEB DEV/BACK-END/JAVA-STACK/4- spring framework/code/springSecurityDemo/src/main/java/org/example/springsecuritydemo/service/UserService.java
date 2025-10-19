package org.example.springsecuritydemo.service;

import at.favre.lib.crypto.bcrypt.BCrypt;
import org.example.springsecuritydemo.model.Users;
import org.example.springsecuritydemo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JWTService jwtService;

    public  Users  registerUser(Users user) throws SQLException {

        Users currentUser = userRepo.findFirstByUsername(user.getUsername());



        if(currentUser != null){

            return null;
        }
        else {
//            hash the password before saving in DB:
            user.setPassword(BCrypt.withDefaults().hashToString(12, user.getPassword().toCharArray()));
            return userRepo.save(user);
        }

    }



    public String   loginUser(Users user){
    Authentication authentication  = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));

     if(authentication.isAuthenticated()){
         return jwtService.generateToken(user.getUsername());
     }
     else{
         return null;
     }

    }
}
