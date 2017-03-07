describe("Mars Rover", function () {
    describe("during discovering mode", function () {
        it("should move forward", function () {
            var engine = new Engine();
            var rover = new Rover(engine);
            spyOn(engine, "moveForward");

            rover.discover();

            expect(engine.moveForward).toHaveBeenCalled();
        });
    });
});