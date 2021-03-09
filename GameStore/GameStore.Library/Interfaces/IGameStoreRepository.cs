using GameStore.Library.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameStore.Library.Interfaces
{
    /// <summary>
    /// The repository that allows us to access the data in the database.
    /// </summary>
    public interface IGameStoreRepository
    {
        /// <summary>
        /// Searches for the customer with the given name in the database.
        /// </summary>
        /// <param name="name"></param>
        /// <returns>A list of all the customers with that name.</returns>
        IEnumerable<Library.Model.Customer> SearchCustomerName(string name);

        /// <summary>
        /// Gets the order history of the customer.
        /// </summary>
        /// <param name="customer"></param>
        /// <returns>A list of all the orders made by that customer.</returns>
        IEnumerable<Library.Model.Order> GetCustomerOrderHistory(Customer customer);

        /// <summary>
        /// Gets all the store locations.
        /// </summary>
        /// <returns>A list of all the store locations</returns>
        IEnumerable<Library.Model.Location> GetAllLocations();

        /// <summary>
        /// Gets the order history of a location.
        /// </summary>
        /// <param name="location"></param>
        /// <returns>A list of all the orders made in that location.</returns>
        IEnumerable<Library.Model.Order> GetLocationOrderHistory(Location location);

        /// <summary>
        /// Creates a customer in the database.
        /// </summary>
        /// <param name="customer"></param>
        void CreateCustomer(Customer customer);

        /// <summary>
        /// Creates an order in the database
        /// </summary>
        /// <param name="order"></param>
        void CreateOrder(Order order);

        /// <summary>
        /// Creates an order line in the database.
        /// </summary>
        /// <param name="productId"></param>
        /// <param name="quantity"></param>
        void CreateOrderLine(int productId, int quantity);

        /// <summary>
        /// Saves the changes to the database.
        /// </summary>
        void Save();
    }
}
