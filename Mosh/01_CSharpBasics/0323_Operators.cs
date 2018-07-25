using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _0323_Operators
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = 1;
            var b = 2;
            var c = 3;

            Console.WriteLine((a + b) * c);         //9
            Console.WriteLine(a / b);               //0
            Console.WriteLine((float)a / (float)b); //0.5
            Console.WriteLine(a > b);               //False
            Console.WriteLine(a == b);              //False
            Console.WriteLine(a != b);              //True
            Console.WriteLine(!(a != b));           //False
            Console.WriteLine(c > b && c > a);      //True
            Console.WriteLine(c > b && c == a);     //False
            Console.WriteLine(c > b || c == a);     //True
            Console.WriteLine(!(c > b || c == a));  //False
        }
    }
}
