﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheesecakeOrders.Data
{
    public class CheesecakeDetails
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int Quantity { get; set; }
        public string Base { get; set; }
        public string Toppings { get; set; }
        public string SpecialRequest { get; set; }
        public DateTime DeliveryDate { get; set; }
        public decimal Total { get; set; }

    }
}
