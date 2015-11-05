var newShopCounter = 1;
var table = document.getElementById('shops');
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var allShops = [];
var form = document.getElementById('form');
var submitButton = document.getElementById('submitButton');

var CookieShop = function (shopLocation, minCust, maxCust, avgCookiePerCust){
 this.shopLocation = shopLocation;
 this.minCust = minCust;
 this.maxCust = maxCust;
 this.avgCookiePerCust = avgCookiePerCust;
 this.hoursLog = [];
 allShops.push(this);


this.getRandomCust = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
}

this.totalCookiesPerHr = function() {
  return Math.floor(this.getRandomCust() * this.avgCookiePerCust);
}

this.eachHour =  function() {
  for (i = 0; i < 8; i++){
    this.hoursLog.push(this.totalCookiesPerHr());
  }
}

this.generate =  function() {
var total = 0;
 for (i = 0; i < 8; i++){
  total += this.hoursLog[i]
 }
 return total;
}

this.renderToDom = function () {
  this.eachHour();

  for (var i = 0; i < allShops.length; i++) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.setAttribute('class', 'locations')
    td.innerHTML = this.shopLocation + ":";
    tr.appendChild(td);

    for (var i = 0; i < this.hoursLog.length; i++) {
      var td = document.createElement('td');
      td.setAttribute('class', 'hours')
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

  var td = document.createElement('tdtotal');
  td.innerHTML = 'Daily Total:'
  thead.appendChild(td);
  table.appendChild(thead);
}


var pikePlace = new CookieShop("Pike Place", 8, 17, 88, 5.2);
var seaTacAriport = new CookieShop("SeaTac Airport", 8, 6, 44, 1.2);
var southcenterMall = new CookieShop("South Center Mall", 8, 11, 38, 1.9);
var bellevueSquare = new CookieShop("Bellevue Square", 8, 20, 48, 33);
var alki = new CookieShop("Alki", 8, 3, 24, 2.6);

makeTable();

function displayAllLocations() {
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].renderToDom();
  }
  document.body.appendChild(table)
}

displayAllLocations();

var form = document.getElementById('form');
var storeLocation = document.getElementById('storeLocation');
var minCust = document.getElementById('minCustomer');
var maxCust = document.getElementById('maxCustomer');
var avgCust = document.getElementById('avgCookie');

var newShopSubmit = function(event) {
  event.preventDefault();


    var shopLocation = event.target.storeLocation.value;
    var minCust = event.target.minCustomer.value;
    var maxCust = event.target.maxCustomer.value;
    var avgCookiePerCust = event.target.avgCookie.value;

    var newStore = new CookieShop(shopLocation, minCust, maxCust, avgCookiePerCust);
    console.log('newStore ' + event.target.storeLocation.value);

    newStore.renderToDom();

};

form.addEventListener('submit', newShopSubmit);







