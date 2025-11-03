import java.util.Scanner;
public class Boolean{
    public static void main(String[] args){
        Scanner ac = new Scanner(System.in);
        int a=ac.nextInt();
        int b=ac.nextInt();
        int m=a*b;
        String c=Integer.toBinaryString(m);
        System.out.println(c);
        
    }
}

