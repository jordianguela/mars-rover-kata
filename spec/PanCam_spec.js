describe("Panoramic Camera", function () {
    it("taking a picture from an specific Vector returns a Picture", function () {
        var vector = new Vector(1, 3, 'S');
        var pancam = new PanCam();

        var rawPicture = pancam.takePicture(vector);

        expect(rawPicture instanceof Picture).toBeTruthy();
    });
});