"use strict";

function searchCustomer(custName) {
    return fetch(`/api/search-customer/${custName}`).then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.json();
    });
}

