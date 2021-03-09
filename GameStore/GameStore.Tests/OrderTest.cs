using GameStore.Library.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace GameStore.Tests
{
    public class OrderTest
    {
        private Product product = new();
        private Order order = new();

        private void SetUp()
        {
            product.Id = 0;
            product.Name = "Banana";
            product.Price = 1.99;
            order = new();
            order.ProductQuantities = new();
        }

        //(should pass if it does not throw exception)
        [Fact]
        public void AddProduct_ValidQuantity_DoesNotThrowException()
        {
            SetUp();
            int quantity = 2;

            
            order.AddProduct(product, quantity);
        }
        
        [Fact]
        public void AddProduct_InvalidQuantity_ThrowsException()
        {
            SetUp();
            int quantity = 4;

            
            Assert.Throws<ArgumentException>(() => order.AddProduct(product, quantity));
        }

        [Fact]
        public void CheckQuantity_ValidQuantity_DoesNotThrowException()
        {
            SetUp();
            int quantity = 2;
            order.ProductQuantities.Add(quantity);


            order.CheckQuantity();
        }

        [Fact]
        public void CheckQuantity_InvalidQuantity_ThrowsException()
        {
            SetUp();
            int quantity = 4;
            order.ProductQuantities.Add(quantity);


            Assert.Throws<ArgumentException>(() => order.CheckQuantity());
        }
    }
}
