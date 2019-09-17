describe('Airport', function() {
  var planes
  var capacity
  var weather

  beforeEach(function() {
    airport = new Airport();
  });

  it('has no planes upon initialization', function() {
    expect(airport.planes.length).toEqual(0);
  });
});
