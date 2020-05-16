1

// data.js
var data = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },
  {
    datetime: "1/1/2009",
    city: "bonita",
    state: "ca",
    country: "us",
    shape: "light",
    durationMinutes: "13 minutes",
    comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010"
  }];

// D3 selector
var tbody = d3.select("tbody");
var submit = d3.select("#filterButton");

// Update table with a new dataset
function updateTable(dataset) {
  tbody.html('');
  dataset.forEach((toBeDefined) => {
    var row = tbody.append("tr");
    Object.entries(toBeDefined).forEach(([key,value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

// Filter date function (just compare a string)
function filterByDate(dataset) {
    var filteredData = dataset.filter(function (d) {
      return d.datetime === $('#datetime').val();
    });
    return filteredData;
}

// Start here ...
// First update table of original data
updateTable(data); 
submit.on("click", function() {
  // When filter is click
  // Filter data by datetime and update the table
  var result = filterByDate(data);
  updateTable(result);
});