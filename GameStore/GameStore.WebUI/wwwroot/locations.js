'use strict';

const locationTable = document.getElementById('location-table');

let counter = 1;
getAllLocations()
    .then(list => {
        for (const slocation of list) {
            //# | Location ID | Location City | Location State |
            const row = locationTable.insertRow();
            row.innerHTML = `<td>${counter}</td>
                             <td>${slocation.id}</td>
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

