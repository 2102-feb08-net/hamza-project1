using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace GameStore.Library.Model
{
    /// <summary>
    /// Represents a customer of the store.
    /// </summary>
    public class Customer
    {
        public int Id { get; set; }
        private string _firstName;
        private string _lastName;
        private string _userName;
        private string _city;
        private string _state;

        /// <summary>
        /// The first name of the customer.
        /// Throws an ArgumentException if the characters aren't english letters and between 2-20 characters.
        /// </summary>
        public string FirstName
        {
            get => _firstName;
            set
            {
                if (!value.All(Char.IsLetter))
                {
                    throw new ArgumentException("||Can only input English letters for names||");
                }
                else if (value.Length < 2 || value.Length > 20)
                {
                    throw new ArgumentException("||Input size must be 2-20 letters for names||");
                }
                else
                {
                    _firstName = value;
                }
            }
        }

        /// <summary>
        /// The last name of the customer.
        /// Throws an ArgumentException if the characters aren't english letters and between 2-20 characters.
        /// </summary>
        public string LastName
        {
            get => _lastName;
            set
            {
                if (!value.All(Char.IsLetter))
                {
                    throw new ArgumentException("||Can only input English letters for names||");
                }
                else if (value.Length < 2 || value.Length > 20)
                {
                    throw new ArgumentException("||Input size must be 2-20 letters for names||");
                }
                else
                {
                    _lastName = value;
                }
            }
        }

        /// <summary>
        /// The user name of the customer.
        /// Throws an ArgumentException if the characters aren't english letters or digits and between 5-15 characters.
        /// </summary>
        public string UserName
        {
            get => _userName;
            set
            {
                if (!value.All(Char.IsLetterOrDigit))
                {
                    throw new ArgumentException("||Can only input English letters and numbers for usernames||");
                }
                else if (value.Length < 5 || value.Length > 15)
                {
                    throw new ArgumentException("||Input size must be 5-15 for usernames||");
                }
                else
                {
                    _userName = value;
                }
            }
        }

        /// <summary>
        /// The city where the customer is from.
        /// Throws an ArgumentException if the characters aren't english letters and between 2-20 characters.
        /// </summary>
        public string City
        {
            get => _city;
            set
            {
                string pattern = "^[A-Za-z ]+$";
                Regex regex = new Regex(pattern);
                if (!regex.IsMatch(value))
                {
                    throw new ArgumentException("||Can only input English letters for cities||");
                }
                else if (value.Length < 2 || value.Length > 20)
                {
                    throw new ArgumentException("||Input size must be 2-20 letters for cities||");
                }
                else
                {
                    _city = value;
                }
            }
        }

        /// <summary>
        /// The state where the customer is from.
        /// Throws an ArgumentException if the characters aren't english letters and between 2-20 characters.
        /// </summary>
        public string State
        {
            get => _state;
            set
            {
                string pattern = "^[A-Za-z ]+$";
                Regex regex = new Regex(pattern);
                if (!regex.IsMatch(value))
                {
                    throw new ArgumentException("||Can only input English letters for states||");
                }
                else if (value.Length < 2 || value.Length > 20)
                {
                    throw new ArgumentException("||Input size must be 2-20 letters for states||");
                }
                else
                {
                    _state = value;
                }
            }
        }

        /// <summary>
        /// The full name of the customer.
        /// </summary>
        public string GetFullName() => FirstName + " " + LastName;
    }
}
