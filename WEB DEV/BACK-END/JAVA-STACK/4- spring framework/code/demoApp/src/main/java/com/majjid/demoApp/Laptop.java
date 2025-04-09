package com.majjid.demoApp;


import org.springframework.stereotype.Component;

@Component
public class Laptop implements Computer {
    @Override
    public void compile(){
        System.out.println("Compile Laptop");
    }
    public void debug(){
        System.out.println("Debug Laptop");
    }
}
