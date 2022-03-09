package com.example.Pizza;
import java.util.Scanner;
public class Pizza 
{
	public static void main(String[] args)
	{
		Scanner scan = new Scanner(System.in);
	    System.out.print("Enter the String: ");
	    String strUpper = scan.nextLine();
	    String strLower = strUpper.toLowerCase();
	    System.out.println("\nEquivalent String in Lowercase: " +strLower);
	}
	

}
