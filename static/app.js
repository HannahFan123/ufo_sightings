// // from data.js
// var tabledata = data;

// var tbody = d3.select("tbody");

// data.forEach((tabledata) => {
//     var row = tbody.append("tr");
//     Object.entries(tabledata).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });



// var ufo_date = data;

// debugger

// // Select the submit button
// var submit = d3.select("#filter-btn");

// console.log("submit")

// submit.on("click", function() {
//     console.log("hi")

//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   //console.log(inputValue);
//   //console.log(ufo_date);

//   var filteredData = ufo_date.filter(input => input.datetime === inputValue);

//   console.log(filteredData);

//   filteredData.forEach((ufo_date) => {
//     var row = tbody.append("tr");
//     Object.entries(ufo_date).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });
// });
