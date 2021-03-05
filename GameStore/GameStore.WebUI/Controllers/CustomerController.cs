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


    }
}
