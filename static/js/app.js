// Assign data from data.js to variable.
var tableData = data;

// #######

// Variable that connects to the table body in index.html file.
var tbody = d3.select("tbody");

// Connect to data in data.js file.
console.log(tableData);

// Loop through `data` file and create main table of all UFO sighting objects index.html file.
tableData.forEach(function(UFOreport) {
    // Use d3 to append one table row `tr` for each weather report object.
    var row = tbody.append("tr");
    // Utilize object.entries to log each UFO report item into key/value format.
    Object.entries(UFOreport).forEach(function([key, value]) {
      // console.log(key, value);
    // Append a cell to the row for each value in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// #### FILTER OUT DATA THAT EQUALS SUBMITTED DATE ####

// Select the submit button
var submit = d3.select("#filter-btn");

// create submit button event listener function
submit.on("click", function() {

  // keep page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);  //spits back the user input of date
  console.log(tableData);  //spits back the table data in console
  
  //filter code that applies inputValue to dataset.
  var filteredData = tableData.filter(person => person.datetime === inputValue);

  console.log(filteredData);  //<-- this is spitting back an empty array

  // Create new table with new search results.
  tbody.html(""); // refreshing html tag. Removes previous table with new search table

  filteredData.forEach(function(UFOreportFiltered) {
    // Use d3 to append one table row `tr` for each weather report object.
    var row = tbody.append("tr");
    // Utilize object.entries to log each UFO report item into key/value format.
    Object.entries(UFOreportFiltered).forEach(function([key, value]) {
    // Append a cell to the row for each value in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
