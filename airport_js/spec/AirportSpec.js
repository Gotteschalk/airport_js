describe('Airport', function() {
  var planes
  var capacity
  var weather

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('has no planes upon initialization', function() {
    expect(airport.planes.length).toEqual(0);
  });

  it('has a default capacity', function() {
    expect(airport.capacity).toEqual(20);
  });

  it('lands a plane', function() {
    airport.landPlane(plane)
    expect(airport.planes).toContain(plane);
  })
});
