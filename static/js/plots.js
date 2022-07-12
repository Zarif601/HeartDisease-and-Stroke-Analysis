/**
 * 
 * Javascript file for creating plots
 * 
 */


// EXAMPLE BAR GRAPH
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
var data = [trace];
var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

// EXAMPLE PIE GRAPH
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};
var data = [trace];
var layout = {
    title: "'Pie' Chart",
};
Plotly.newPlot("plotArea2", data, layout);

// INCASE WE WANT TO USE API CALLS USIONG D3
const url = "https://api.spacexdata.com/v2/launchpads";

// Calls on API - if successful, print information in browser
d3.json(url).then(receivedData => console.log(receivedData));

// DROPDOWN MENU
d3.selectAll("body").on("change", updatePage); // If page changes - run function

// Function to log the dropdown menu id and the value pressed in the console log
function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node(); // Selects the dropdown menu using the id
  var dropdownMenuID = dropdownMenu.id; // Id of the dropdown menu assigned a variable
  var selectedOption = dropdownMenu.value; // Values of dropdoiwn assigned a variable

  console.log(dropdownMenuID);
  console.log(selectedOption);
};