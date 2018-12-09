using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _0318_VarsAndConsts
{
    class Program
    {
        static void Main(string[] args)
        {
            //byte number = 2;
            //int count = 10;
            //float totalPrice = 20.95f;
            //char character = 'A';
            //string firstName = "Mosh";
            //bool isWorking = false;

            const float Pi = 3.14f;

            var number = 2;
            var count = 10;
            var totalPrice = 20.95f;
            var character = 'A';
            var firstName = "Mosh";
            var isWorking = false;

            Console.WriteLine(number);
            Console.WriteLine(count);
            Console.WriteLine(totalPrice);
            Console.WriteLine(character);
            Console.WriteLine(firstName);
            Console.WriteLine(isWorking);

            Console.WriteLine("{0} {1}", byte.MinValue, byte.MaxValue);
            Console.WriteLine("{0} {1}", byte.MinValue, byte.MaxValue);
        }
    }
}
