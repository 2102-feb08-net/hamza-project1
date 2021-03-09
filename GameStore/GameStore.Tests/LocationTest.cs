using GameStore.Library.Model;
using System;
using Xunit;

namespace GameStore.Tests
{
    public class LocationTest
    {
        [Fact]
        public void IsOrderValid_ValidOrder_ReturnsTrue()
        {
            Order order = new();
            Location location = new();
            Product product1 = new();
            product1.Id = 0;
            product1.Name = "Banana";
            product1.Price = 1.99;
            int quantity1 = 2;
            Product product2 = new();
            product2.Id = 1;
            product2.Name = "Apple";
            product2.Price = 0.99;
            int quantity2 = 1;
            order.AddProduct(product1, quantity1);
            order.AddProduct(product2, quantity2);
            location.Inventory.Add(product1, quantity1);
            location.Inventory.Add(product2, quantity2);


            Assert.True(location.IsOrderValid(order));
        }

        [Fact]
        public void IsOrderValid_InvalidOrder_ReturnsFalse()
        {
            Order order = new();
            Location location = new();
            Product product1 = new();
            product1.Id = 0;
            product1.Name = "Banana";
            product1.Price = 1.99;
            int quantity1 = 2;
            Product product2 = new();
            product2.Id = 1;
            product2.Name = "Apple";
            product2.Price = 0.99;
            int quantity2 = 2;
            order.AddProduct(product1, quantity1);
            order.AddProduct(product2, quantity2);
            quantity1 = 1;
            quantity2 = 1;
            location.Inventory.Add(product1, quantity1);
            location.Inventory.Add(product2, quantity2);


            Assert.False(location.IsOrderValid(order));
        }
    }
}
