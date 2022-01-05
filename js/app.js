let hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
let sidebar = document.getElementsByClassName("sidebar")[0]; 
let closeMenu = document.getElementsByClassName('close-menu')[0];

hamburgerMenu.addEventListener('click', ()=>{
    sidebar.style.left = '0';
});

closeMenu.addEventListener('click', ()=>{
    sidebar.style.left = '-100%';
});

//Chart
let ctx = document.getElementById('myChart1');
let ctx2 = document.getElementById('myChart2');
const label = ['July 11', 'July 12', 'July 13' , 'July 14', 'July 15', 'July 16',
'July 17', 'July 18', 'July 19', 'July 20'];
const data = {
  labels: label,
  datasets: [
    {
      label: "Viewer Count",
      data: [65, 59, 80, 81, 56, 55, 40, 33, 51, 20],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgb(75, 192, 192, 0.2)",
      borderRadius: 100,
      tension: 0.1,
    },
    {
      label: "Order Count",
      data: [23, 49, 50, 65, 20, 59, 51, 80, 56, 81],
      fill: false,
      borderColor: "#FFC371",
      backgroundColor: "#FFC37160",
      borderRadius: 100,
      tension: 0.1,
    },
  ],
};
const config = {
  type: "line",
  data: data,
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);

const data2 = {
  labels: ["YGN", "MDY", "NPD", "SHN", "MGY"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 20, 90],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "#ff96fd",
        "#38ef7d",
      ],
      hoverOffset: 4,
    },
  ],
};

const config2 = {
  type: "doughnut",
  data: data2,
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#333",
          usePointStyle: true,
        },
      },
    },
  },
};

const myChart2 = new Chart(ctx2, config2);

$(document).ready(function () {
  $("#dataTable").DataTable();
});