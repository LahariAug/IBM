package java8demo;
import java.util.Arrays;
import java.util.List;
import java.util.function.BiConsumer;
public class BiConsumerExample
{
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BiConsumer<Integer,Integer> bc1 = (x,y) -> 
		System.out.println(x+y);
		//		bc1.accept(10, 5);
		BiConsumer<Integer,Integer> bc2 = (x,y) -> 
		System.out.println(x*y);
		//		bc2.accept(10, 5);
		bc1.andThen(bc2).accept(10, 5);

		//check 2 lists size are same or not
		List<Integer> l1 = Arrays.asList(1,3,5,6);
		List<Integer> l2 = Arrays.asList(1,3,5,6,8);
		BiConsumer<List<Integer>,List<Integer>> sizeCheck = 
				(list1,list2) ->{
					if(list1.size() == list2.size()) {
						System.out.println(" yes, list size same");
					}else {
						System.out.println(" Nope, not same");
					}
				};
				sizeCheck.accept(l1, l2);
	}
	//consumer -> 1 input
	//biconsumer -> 2 input
}
