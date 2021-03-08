'use strict';


const customerId = sessionStorage.getItem('customerId');
const locationId = sessionStorage.getItem('locationId');
const productTable = document.getElementById('product-table');
const productResult = document.getElementById('product-result');


// if we came from customer page
if (locationId === null) {
    const custName = sessionStorage.getItem('customerName');
    const customerOrder = document.getElementById('customer-order');
    const customerOrderResult = document.getElementById('customer-order-result');
    const custNameSpan = document.getElementById('customer-name');

    custNameSpan.innerHTML = custName;

    let counter = 1;
    getCustomerOrder(customerId)
        .then(list => {
            if (list.length === 0) {
                document.getElementById('cust-name').innerHTML = custName;
                document.getElementById('no-result').hidden = false;
            } else {
                for (const order of list) {
                    //# | orderId | Location ID | ( could add Location Name later) | Total Price | Time Placed
                    const row = customerOrderResult.insertRow();
                    row.innerHTML = `<td>${counter}</td>
                                     <td>${order.id}</td>
                                     <td>${order.locationId}</td>
                                     <td>$${order.totalPrice}</td>
                                     <td>${order.timePlaced}</td>`;
                    row.addEventListener('click', () => {
                        let products = order.products;
                        productResult.innerHTML = '';
                        for (let i = 0; i < products.length; i++) {
                            //# | Product ID | Product Name | Quantity | Price
                            const prodRow = productResult.insertRow();
                            prodRow.innerHTML = `<td>${i + 1}</td>
                                                 <td>${products[i].id}</td>
                                                 <td>${products[i].name}</td>
                                                 <td>${order.productQuantities[i]}</td>
                                                 <td>$${products[i].price}</td>`;
                        }
                        $('#product-modal').modal('show');
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

//if we came from location page
if (customerId === null) {
    const locationName = sessionStorage.getItem('locationName');
    const locationOrder = document.getElementById('location-order');
    const locationOrderResult = document.getElementById('location-order-result');
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
                    const row = locationOrderResult.insertRow();
                    row.innerHTML = `<td>${counter}</td>
                                     <td>${order.id}</td>
                                     <td>${order.customerId}</td>
                                     <td>$${order.totalPrice}</td>
                                     <td>${order.timePlaced}</td>`;
                    row.addEventListener('click', () => {
                        let products = order.products;
                        productResult.innerHTML = '';
                        for (let i = 0; i < products.length; i++) {
                            //# | Product ID | Product Name | Quantity | Price
                            const prodRow = productResult.insertRow();
                            prodRow.innerHTML = `<td>${i+1}</td>
                                                 <td>${products[i].id}</td>
                                                 <td>${products[i].name}</td>
                                                 <td>${order.productQuantities[i]}</td>
                                                 <td>$${products[i].price}</td>`;
                        }
                        $('#product-modal').modal('show');
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
