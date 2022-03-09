package com.example.ifStatement;

public class ifStatement 
{
	public static void main(String[] args)
	{
		int x=10;
		float y=10.1f;
		if(x+y>20)
		{
			System.out.println("x+y is greater than 20");
		}
		else if(x+y<20)
		{
			System.out.println("x+y is less than 20");
		}
		else
		{
			System.out.println("x+y is equal to 20");
		}
	}
}
