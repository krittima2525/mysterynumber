import java.util.Scanner;
public class MysteryNumber
{
    static int reverse(int n)  
    {
        int reverseNum=0,temp=n,r;
        while (temp > 0)
        {
            r = temp % 10;
            reverseNum = (reverseNum * 10) + r;
            temp = temp / 10;
        }
        return reverseNum;
    }
    
    public static void main(String args[])
    {
        boolean isMysteryNumber=false;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt(); 
        System.out.println(num);
        for (int n = 1; n <= num / 2; n++)
        {
            int rev_n=reverse(n);
            if (n + rev_n == num)
            {    
                isMysteryNumber=true;
                System.out.println(n + " " + rev_n);
            }
        }
        if (isMysteryNumber)
        {    
            System.out.println(num + " is a mystery number.");
        }
        else
        {
            System.out.println("The given number is not a mystery number.");
        }        
    }
}
