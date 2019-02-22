using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _0438_RefTypeValueType
{
    public class Person
    {
        public int Age;
    }

    class Program
    {
        static void Main(string[] args)
        {
            var number = 1;
            Increment(number);
            
            // It's going to be one because it is a value type
            Console.WriteLine(number); // Returns 1

            // Example of a reference type
            var person = new Person() { Age = 20 };
            MakeOld(person);
            Console.WriteLine(person.Age); // Returns 30
        }

        public static void Increment(int number)
        {
            number += 10;
        }

        public static void MakeOld(Person person)
        {
            person.Age += 10;
        }
    }
}
