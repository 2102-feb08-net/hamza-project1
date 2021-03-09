using GameStore.Library.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace GameStore.Tests
{
    public class CustomerTest
    {
        private Customer customer = new();

        private void SetUp()
        {
            customer = new();
        }

        // valid name is 2-20 characters and English letters only
        [Fact]
        public void FirstName_ValidName_DoesNotThrowException()
        {
            SetUp();

            customer.FirstName = "Hamza";
        }

        // valid name is 2-20 characters and English letters only
        [Fact]
        public void FirstName_InvalidName_ThrowsException()
        {
            SetUp();

            Assert.Throws<ArgumentException>(() => customer.FirstName = "H");
        }

        // valid username is 5-15 characters and English letters and digits only
        [Fact]
        public void UserName_ValidName_DoesNotThrowException()
        {
            SetUp();

            customer.UserName = "HamzaB123";
        }

        // valid username is 5-15 characters and English letters and digits only
        [Fact]
        public void UserName_InvalidName_ThrowsException()
        {
            SetUp();

            Assert.Throws<ArgumentException>(() => customer.UserName = "H23");
        }
    }
}
