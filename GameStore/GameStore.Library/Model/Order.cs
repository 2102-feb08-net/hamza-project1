using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameStore.Library.Model
{
    /// <summary>
    /// Represents an order made by a customer.
    /// </summary>
    public class Order
    {
        /// <summary>
        /// The order's Id.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// The Id of the customer that made the order.
        /// </summary>
        public int CustomerId { get; set; }

        /// <summary>
        /// The Id of the location the order is being placed at.
        /// </summary>
        public int LocationId { get; set; }

        /// <summary>
        /// The time that the order was placed.
        /// </summary>
        public DateTime TimePlaced { get; set; }

        /// <summary>
        /// Total price of all the products in the order.
        /// </summary>
        public double TotalPrice { get; set; }

        /// <summary>
        /// All the products bought by the customer in the order.
        /// </summary>
        public List<Product> Products { get; set; }

        /// <summary>
        /// The quantities of all the products bought by the customer in the order.
        /// </summary>
        public List<int> ProductQuantities { get; set; }

        /// <summary>
        /// The products and quantities in a dictionary format.
        /// </summary>
        public Dictionary<Product, int> ShoppingCart { get; set; } = new();

        /// <summary>
        /// Builds the shopping cart from the products and quantities properties.
        /// </summary>
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
