"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    var html = '<div class="coffee d-block col-4 mx-auto p-auto">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

//convert table to strings //
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// export data into html tables //

let tbody= document.querySelector("#coffees")
let roastSelection = document.querySelector("#roast-selection");
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value === "all";
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (roastSelection.value === "all"){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(){
    let searchRoast = searchBox.value.toUpperCase();
    let filteredCoffees = [];
    console.log(searchRoast);
    coffees.forEach(function(coffee){
        if (coffee.name.toUpperCase().includes(searchRoast)) {
            filteredCoffees.push(coffee);
            console.log(filteredCoffees);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffees(){
    let addID = coffees.length+1;
    let addName = inputName.value.toString();
    let addRoast = inputRoast.value.toString();
    let addObject = {id:addID, name: addName, roast: addRoast};
    coffees.push(addObject);
    console.log(coffees);

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

submitButton.addEventListener('click', updateCoffees);
}

var searchBox = document.querySelector("#searchBox");
searchBox.addEventListener("keyup", searchCoffees);
var submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", updateCoffees);
var addCoffeeButton = document.querySelector("#input-submit");
addCoffeeButton.addEventListener("click", addCoffees)