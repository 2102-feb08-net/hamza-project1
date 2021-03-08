'use strict';

const locationTable = document.getElementById('location-table');
const locationRows = document.getElementById('location-rows');

let counter = 1;
getAllLocations()
    .then(list => {
        for (const slocation of list) {
            //# | Location ID | Location City | Location State |
            const row = locationRows.insertRow();
            row.innerHTML = `<td>${slocation.id}</td>
                             <td>${slocation.city}</td>
                             <td>${slocation.state}</td>`;
            row.addEventListener('click', () => {
                let locationName = slocation.city + ', ' + slocation.state;
                sessionStorage.removeItem('customerId');
                sessionStorage.setItem('locationId', slocation.id);
                sessionStorage.setItem('locationName', locationName);
                location = 'order.html';
            });
            counter++;
        }
    })
    .catch(error => {
        alert(error.toString());
    });

