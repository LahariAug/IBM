package com.example.HelloExample;
import java.util.Scanner;
public class HelloExample
{
	public static void main(String[] args)
	{
		String string="HELLO";
		String reversedstr=" ";
		for(int i=string.length()-1;i>=0;i--)
		{
			reversedstr=reversedstr+string.charAt(i);
		}
		System.out.println("Original string:"+string);
		System.out.println("Reverse of given string:"+reversedstr);
	}
}
