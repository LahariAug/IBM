package com.example.Interface;
public class Class implements Interface
{
	public static void main(String[] args)
	{
		Class a=new Class();
		a.print();
	}
	static void print()
	{
		System.out.println("print");
	}
	public void add()
	{
		System.out.println("2+3");
	}
	public void sub()
	{
		System.out.println("3-2");
	}