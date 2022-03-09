package com.example.TreeSet1;
import java.util.*;
class TreeSet1
{
	public static void main(String[] args)
	{
		TreeSet<String> ts=new TreeSet<String>();  
		ts.add("Ravi");  
		ts.add("Vijay");  
		ts.add("Ravi");  
		ts.add("Ajay");  
		//Traversing elements  
		Iterator<String> itr=ts.iterator();  
		while(itr.hasNext())
		{  
			System.out.println(itr.next());  
		}
	}
}
