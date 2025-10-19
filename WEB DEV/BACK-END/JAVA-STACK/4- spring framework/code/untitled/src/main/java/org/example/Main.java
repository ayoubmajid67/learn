package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.

@FunctionalInterface
interface  Telephone{
     void hi(int k);
}




public class Main {
    public static void main(String[] args) {
        Telephone telephone1 = new Telephone() {
            public void hi(int k) {
                System.out.println("hi" + k);
            }

        };


        Telephone telephone2=(int k)-> {
            System.out.println("hi" + k);
        };

        Telephone telephone3=k-> {
            System.out.println("hi" + k);
        };


        telephone2.hi(10);
        telephone1.hi(12);
        






    }
}