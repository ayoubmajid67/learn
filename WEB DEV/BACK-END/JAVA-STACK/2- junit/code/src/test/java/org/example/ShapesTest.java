package org.example;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

// default : @TestInstance(TestInstance.Lifecycle.PER_METHOD) create an instance for each  @test function
@TestInstance(TestInstance.Lifecycle.PER_CLASS) // create an instance just one time
class ShapesTest {
 Shapes shapes;
 ShapesTest(){
     System.out.println("creating new shapes");
 }

 @BeforeAll
 // in this case you don't have to make this function static :
 void setUpBeforeClass() {
     System.out.println("\n--------shapes Test ---------------\n");
 }
    @AfterAll
    // in this case you don't have to make this function static :
    static void setUpAfterClass(){
        System.out.println("\n---------------------------\n");
    }
 @BeforeEach
    void init(){
        shapes = new Shapes();
        System.out.println("Hello world");
    }


    @Test
    void testComputeSquareArea() {

      assertEquals(25,shapes.computeSquareArea(5));
    }
    @Test
    void testComputeCircleArea() {

        assertEquals(25,shapes.computeCircleArea(5));
    }

    @AfterEach
    void destroy(){
        shapes = null;
    }


}