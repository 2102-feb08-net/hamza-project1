using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameStore.Library.Model
{
    /// <summary>
    /// Represents a physical location of the store.
    /// </summary>
    public class Location
    {

        /// <summary>
        /// Location's Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// The city where the location is.
        /// </summary>
        public string City { get; set; }

        /// <summary>
        /// The city where the location is.
        /// </summary>
        public string State { get; set; }

        /// <summary>
        /// All the products the location has in it's inventory.
        /// </summary>
        public List<Product> Products { get; set; }

        /// <summary>
        /// The quantities of each product in the inventory.
        /// </summary>
        public List<int> ProductQuantities { get; set; }

        /// <summary>
        /// The products and quantities in dictionary format.
        /// </summary>
        public Dictionary<Product, int> Inventory { get; set; } = new();

        /// <summary>
        /// Builds the inventory using the products and quantities.
        /// </summary>
        public void BuildInventory()
        {
            for (int i = 0; i < Products.Count; i++)
            {
                Inventory.Add(Products[i], ProductQuantities[i]);
            }
        }

        /// <summary>
        /// Checks if the inventory has the quantities specified in the order.
        /// </summary>
        public bool IsOrderValid(Order order)
        {
            foreach (var cartItem in order.ShoppingCart)
            {
                foreach (var invItem in Inventory)
                {
                    if (invItem.Key.Name == cartItem.Key.Name && invItem.Value >= cartItem.Value)
                    {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
