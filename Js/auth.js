fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(response=>response.json())
.then(data => {console.log(data)

let cad =`<h4>${data.chartName} ${data.bpi.USD.code}: ${data.bpi.USD.rate_float} </h4>
          `
document.querySelector("span").innerHTML=cad
});