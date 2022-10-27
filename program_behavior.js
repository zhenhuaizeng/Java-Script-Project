/*
	this page interacts with the user, when user clicks next or previous,the page will behave in different way

    Author: Professor Josh, Zhenhuai Jack Zeng
    File: program_behavior.js
    Date: 5/31/2022
 */


//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");

//the index of the current object shown
//on the web page
let index = 0;

//responds to clicks of the "previous" button
previous.onclick = function(event)
{
    index--;

    //make sure that index is never less than zero...
    if(index <= 0)
    {
        index = 0;
    }
    display();
}

//responds to clicks of the "next" button
next.onclick = function(event)
{
    index++;

    //make sure that index is never greater than
    //array.length - 1
    if(index >= cars.length - 1)
    {
        index = cars.length -1;
    }
    display();
}

//shows the current record in the array of records
//at the position within the index variable
function display()
{
//change the car's name at the top.
    carName= cars[index]["Identification"]["ID"];
    carNameInfo = document.querySelector("section");
    carNameInfo.innerHTML = `<strong>${carName}</strong>`;
    //first field name + value
    carCityMPG = cars[index]["Fuel Information"]["City mpg"];
    //ask if MPG is usable
    milesPerGallon = document.getElementById("spanOne");
    milesPerGallon.innerHTML = carCityMPG;

//change second field name + value
    highWay = cars[index]["Fuel Information"]["Highway mpg"];
    highWayM = document.getElementById("spanTwo");
    highWayM.innerHTML = highWay;

//change third field name + value
    fuel = cars[index]["Fuel Information"]["Fuel Type"];
    gas = document.getElementById("spanThree");
    gas.innerHTML = fuel;

//change fourth field name + value
    engine = cars[index]["Engine Information"]["Engine Type"];
    engineType = document.getElementById("spanFour");
    engineType.innerHTML = engine;

//change fifth field name + value
    numberOfGears = cars[index]["Engine Information"]["Number of Forward Gears"];
    numberGears = document.getElementById("spanFive");
    numberGears.innerHTML = numberOfGears;

//change sixth field name + value
    horsePower = cars[index]["Engine Information"]["Engine Statistics"]["Horsepower"];
    horsePowerAdd = document.getElementById("spanSix");
    horsePowerAdd.innerHTML = horsePower;

    console.log("Next index is " + index);
}
