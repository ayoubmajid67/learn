package org.example;

public class Service {
    private String name;

    Service(String name) {
        this.name = name;

    }

    Service() {

    }

    String getName() {
        return name;
    }

    void setName(String name) {
        this.name = name;
    }

   static   public String reverseString(String input) {
        char[] arr = input.toCharArray();


        for(int i = input.length() - 1; i >= 0; i--) {
            arr[input.length() - i - 1] = input.charAt(i);

        }


        return new String(arr);

    }

}
