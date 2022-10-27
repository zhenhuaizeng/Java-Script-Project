/*
	this page declares the variables of the car. it has loops that go over the dataset to find info that I need.

    Author: Zhenhuai Jack Zeng
    File: script.js
    Date: 5/31/2022
 */

// change the name to "Car Dataset"
let headerOne = document.querySelector("h1");
headerOne.innerHTML = "Car Dataset";

// Introduction
let introduction = document.querySelector("p")
introduction.innerHTML = `This is a dataset about cars and how much fuel they use. 
There are <u>${cars.length}</u> elements in the dataset.`;


//add the car's name at the top.
let carName= cars[0]["Identification"]["ID"];
let carInfo = document.querySelectorAll("label");
carInfo[0].innerHTML = `<strong>${carName}</strong>`;

//first field name + value
let carCityMPG = cars[0]["Fuel Information"]["City mpg"];
carInfo[1].innerHTML = `City MPG: `

//ask if MPG is usable
let milesPerGallon = document.getElementById("spanOne");
milesPerGallon.innerHTML = carCityMPG;

//second field name + value
let highWay = cars[0]["Fuel Information"]["Highway mpg"];
carInfo[2].innerHTML = "Highway MPG: "
let highWayM = document.getElementById("spanTwo");
highWayM.innerHTML = highWay;

//third field name + value
let fuel = cars[0]["Fuel Information"]["Fuel Type"];
carInfo[3].innerHTML = "Fuel: "
let gas = document.getElementById("spanThree");
gas.innerHTML = fuel;

//fourth field name + value
let engine = cars[0]["Engine Information"]["Engine Type"];
carInfo[4].innerHTML = "Engine: ";
let engineType = document.getElementById("spanFour");
engineType.innerHTML = engine;

//fifth field name + value
let numberOfGears = cars[0]["Engine Information"]["Number of Forward Gears"];
carInfo[5].innerHTML = "Number of gears: ";
let numberGears = document.getElementById("spanFive");
numberGears.innerHTML = numberOfGears;

// sixth field name + value
let horsePower = cars[0]["Engine Information"]["Engine Statistics"]["Horsepower"];
carInfo[6].innerHTML = "Horsepower: ";
let horsePowerAdd = document.getElementById("spanSix");
horsePowerAdd.innerHTML = horsePower;

//three facts

//first fact about the car
let average = 0;
let sum = 0;
let total = 0;
//traverse the loop to find the average of the city mpg
for (let i = 0; i < cars.length; i++)
{
        if(cars[i]["Fuel Information"]["City mpg"] >= 0)
        {
            sum += cars[i]["Fuel Information"]["City mpg"];
            average ++;
        }
}
//keep the hundredth decimal
total = (sum / average).toFixed(2);
let facts = document.querySelectorAll("li");
facts[0].innerHTML = `The average city MPG is <u>${total}</u>`;

//second fact about the car
let totalCar = 0;
//traverse the loop to find how many BMW in the array.
for(let i = 0 ; i < cars.length; i ++)
{
    if(cars[i]["Identification"]["ID"].includes("BMW"))
    {
        totalCar++;
    }
}
//print out the fact
facts[1].innerHTML = `There are <u>${totalCar}</u> BMW cars in the dataset`;

//third fact about the car
let highestHorsePower = 0;
let horsePowerCar = "";
//traverse the loop to find the highest horsepower.
for (let i = 0; i < cars.length; i++)
{
    if(cars[i]["Engine Information"]["Engine Statistics"]["Horsepower"] > highestHorsePower)
    {
        highestHorsePower = cars[i]["Engine Information"]["Engine Statistics"]["Horsepower"];
        horsePowerCar = cars[i]["Identification"]["ID"];
    }
}
//print out the fact
facts[2].innerHTML = `The car with the highest horsepower is a <u>${horsePowerCar}</u>.`;

