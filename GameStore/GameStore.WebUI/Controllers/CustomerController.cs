using GameStore.Library.Interfaces;
using GameStore.Library.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameStore.WebUI.Controllers
{
    [ApiController]
    public class CustomerController
    {
        private readonly IGameStoreRepository _gameStoreRepository;

        public CustomerController(IGameStoreRepository gameStoreRepository)
        {
            _gameStoreRepository = gameStoreRepository;
        }


        [HttpGet("api/search-customer/{name}")]
        public IEnumerable<Customer> GetCustomer(string name)
        {
            return _gameStoreRepository.SearchCustomerName(name);
        }

        [HttpGet("api/get-customer-order-history/{id}")]
        public IEnumerable<Order> GetCustomerOrder(int id)
        {
            Customer customer = new();
            customer.Id = id;
            return _gameStoreRepository.GetCustomerOrderHistory(customer);
        }

        [HttpGet("api/get-locations")]
        public IEnumerable<Location> GetLocations()
        {
            return _gameStoreRepository.GetAllLocations();
        }

        [HttpGet("api/get-location-order-history/{id}")]
        public IEnumerable<Order> GetLocationOrder(int id)
        {
            Location location = new();
            location.Id = id;
            return _gameStoreRepository.GetLocationOrderHistory(location);
        }

    }
}
