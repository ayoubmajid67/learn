package  code;

public class Main {

    public static void main(String[] args) {

        try{
            int result =  5/1;

            // create a custom exception :
             if(result==0 ) throw new MyException();
             System.out.println(result);
        }catch (ArithmeticException e){
            System.out.println(e.getMessage());
        }
    }
}