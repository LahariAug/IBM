package java8demo;
import java.util.List;
import java.util.function.Consumer;
import java8demo.Person;
import java8demo.PersonRepository;
public class ConsumerPersonExample
{
	static List<Person> personList = PersonRepository.getAllPersons();
	static Consumer<Person> c1 = (per) -> System.out.println(per.getName().length());
	static Consumer<Person> c2 = (per) -> 
	System.out.println(per.getName().toLowerCase());
	public static void main(String[] args) {
		// TODO Auto-generated method stub



		//			personList.forEach(c1);
		//			personList.forEach(c2);
		//			personList.forEach(c1.andThen(c2));
		//		c1.accept("hello");
		printWithCondition();

	}
	// malewhose heightgt 140 for boys basketball team 
	static void printWithCondition(){

		personList.forEach(per ->{
			if(per.getGender().equals("Male") && (per.getHeight()>140)) {
				c1.andThen(c2).accept(per);
			}

		});
	}


}
