describe("Picture", function(){
    it("has a raw value", function(){
        var raw = "aValue";
        var picture = new Picture(raw);

        expect(picture.raw()).toBe(raw);
    })
});