package com.example.primeexample;

public class PrimeExample 
{
	public static void main(String args[])
	{
		int i,m=0,flag=0;
		int n=5;
		m=n/2;
		if(n==0||n==1)
		{
			System.out.println(n+"is prime nmuber");
		}
		else
		{
			System.out.println(n+"is not prime number");
			flag=1;
		}
		if(flag==0)
		{
			System.out.println(n+"is prime number");
		}
	}
}