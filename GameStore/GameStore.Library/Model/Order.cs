using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameStore.Library.Model
{
    public class Order
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int LocationId { get; set; }
        public DateTime TimePlaced { get; set; }
        public double TotalPrice { get; set; }
        public List<Product> Products { get; set; }
        public List<int> ProductQuantities { get; set; }

        public Dictionary<Product, int> ShoppingCart { get; set; } = new();



        public void BuildShoppingCart()
        {
            for (int i = 0; i < Products.Count; i++)
            {
                ShoppingCart.Add(Products[i], ProductQuantities[i]);
            }
        }


        /// <summary>
        /// Adds the product and quantity to the shopping cart.
        /// Checks if the quantity is greater than 3. If it is, throws an ArgumentException.
        /// </summary>
        public void AddProduct(Product product, int quantity)
        {
            if (quantity > 3)
            {
                throw new ArgumentException("Quantity cannot be larger than 3.");
            }
            else
            {
                ShoppingCart.Add(product, quantity);
            }
        }

        /// <summary>
        /// Checks if quantity is between 1-3. If it is not, throws an ArgumentException.
        /// </summary>
        public void CheckQuantity()
        {
            foreach(var quantity in ProductQuantities)
            {
                if(quantity > 3 || quantity < 1)
                {
                    throw new ArgumentException("Quantity on orders must be between 1-3");
                }
            }
        }
    }
}
