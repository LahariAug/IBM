package java8demo;
import java.util.function.Consumer;
public class ConsumerExample
{
	public static void main(String[] args) 
	{
			// TODO Auto-generated method stub
			Consumer<String> c1 = (s) -> System.out.println(s.length());
			//c1.accept("HELLO");
			Consumer<String> c2 = (s) -> System.out.println(s.toUpperCase());
			//c2.accept(" hi" );
			c1.andThen(c2).accept(" java 8 feature IS" );
			Consumer<Integer> c3 = (s) -> System.out.println(s+5);
			c3.accept(5);
			//c1.andThen(c3).accept("elo");
			Consumer<Integer> c4 = (s) -> System.out.println(s*5);
			c4.accept(10);
			c4.andThen(c3).accept(5);
	}
}

