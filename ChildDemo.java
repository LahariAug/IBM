package multithreading;

public class ChildDemo
{
	public static void main(String[] args)
	{
		ChildDemo c = new ChildDemo();  // thread instantiating
		c.start();    // starting a thread 



		for(int i = 0; i<=10;i++)
		{
			Thread.currentThread().setName("spider man ");
			System.out.println("main thread is "+i + Thread.currentThread().getName());
		}
	}

	private void start() 
	{
		// TODO Auto-generated method stub
		
	}
}



