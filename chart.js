var num = "2014";
var dataP = d3.csv("edu.csv");

var drawChart=function(edu)
{
  var width = 400;
  var height = 600;
  var barwidth = width/edu.length;
  
  var svg=
  d3.select("svg")
  .attr("width", width)
  .attr("height", height)
  
  svg.selectAll("rect")
  .data(edu)
  .enter()
  .append("rect")
  .attr("x", function(d,i)
    {return i*barWidth;})
  .attr("y", function(d)
    {return height-d.num*20})
  .attr("width", barWidth)
  .attr("height", function(d)
    {return d.num*20})
  .attr("fill", function(d)
    {return blue;})
}

dataP.then(function(DataP)
    {
    drawChart(dataP)},
      
    function(err){console.log(err);}
