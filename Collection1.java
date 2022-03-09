package collection1;
import java.util.LinkedList;
import java.util.ListIterator;
public class Collection1
{
	public static void main(String[] args)
	{
		LinkedList l = new LinkedList();
		l.add("A");
		l.add("B");
		l.add("C");
		l.add("java");
		System.out.println(l);
		ListIterator listIterator = l.listIterator();
		listIterator.add("PROG"); // ---> added first
		while (listIterator.hasNext())
		{
			if (listIterator.next().equals("C"))
			{
				listIterator.set(100); 
			}
			System.out.println(listIterator.next());
		}
		System.out.println(l);
	}
}



