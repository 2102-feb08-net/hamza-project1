"use strict";

// send a request that contains customer name in the body to get all customers with that name
function searchCustomer(custName) {
    return fetch(`/api/search-customer/${custName}`).then(response => {
        if (!response.ok) {
            throw new Error(`Could not search customer. Network response was not ok (${response.status})`);
        }
        return response.json();
    });
}

// send a request that contains customer Id in the body to get the customer's order history
function getCustomerOrder(custId) {
    return fetch(`/api/get-customer-order-history/${custId}`).then(response => {
        if (!response.ok) {
            throw new Error(`Could not get customer order history. Network response was not ok (${response.status})`);
        }
        return response.json();
    });
}

// send a request to get all locations of the store
function getAllLocations() {
    return fetch(`/api/get-locations`).then(response => {
        if (!response.ok) {
            throw new Error(`Could not load the store locations. Network response was not ok (${response.status})`);
        }
        return response.json();
    });
}

// send a request that contains location Id in the body to get the location's order history
function getLocationOrder(locationId) {
    return fetch(`/api/get-location-order-history/${locationId}`).then(response => {
        if (!response.ok) {
            throw new Error(`Could not get location order history. Network response was not ok (${response.status})`);
        }
        return response.json();
    });
}

// send a request that contains customer data in the body to create a new customer
function createNewCustomer(customer) {
    return fetch('/api/create-customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    }).then(response => {
        if (!response.ok) {
            throw new Error(`Could not create customer. Network response was not ok (${response.status})`);
        }
    });
}

// send a request that contains order data in the body to create new order.
function placeOrder(customer) {
    return fetch('/api/place-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    }).then(response => {
        if (!response.ok) {
            throw new Error(`Could not place order. Network response was not ok (${response.status})`);
        }
    });
}