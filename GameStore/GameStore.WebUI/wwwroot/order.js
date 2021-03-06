'use strict';


const customerId = sessionStorage.getItem('customerId');
const locationId = sessionStorage.getItem('locationId');
const modal = document.getElementById('modal');
const productTable = document.getElementById('product-table');
//const productResult = document.getElementById('product-result');


// if we came from customer page
if (locationId === null) {
    const custName = sessionStorage.getItem('customerName');
    const customerOrder = document.getElementById('customer-order');
    const custOrdTable = document.getElementById('customer-order-table');
    const custNameSpan = document.getElementById('customer-name');

    custNameSpan.innerHTML = custName;

    let counter = 1;
    getCustomerOrder(customerId)
        .then(list => {
            if (list.length === 0) {
                document.getElementById('no-result').hidden = false;
            } else {
                for (const order of list) {
                    //# | orderId | Location ID | ( could add Location Name later) | Total Price | Time Placed
                    const row = custOrdTable.insertRow();
                    row.innerHTML = `<td>${counter}</td>
                                     <td>${order.id}</td>
                                     <td>${order.locationId}</td>
                                     <td>$${order.totalPrice}</td>
                                     <td>${order.timePlaced}</td>`; //<td>${order.locationName}</td>
                    row.addEventListener('click', () => {
                        let products = order.products;
                        //productResult.innerHTML = '';
                        for (let i = 0; i < products.length; i++) {
                            //# | Product ID | Product Name | Quantity | Price
                            const prodRow = productTable.insertRow();
                            prodRow.innerHTML = `<td>${i + 1}</td>
                                                 <td>${products[i].id}</td>
                                                 <td>${products[i].name}</td>
                                                 <td>${order.productQuantities[i]}</td>
                                                 <td>$${products[i].price}</td>`;
                        }
                        modal.style.display = "block";
                    });
                    counter++;
                }
                customerOrder.hidden = false;
            }
        })
        .catch(error => {
            alert(error.toString());
        });

}

if (customerId === null) {
    const locationName = sessionStorage.getItem('locationName');
    const locationOrder = document.getElementById('location-order');
    const locationOrderTable = document.getElementById('location-order-table');
    const locationNameSpan = document.getElementById('location-name');

    locationNameSpan.innerHTML = locationName;

    let counter = 1;
    getLocationOrder(locationId)
        .then(list => {
            if (list.length === 0) {
                document.getElementById('no-result').hidden = false;
            } else {
                for (const order of list) {
                    //# | orderId | Customer ID | ( could add Customer Name later) | Total Price | Time Placed
                    const row = locationOrderTable.insertRow();
                    row.innerHTML = `<td>${counter}</td>
                                     <td>${order.id}</td>
                                     <td>${order.customerId}</td>
                                     <td>$${order.totalPrice}</td>
                                     <td>${order.timePlaced}</td>`; //<td>${order.locationName}</td>
                    row.addEventListener('click', () => {
                        let products = order.products;
                        //productResult.innerHTML = '';
                        for (let i = 0; i < products.length; i++) {
                            //# | Product ID | Product Name | Quantity | Price
                            const prodRow = productTable.insertRow();
                            prodRow.innerHTML = `<td>${i+1}</td>
                                                 <td>${products[i].id}</td>
                                                 <td>${products[i].name}</td>
                                                 <td>${order.productQuantities[i]}</td>
                                                 <td>$${products[i].price}</td>`;
                        }
                        modal.style.display = "block";
                    });
                    counter++;
                }
                locationOrder.hidden = false;
            }
        })
        .catch(error => {
            alert(error.toString());
        });
}

const closeModal = document.getElementsByClassName('close')[0];

closeModal.onclick = function () {
    modal.style.display = "none";
}