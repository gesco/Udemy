using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _0435_Enums
{
    public enum ShippingMethod
    {
        RegularAirMail = 1,
        RegisteredAirMail = 2,
        Express = 3
    }

    public enum CustomerType
    {
        Bronze,
        Silver,
        Gold
    }

    class Program
    {
        static void Main(string[] args)
        {
            var method = ShippingMethod.Express;
            Console.WriteLine((int)method); // Returns 3

            var methodId = 3;
            Console.WriteLine((ShippingMethod)methodId); // Returns Express

            Console.WriteLine(method.ToString()); // Returns Express
            Console.WriteLine(method); // Returns Express

            var methodName = "Express";
            var shippingMethod = (ShippingMethod)Enum.Parse(typeof(ShippingMethod), methodName);

            var type = (int)CustomerType.Bronze;
            Console.WriteLine(type); // Returns 0
        }
    }
}
