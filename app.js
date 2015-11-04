var table = document.getElementById('shops');
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var CookieShop = function (shopLocation, hoursOpen, minCust, maxCust, avgCookiePerCust){
 this.shopLocation = shopLocation;
 this.hoursOpen = hoursOpen;
 this.minCust = minCust;
 this.maxCust = maxCust;
 this.avgCookiePerCust = avgCookiePerCust;
 this.hoursLog = [];


this.getRandomCust = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
}

this.totalCookiesPerHr = function() {
  return Math.floor(this.getRandomCust() * this.avgCookiePerCust);
}

this.eachHour =  function() {
  for (i = 0; i < hoursOpen; i++){
    this.hoursLog.push(this.totalCookiesPerHr());
  }
}

this.generate =  function() {
var total = 0;
 for (i = 0; i < this.hoursOpen; i++){
  total += this.hoursLog[i]
 }
 return total;  
}

this.renderToDom = function () {
  this.eachHour();
  
  for (var i = 0; i < allShops.length; i++) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = this.shopLocation;
    tr.appendChild(td); 

    for (var i = 0; i < this.hoursLog.length; i++) {
      var td = document.createElement('td');
      td.innerHTML = this.hoursLog[i];
      tr.appendChild(td);
    }

    var dailyTotal = document.createElement('td');
    dailyTotal.innerHTML = this.generate();
    tr.appendChild(dailyTotal);

    table.appendChild(tr);
  }


  }

}


function makeTable() {
  var thead = document.createElement('thead')
  var blankCell = document.createElement('td');
  thead.appendChild(blankCell);
 
  for (var i = 0; i < hours.length; i++){
    var td = document.createElement('td');
    td.innerHTML = hours[i];
    thead.appendChild(td);
  }

  var td = document.createElement('td');
  td.innerHTML = 'total'
  thead.appendChild(td);
  table.appendChild(thead);
}

var pikePlace = new CookieShop("Pike Place", 8, 17, 88, 5.2);
var seaTacAriport = new CookieShop("SeaTac Airport", 8, 6, 44, 1.2);
var southcenterMall = new CookieShop("South Center Mall", 8, 11, 38, 1.9);
var bellevueSquare = new CookieShop("Bellevue Square", 8, 20, 48, 33);
var alki = new CookieShop("Alki", 8, 3, 24, 2.6);
var allShops = [pikePlace, seaTacAriport, southcenterMall, bellevueSquare, alki];

makeTable();
pikePlace.renderToDom();
seaTacAriport.renderToDom();
southcenterMall.renderToDom();
bellevueSquare.renderToDom();
alki.renderToDom();


