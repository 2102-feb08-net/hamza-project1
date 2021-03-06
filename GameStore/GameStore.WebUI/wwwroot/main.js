"use strict";

function searchCustomer(custName) {
    return fetch(`/api/search-customer/${custName}`).then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.json();
    });
}

function getCustomerOrder(custId) {
    return fetch(`/api/get-customer-order-history/${custId}`).then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.json();
    });
}

function getAllLocations() {
    return fetch(`/api/get-locations`).then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.json();
    });
}

function getLocationOrder(locationId) {
    return fetch(`/api/get-location-order-history/${locationId}`).then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
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
            throw new Error(`Network response was not ok (${response.status})`);
        }
    });
}