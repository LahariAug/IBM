package treeSet1;
import java.util.*;
public class TreeSet1 
{
	public static void main(String[] args)
	{
		TreeSet<String> ts=new TreeSet<String>();  
		ts.add("Daddy");  
		ts.add("Mummy");  
		ts.add("Munny");  
		ts.add("Chintu");  
		//Traversing elements  
		Iterator<String> itr=ts.iterator();  
		while(itr.hasNext())
		{  
			System.out.println(itr.next());  
		}
	}
}

