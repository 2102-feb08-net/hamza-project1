"use strict";

const search = document.getElementById("search-button");
const create = document.getElementById("create-button");
const searchCustomer = document.getElementById("search-customer");
const searchCustomerForm = document.getElementById("search-customer-form");
const custTable = document.getElementById("customer-table");
const newCust = document.getElementById("new-customer");

search.onclick = function () {
    newCust.hidden = true;
    searchCustomer.hidden = false;
}

create.onclick = function () {
    searchCustomer.hidden = true;
    custTable.hidden = true;
    newCust.hidden = false;
}

searchCustomerForm.addEventListener('submit', event => {
    event.preventDefault();
    
    custTable.hidden = false;

    alert("Searching...");
});