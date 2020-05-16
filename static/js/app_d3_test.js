// from data.js
var tableData = data;

d3.select("tbody")
  .selectAll("tr")
  .data(tableData)
  .enter()
  .append("tr")
  .html(function(d){
      return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  });


var submit = d3.select("#filter-btn");
var inputElement = d3.select("#datetime");
var tbody = d3.select("tbody");

// Filter date function (just compare a string)
function filterByDate(dataset) {
    
    var filteredData = dataset.filter(function (d) {
      return d.datetime === inputElement.property("value");
    });
    return filteredData;
}


// First update table of original data
updateTable(tableData);

submit.on("click", function() {
  // When filter is click
  // Filter data by datetime and update the table
  
  
  var result = filterByDate(tableData);
     d3.select("tbody")
        .selectAll("tr")
        .data(result)
        .enter()
        .append("tr")
        .html(function(d){
      return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  }); 
  
  updateTable(result);
});