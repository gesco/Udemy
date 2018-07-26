using _0428_Classes.Math;
using System;


namespace _0428_Classes
{

    class Program
    {
        static void Main(string[] args)
        {
            //Person john = new Person();
            var john = new Person();

            john.FirstName = "John";
            john.LastName = "Smith";
            john.Introduce();

            Calculator calculator = new Calculator();
            var result = calculator.Add(1, 2);
            Console.WriteLine(result);
        }
    }
}
