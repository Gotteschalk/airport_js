function Airport(capacity = 20) {
  this.planes = []
  this.capacity = capacity
};

Airport.prototype.landPlane = function(plane) {
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
