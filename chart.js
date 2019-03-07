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
     return height-d.Year})
  .attr("width", barWidth)
  .attr("height", function(d)
    {console.log(d);return height-d.Year})
  .attr("fill", function(d)
    {return "blue";})
}

var drawLabels=function(edu)
  {
    var width=400;
    var height=200;
    var barWidth=width/edu.length;

    var svg=d3.select("#csv")
    .attr("width", width)
    .attr("height", height)
  svg.selectAll("text")
  .data(edu)
  .enter()
  .append("text")
  .text(function(d){
    return d.Year;})
  .attr("x", function(d,i){
    return i * (width / edu.length) +25;
  })
  .attr("y", function(d){
    return height-(d.Year)+12;
  })
  .attr("fill", "white");
  }


dataP.then(function(dataP)
    {
    drawChart(dataP);
    drawLabels(dataP)},
      
    function(err){console.log(err);})
