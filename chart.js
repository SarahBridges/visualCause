var dataP = d3.csv("edu.csv");

var drawChart=function(edu)
{
  var width=400;
  var height=200;
  var barWidth=width/edu.length;
  console.log(height);
  
  var svg=
  d3.select("#csv")
  .attr("width", width)
  .attr("height", height)
  
  svg.selectAll("rect")
  .data(edu)
  .enter()
  .append("rect")
  .attr("x", function(d,i)
    {return i*barWidth;})
  .attr("y", function(d)
    {
     return height-d.year})
  .attr("width", barWidth)
  .attr("height", function(d)
    {console.log(d);return d.year)
  .attr("fill", function(d)
    {return "blue";})
}
/*
var drawLabels=function(edu)
  {
    var width=400;
    var height=200;
    var barWidth=width/edu.length;

    var svg=
    d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  svg.selectAll("text")
  .data(edu)
  .enter()
  .append("text")
  .text(function(d){
    return d.num;})
  .attr("x", function(d,i){
    return i * (width / edu.length) +25;
  })
  .attr("y", function(d){
    return height-(d.num*10)+7;
  })
  .attr("fill", "white");
  }

*/
dataP.then(function(dataP)
    {
    drawChart(dataP)},
      
    function(err){console.log(err);})
