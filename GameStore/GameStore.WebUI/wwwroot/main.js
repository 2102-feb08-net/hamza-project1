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