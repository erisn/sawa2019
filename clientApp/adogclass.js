var dog = /** @class */ (function () {
    function dog() {
    }
    dog.prototype.bark = function () {
    };
    dog.prototype.walk = function (distance) {
        // var weight = this.weight;
        var newWeight = this.weight - (this.weight * distance / 1000);
        //  var newWeight =  this.weight  - (this.weight * distance/1000);
        this.weight = newWeight;
    };
    dog.prototype.eat = function () {
    };
    dog.prototype.sleep = function () {
    };
    dog.prototype.grow = function () {
    };
    dog.prototype.weights = function () {
    };
    dog.prototype.ages = function () {
    };
    return dog;
}());
