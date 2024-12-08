package code;


import java.util.*;
import java.util.function.Consumer;
import java.util.stream.Stream;

interface Shape {
    double area();
}

 record Circle(double radius) implements Shape {
    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}


public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle(5);
        System.out.println(circle.area()); // 78.53981633974483
    }
}