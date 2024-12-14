package org.example;

import org.junit.jupiter.api.Test;

import java.time.Duration;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class ServiceTest {

    @Test
    void getNameTest(){
        Service service = new Service("loading");

        assertEquals("loading", service.getName());
    }
    @Test
    void reverseStringTest(){
        String result = Service.reverseString("hello");
        assertEquals("olleh",result);

    }
    @Test()
    void test(){

       assertTimeout(Duration.ofMillis(1),()->{
           for(int i =0 ; i <10000 ;i++){
               Service service = new Service("loading");
           }
       });
    }
    @Test
    void testExecutionTimeWithReturnValue() {
        String result = assertTimeout(Duration.ofMillis(500), () -> {
            // Code that computes and returns a value
            Thread.sleep(300);
            return "Completed";
        });

        assertEquals("Completed", result);
    }
}