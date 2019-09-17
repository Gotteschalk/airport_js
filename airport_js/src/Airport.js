function Airport(capacity = 20) {
  this.planes = []
  this.capacity = capacity
};

Airport.prototype.landPlane = function(plane) {
  this.planes.push(plane);
  return this.planes;
};

function Plane(name) {
  this.name = name
};
