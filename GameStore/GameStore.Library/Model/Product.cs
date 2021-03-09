using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameStore.Library.Model
{
    /// <summary>
    /// Represents a product in a store's inventory.
    /// </summary>
    public class Product
    {
        /// <summary>
        /// The Id of the product.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// The name of the product.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The price of the product.
        /// </summary>
        public double Price { get; set; }

    }
}
