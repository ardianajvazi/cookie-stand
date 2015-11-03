
var CookieShop = function (shopLocation, hoursOpen, minCust, maxCust, avgCookiePerCust){
 this.shopLocation = shopLocation;
 this.hoursOpen = this.hoursOpen;
 this.minCust = minCust;
 this.maxCust = maxCust;
 this.avgCookiePerCust = avgCookiePerCust;
 this.hoursLog = [];
 this.hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

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

this.gen =  function() {
var total = 0;
 for (i = 0; i < this.hoursOpen; i++){
  this.hoursLog.push(this.totalCookiesPerHr());
 }
  total += this.totalCookiesPerHr() ;
}

this.renderToDom = function () {
  this.eachHour();
  var total=0;
  var ul = document.getElementById('shops');
  var shopName = document.createElement('h2')
  shopName.innerHTML = this.shopLocation + ":";
  ul.appendChild(shopName);

  for (var i = 0; i < this.hoursLog.length; i++){
    var li = document.createElement('li');
    li.id=this.shopLocation;
    li.innerHTML = this.hours[i] + ": " + this.hoursLog[i] + " cookies" ;
    ul.appendChild(li);
    total += this.hoursLog[i]
  }
  var h3 = document.createElement('h4');
  h3.innerHTML = "Daily Total: " + total + " cookies";
  ul.appendChild(h3);
}

}

var pikePlace = new CookieShop("Pike Place", 8, 17, 88, 5.2);
var seaTacAriport = new CookieShop("SeaTac Airport", 8, 6, 44, 1.2);
var southcenterMall = new CookieShop("South Center Mall", 8, 11, 38, 1.9);
var bellevueSquare = new CookieShop("Bellevue Square", 8, 20, 48, 33);
var alki = new CookieShop("Alki", 8, 3, 24, 2.6);

pikePlace.renderToDom();
seaTacAriport.renderToDom();
southcenterMall.renderToDom();
bellevueSquare.renderToDom();
alki.renderToDom();


