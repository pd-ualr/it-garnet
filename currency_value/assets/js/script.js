async function results() {
  "use strict";

  var form = $("#myform");

  form.validate();

  if (form.valid()) {
    var baseCurrency = document.getElementById("baseCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var apiKey = "u3npfs_dXIjFQphIuZcHCNKg1ASDaVbp";
    var fromDate = document.getElementById("fromDate").value;
    var toDate = document.getElementById("toDate").value;

    var myURL2 =
      "https://api.polygon.io/v2/aggs/ticker/C:" +
      baseCurrency +
      toCurrency +
      "/range/1/day/" +
      fromDate +
      "/" +
      toDate +
      "?adjusted=true&sort=asc&limit=32&apiKey=" +
      apiKey;

    var msg2Object = await fetch(myURL2);

    if (msg2Object.status >= 200 && msg2Object.status <= 299) {
      var msg2JSONText = await msg2Object.text();

      var msg2 = JSON.parse(msg2JSONText);

      var currencydate = [];
      var currencyvalue = [];

      var numdays = msg2.results.length;
      if (numdays > 0) {
        for (var i = 0; i < numdays; i++) {
          currencyvalue[i] = msg2.results[i].c;

          var tempdate = new Date(msg2.results[i].t);

          currencydate[i] = tempdate.toLocaleDateString();
        }
      }

      var ctx0 = document.getElementById("chartjs-0");
      var myChart = new Chart(ctx0, {
        type: "line",
        data: {
          labels: currencydate,
          datasets: [
            {
              label: "Currency Close",
              data: currencyvalue,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              lineTension: 0.1,
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: true,
        },
      });
    } else {
      alert("Stock Not Found - Status: " + msg2Object.status);
      return;
    }
  }
}

function ClearForm() {
  document.getElementById("baseCurrency").value = "";
  document.getElementById("toCurrency").value = "";
  document.getElementById("fromDate").value = "";
  document.getElementById("toDate").value = "";
  document.getElementById("baseCurrencyError").innerHTML = "";
  document.getElementById("toCurrencyError").innerHTML = "";
  document.getElementById("toDateError").innerHTML = "";
  document.getElementById("fromDateError").innerHTML = "";

  var canvas0 = document.getElementById("chartjs-0");
  var context0 = canvas0.getContext("2d");
  context0.clearRect(0, 0, canvas0.width, canvas0.height);
}
