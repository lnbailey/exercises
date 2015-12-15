var car_factory = function (type, speed) {
  var car = {}

  car.position = 0
  car.type = type
  car.speed = speed

  car.move = function () {
    this.position += this.speed
  }

  return car
}

var new_toyota = car_factory('Toyota Hilux', 3)
var new_honda = car_factory('Honda Accord', 5)
