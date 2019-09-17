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
  });

  it('raises and error if a plane tries to land at a full airport', function() {
    for(i=1; i <= airport.capacity; i++) { airport.landPlane(plane) }
    expect(function() {airport.landPlane(plane)}).toThrow('Airport full: Unable to land plane')
  });

  it('allow a plane to take off', function() {
    airport.landPlane(plane)
    airport.takeOff(plane)
    expect(airport.planes.length).toEqual(0);
  });
});

describe('Weather', function() {
  beforeEach(function() {
    weather = new Weather ();
  });

  it('is either stormy or sunny', function() {
    var result = []
    for(i=1; i <= 100; i++) {
      result.push(new Weather().state);
    }
    expect(result).toContain('stormy' && 'sunny')
  });
});
