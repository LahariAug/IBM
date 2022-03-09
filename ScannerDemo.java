package com.example.ScannerDemo;
import java.util.Scanner;
public class ScannerDemo
{

	public static void main(String[] args) 
	{
		int number1 = 10;
		int number2 = 20;
		System.out.println(number1+number2);
		int number;
      
      Scanner s = new Scanner(System.in);
      System.out.println("Entered string is :" );
      String name = s.next();
      String name1= s.next();
      String name2= s.next();
      System.out.println("received string is: "+ "\n" +name+"\n"+ name1 +"\n" +name2);
      s.close();
	}
}

		
