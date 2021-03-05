using GameStore.Library.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameStore.Library.Interfaces
{
    interface IGameStoreRepository
    {
        IEnumerable<Library.Model.Customer> SearchCustomerName(string name);

        IEnumerable<Library.Model.Order> GetCustomerOrderHistory(Customer customer);

        IEnumerable<Library.Model.Location> GetAllLocations();

        IEnumerable<Library.Model.Order> GetLocationOrderHistory(Location location);

        void CreateCustomer(Customer customer);

        void CreateOrder(Order order);

        void CreateOrderLine(int productId, int quantity);

        void Save();
    }
}
