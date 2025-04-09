package org.example;

public class Dev {

Computer com;

   public void setCom(Computer com) {
        this.com = com;
    }

    public Dev(){


    }
  public   Dev(Computer com) {
    this.com = com;

    }

//  constructor injection :
    public void build(){
         System.out.println("working on a awesome project");
         com.compile();

    }

}
