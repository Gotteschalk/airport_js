function Airport(capacity = 20) {
  this.planes = []
  this.capacity = capacity
};

Airport.prototype.landPlane = function(plane) {
  if (this.planes.length === this.capacity) throw 'Airport full: Unable to land plane' ;
  this.planes.push(plane);
  return this.planes;
};

Airport.prototype.takeOff = function(plane) {
  this.planes.splice(this.planes.indexOf(plane), 1);
  return this.planes;
};

function Plane(name) {
  this.name = name
};

function Weather() {
  var weatherArray = ['sunny', 'stormy'];
  this.state = weatherArray[Math.floor(Math.random() * weatherArray.length)];
  return this.state;
};
