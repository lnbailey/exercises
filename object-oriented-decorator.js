var dog = {
  name : 'Kia',
  breed: 'husky'
};

var give_shots = function(animal){
  animal.vaccinations = ['rabies', 'heartworms', 'fleas'];
};

give_shots(dog);

console.log(dog);

//decorators take an object as a parameter
//put keys on that object
