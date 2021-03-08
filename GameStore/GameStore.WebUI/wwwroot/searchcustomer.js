'use strict';

const search = document.getElementById('search-button');
const create = document.getElementById('create-button');
const searchCustomerSection = document.getElementById('search-customer');
const customerForm = document.getElementById('search-customer-form');
const custTable = document.getElementById('customer-table');
const searchResult = document.getElementById('search-result');
const newCust = document.getElementById('new-customer');
const newCustomerForm = document.getElementById('new-customer-form');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

search.onclick = function () {
    newCust.hidden = true;
    successMessage.hidden = true;
    errorMessage.hidden = true;
    searchCustomerSection.hidden = false;
}

create.onclick = function () {
    searchCustomerSection.hidden = true;
    custTable.hidden = true;
    newCust.hidden = false;
}


customerForm.addEventListener('submit', event => {
    event.preventDefault();

    let firstname = customerForm.elements['fname'].value;
    let lastname = customerForm.elements['lname'].value;
    let fullName = firstname + ' ' + lastname;

    searchResult.innerHTML = '';
    let counter = 1;
    searchCustomer(fullName)
        .then(list => {
            for (const customer of list) {
                //username | first | last | city | state
                const row = searchResult.insertRow();
                row.innerHTML = `<td>${counter}</td>
                                 <td>${customer.userName}</td>
                                 <td>${customer.firstName}</td>
                                 <td>${customer.lastName}</td>
                                 <td>${customer.city}</td>
                                 <td>${customer.state}</td>`;
                row.addEventListener('click', () => {
                    sessionStorage.removeItem('locationId');
                    sessionStorage.setItem('customerId', customer.id);
                    sessionStorage.setItem('customerName', fullName);
                    location = 'order.html';
                });
                counter++;
            }
        })
        .catch(error => {
            alert(error.toString());
        });


    custTable.hidden = false;
});

newCustomerForm.addEventListener('submit', event => {
    event.preventDefault();

    let _firstName = newCustomerForm.elements['firstname'].value;
    let _lastName = newCustomerForm.elements['lastname'].value;
    let _userName = newCustomerForm.elements['username'].value;
    let _city = newCustomerForm.elements['city'].value;
    let _state = newCustomerForm.elements['state'].value;

    const customer = {
        firstName: _firstName,
        lastName: _lastName,
        userName: _userName,
        city: _city,
        state: _state
    }

    createNewCustomer(customer)
        .then(() => {
            successMessage.textContent = 'Customer Created!';
            successMessage.hidden = false;
        })
        .catch(error => {
            errorMessage.textContent = error.toString();
            errorMessage.hidden = false;
        });
})