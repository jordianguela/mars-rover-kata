describe("Vector", function () {

    beforeEach(function () {
        var x = 1;
        var y = 2;
        var orientation = 'N';

        this.vector = new Vector(x, y, orientation);
    });

    it("has a X coordinate", function () {
        expect(this.vector.x).toEqual(1);
    });

    it("has an Y coordinate", function () {
        expect(this.vector.y).toEqual(2);
    });

    it("has a valid Orientation ('N', 'S', 'E', 'W')", function () {
        expect(this.vector.orientation).toEqual('N');
    });
});