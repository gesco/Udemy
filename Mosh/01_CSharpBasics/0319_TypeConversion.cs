using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _0319_TypeConversion
{
    class Program
    {
        static void Main(string[] args)
        {
            // Implicit Type Conversion
            //byte b = 1;                           // One byte                                00000001
            //int i = b;                            // Four bytes   00000000 00000000 00000000 00000001
            //Console.WriteLine(i);

            // Explicit conversion - chance for data loss
            //int i = 1;
            //byte b = (byte)i;                     
            //Console.WriteLine(b);

            // Explicit Type Conversion
            //float f = 1.0f;
            //int i = (int)f;

            // Non-compatible types
            //string s = "1";
            //int i = (int)s;                       // won't compile
            //int i = Convert.ToInt32(s);
            //int j = int.Parse(s);

            //var number = "1234";
            ////int i = (int)number;                // Cannot cast expression of type 'string' to type 'int'
            //int i = Convert.ToInt32(number);

            //var number = "1234";
            //byte b = Convert.ToByte(number);      // Unhandled Exception
            //Console.WriteLine(b);

            //try
            //{
            //    var number = "1234";
            //    byte b = Convert.ToByte(number);
            //    Console.WriteLine(b);
            //}
            //catch (Exception)
            //{
            //    Console.WriteLine("Then number could not be converted to a byte.");
            //}

            try
            {
                string str = "true";
                bool b = Convert.ToBoolean(str);
                Console.WriteLine(b);
            }
            catch (Exception)
            {
                Console.WriteLine("The number could not be converted to a byte.");
            }            
        }
    }
}
