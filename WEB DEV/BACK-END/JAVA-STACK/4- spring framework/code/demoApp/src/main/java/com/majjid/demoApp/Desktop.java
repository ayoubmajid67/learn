package com.majjid.demoApp;


import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
public class Desktop implements Computer {
    @Override
    public void compile(){
        System.out.println("Compile Desktop");
    }
    public void debug(){
        System.out.println("Debug Desktop");
    }
}
