var pikePlace = {
  minCust: 17,
  maxCust:  88,
  avgCookiePerCust: 5.2,


getRandomCust: function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1 )) + this.minCust;
},

totalCookiesPerHr: function() {
  return this.getRandomCust() * this.avgCookiePerCust;

}
}
