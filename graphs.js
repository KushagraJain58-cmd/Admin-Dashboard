//////////////////line chart///////////////////////////
//////////////////////////////////////////////////////
const xVals = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const yVals = [
  30000, 70000, 100000, 700000, 200000, 550000, 200000, 90000, 80000, 700000,
  750000,
];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xVals,
    datasets: [
      {
        label: "Months",
        data: yVals,
        borderColor: "rgb(1, 130, 115)",
        fill: true,
        backgroundColor: "rgb(1, 130, 115,0.4)",
      },
    ],
  },

  options: {
    legend: {
      display: true,
      align: "start",
      margin: 10,
    },
  },
});
//////////////////bar chart///////////////////////////
//////////////////////////////////////////////////////

var chartdata = {
  type: "bar",
  data: {
    labels: ["Dep1", "Dep2", "Dep3", "Dep4", "Dep5", "Dep6", "Dep7", "Dep8"],
    // labels: month,
    datasets: [
      {
        label: "Employee Count",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(90, 37, 232, 0.2)",
          "rgba(232, 73, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(90, 37, 232)",
          "rgb(232, 73, 192,)",
        ],
        borderWidth: 1,
        data: [31, 30, 32, 33, 31, 30, 27, 28, 38],
      },
    ],
  },
};

var ctx = document.getElementById("Chart2").getContext("2d");
new Chart(ctx, chartdata);

//////////////// Deal line chart  /////////////////////////


Chart.defaults.global.legend.labels.usePointStyle = true;
Chart.Legend.prototype.afterFit = function(){
    this.height = this.height + 25;
}
var d = new Date();
var dd = d.getDate;
var month = d.getMonth;

const dates = ['21-Dec','22-Dec','23-Dec','24-Dec','25-Dec','26-Dec','27-Dec', '28-Dec', '29-Dec'];
const datapoints = [30,70,200,500,600,400,200,100,80, 60];

new Chart("myChart", {
  type: "line",
  data: {
    labels: dates,
    datasets: [
     { 
      label: 'Closed Deals',   
      data: datapoints,
      borderColor: "rgb(16,156,241)",
      fill: true,
      backgroundColor:"rgb(16,156,241,0.4)"
    }]
  },
  
  options: {
    legend: {
        display: true,
        align: 'start' ,
        margin: 10
    }
  }
});
