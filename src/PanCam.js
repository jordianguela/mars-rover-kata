function PanCam () {
};

PanCam.prototype.takePicture = function (vector) {
    var rawPicture = "101" + vector.x + vector.y + vector.orientation;
    return new Picture(rawPicture);
};