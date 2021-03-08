'use strict';

const pickCustomer = document.getElementById('pick-customer');
const customerForm = document.getElementById('customer-form');
const customerTable = document.getElementById('customer-table');
const pickLocation = document.getElementById('pick-location');
const locationTable = document.getElementById('location-table');
const orderFor = document.getElementById('order-for');
const customerNameSpan = document.getElementById('customer-name');
const locationNameSpan = document.getElementById('location-name');
const locationInventory = document.getElementById('location-inventory');
const inventoryTable = document.getElementById('inventory-table');
const quantityForm = document.getElementById('quantity-form');
const quantitySubmit = document.getElementById('quantity-submit');
const closeButton = document.getElementById('close');
const shoppingCart = document.getElementById('shopping-cart');
const shoppingCartTable = document.getElementById('shopping-cart-table');
const totalPrice = document.getElementById('total-price');
const submitOrder = document.getElementById('submit-order');
const discardCart = document.getElementById('discard-cart');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');
let _customerId = null;
let _customerName = '';
let _locationId = null;
let _locationName = '';
let _products = [];
let _quantities = [];
let _totalPrice = 0;

customerForm.addEventListener('submit', event => {
    event.preventDefault();

    let firstname = customerForm.elements['fname'].value;
    let lastname = customerForm.elements['lname'].value;
    let fullName = firstname + ' ' + lastname;
    const customerResult = document.getElementById('customer-result');

    let counter = 1;
    searchCustomer(fullName)
        .then(list => {
            for (const customer of list) {
                //username | first | last | city | state
                const row = customerResult.insertRow();
                row.innerHTML = `<td>${counter}</td>
                                 <td>${customer.userName}</td>
                                 <td>${customer.firstName}</td>
                                 <td>${customer.lastName}</td>
                                 <td>${customer.city}</td>
                                 <td>${customer.state}</td>`;
                row.addEventListener('click', () => {
                    _customerId = customer.id;
                    _customerName = fullName;
                    customerNameSpan.innerHTML = _customerName;
                    pickCustomer.hidden = true;
                    listLocations();
                });
                counter++;
            }
        })
        .catch(error => {
            alert(error.toString());
        });


    customerTable.hidden = false;
});

function listLocations() {
    const locationResult = document.getElementById('location-result');

    let counter = 1;
    getAllLocations()
        .then(list => {
            for (const slocation of list) {
                //# | Location ID | Location City | Location State |
                const row = locationResult.insertRow();
                row.innerHTML = `<td>${counter}</td>
                             <td>${slocation.id}</td>
                             <td>${slocation.city}</td>
                             <td>${slocation.state}</td>`;
                row.addEventListener('click', () => {
                    _locationId = slocation.id;
                    _locationName = slocation.city + ', ' + slocation.state;
                    locationNameSpan.innerHTML = _locationName;
                    pickLocation.hidden = true;
                    listInventory(slocation);
                });
                counter++;
            }
            pickLocation.hidden = false;
        })
        .catch(error => {
            alert(error.toString());
        });
}

function listInventory(slocation) {
    document.getElementById('initial-text').hidden = true;
    orderFor.hidden = false;

    const inventoryResult = document.getElementById('inventory-result');

    let counter = 1;
    let products = slocation.products;
    let quantities = slocation.productQuantities;
    for (let i = 0; i < products.length; i++) {
        const row = inventoryResult.insertRow();
        row.innerHTML = `<td>${counter}</td>
                         <td>${products[i].name}</td>
                         <td>${quantities[i]}</td>
                         <td>$${products[i].price}</td>`;
        row.addEventListener('click', () => {
            let productToAdd = products[i];
            askQuantity(productToAdd);
        });
        counter++;
    }
    locationInventory.hidden = false;
    totalPrice.innerHTML = '0';
    shoppingCart.hidden = false;
}

function askQuantity(product) {
    $('#product-quantity-modal').modal('show');

    quantitySubmit.onclick = function () {
        let amount = parseInt(quantityForm.elements['quantity'].value);

        if (isNaN(amount)) {
            alert('Enter a number');
        } else if (amount < 1 || amount > 3) {
            alert('Quantity must be between 1-3')
        } else {
            _products.push(product);
            _quantities.push(amount);

            $('#product-quantity-modal').modal('hide');
            displayShoppingCart();
        }
        
    }
}

function displayShoppingCart() {
    const shoppingCartResult = document.getElementById('shopping-cart-result');
    shoppingCartResult.innerHTML = '';

    let total = 0;
    for (let i = 0; i < _products.length; i++) {
        const row = shoppingCartResult.insertRow();
        row.innerHTML = `<td>${i+1}</td>
                         <td>${_products[i].name}</td>
                         <td>${_quantities[i]}</td>
                         <td>$${_products[i].price * _quantities[i]}</td>`;
        total += _products[i].price * _quantities[i];
    }
    _totalPrice = total;

    totalPrice.innerHTML = String(total);

    shoppingCart.hidden = false;
}

submitOrder.onclick = function () {
    const order = {
        customerId: _customerId,
        locationId: _locationId,
        totalPrice: _totalPrice,
        products: _products,
        productQuantities: _quantities
    }

    placeOrder(order)
        .then(() => {
            successMessage.textContent = 'Order placed successfully';
            successMessage.hidden = false;
        })
        .catch(error => {
            errorMessage.textContent = error.toString();
            errorMessage.hidden = false;
        });
}

discardCart.onclick = function () {
    _products = [];
    _quantities = [];
    displayShoppingCart();
    alert('Discarded shopping cart');
}