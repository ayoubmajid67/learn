package com.majjid.demoApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("laptop")
public class Dev {

    @Autowired
    @Qualifier("laptop")
    Computer computer;



    public void build(){
         System.out.println("working on a awesome project");
         computer.compile();


    }
}
