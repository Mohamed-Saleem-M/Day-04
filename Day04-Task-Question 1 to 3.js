/*
Question 01 : 
How to compare two JSON have the same properties without order ?
  a. let obj1 = { name : "Person 1", age : 5};
  b. let obj2 = { age : 5, name : "Person 1"};
*/

var obj1 = {
    name: 'Person 1',
    age: 5
};

var obj2 = {
    age: 5,
    name: 'Person 1'
};

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));

//Output for Question 01 
false

//***********************************************************************************************************************

/*
Question 02 :
Use the rest countries API URL ->https://restcountries.com/v3.1/all and display all country flags in console.
*/

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {

    var result = JSON.parse(request.response);

    for (let i = 0; i < 50; i++) {

        console.log(result[i].flags.png + " - " + result[i].name.common);

    }

}

//Output for Question 02 - Attached as screenshot in folder

//***********************************************************************************************************************

/*
Question 03 :
Use the same rest countries and print all countries names, regions, sub-region and populations.
*/

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {

    var result = JSON.parse(request.response);

    for (let i = 0; i < 50; i++) {

        console.log(`${i + 1}. name - ${result[i].name.common}`);
        console.log(`    region - ${result[i].region}`);
        console.log(`    subregion - ${result[i].subregion}`);
        console.log(`    population - ${result[i].population}`);

    }

}

//Output for Question 03 - Attached as screenshot in folder
