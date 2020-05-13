// from data.js
var tableData = data;


 // Select the input element and get the raw HTML node
var submit = d3.select("#filter-btn");
var inputElement = d3.select("#datetime");
var tbody = d3.select("tbody");

// Filter date function 
function filterByDate(dataset) {
    
    var filteredData = dataset.filter(function (d) {
      return d.datetime === inputElement.property("value");
    });
    return filteredData;
}

// function to append data.js to html
function updateTable(dataset) {
    tbody.html('');
    dataset.forEach((date) => {
      var row = tbody.append("tr");
      Object.entries(date).forEach(([key,value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      });
    });
  }

updateTable(tableData);


submit.on("click", function() {
   
  var result = filterByDate(tableData);
 
  updateTable(result);
});