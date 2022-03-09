package com.example.EvenNumber;
import java.util.Scanner;

public class EvenNumber {

	public static void main(String[] args)
	{
		int n=20;
		Scanner s=new Scanner(System.in);
		System.out.println("Enter n value:");
		n=s.nextInt();
		if(n%2==0)
		{
			System.out.println(n +"is a even number");
		}
		else
		{
			System.out.println(n +"is not a even number");
		}
		
	}
}
