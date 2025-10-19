package org.example.springsecuritydemo.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.example.springsecuritydemo.model.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/students")
public class StudentController {
    ArrayList students = new ArrayList(List.of(
            new Student("amine", "naji", (short) 12),
            new Student("adam", "kamal", (short) 12),
            new Student("sara", "ben", (short) 11),
            new Student("lina", "omar", (short) 13),
            new Student("ali", "fakir", (short) 14)
    ));


    @GetMapping("/csrf")
    public CsrfToken getCsrfToken(HttpServletRequest request){
        return (CsrfToken)  request.getAttribute("_csrf");
    }


    @GetMapping
    ArrayList<Student> getStudents() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(authentication.getAuthorities().toString().contains("USER"));
        System.out.println(authentication);
        return students;
    }
    @PostMapping
    ResponseEntity<?> addStudent(@RequestBody Student student) {
        students.add(student);
        System.out.println(student);
        return ResponseEntity.ok("The Product was added successfully");
    }

}
