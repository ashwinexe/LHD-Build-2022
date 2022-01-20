import java.util.*;

class Reverse{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        String text = s.nextLine();

        String reverseText = new StringBuffer(text).reverse().toString();

        System.out.println(reverseText);


        s.close();
    }

    // public static String reverse_text(String x)
    // {

    // }
}