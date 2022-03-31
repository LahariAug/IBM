package java8demo;
import java.util.List;
import java.util.function.BiConsumer;
import java8demo.Person;
import java8demo.PersonRepository;
public class BiConsumerPersonExample 
{
	static List<Person> personList = PersonRepository.getAllPersons();
	static BiConsumer<String,List<String>> hobbies =
			(name,hobbies) -> System.out.println("Name is :" +name +" Hobbies are :"+ hobbies); 
			public static void main(String[] args)
			{
				fetchHobbies();
			}
			static void fetchHobbies()
			{
				personList.forEach(per ->{
					hobbies.accept(per.getName(), per.getHobbies());
				});
			}
}
