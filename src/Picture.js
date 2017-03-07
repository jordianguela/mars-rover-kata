function Picture(raw) {
    this.rawValue = raw;
}

Picture.prototype.raw = function(){
    return this.rawValue;
}