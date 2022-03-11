package garbagecollection;

public class GarbageCollection 
{
	public static void main(String[] args)
	{
		String s = new String(" hello team mates ");
		s=null;
		System.gc();
		System.out.println(" end of ");
	}

	public void finalize()
	{
		System.out.println(" finalize is valled");
	}
}
