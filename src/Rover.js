function Rover (engine) {
    this.engine = engine;
}

Rover.prototype.discover = function () {
    this.engine.moveForward();
};
