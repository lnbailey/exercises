var dog = {
  name: 'Rygel',
  location: 'Hyneria',
  fav_food: 'food cubes',
  hungry: true,

  eat: function() {
    console.log(this.name + "'s favorite food is " + this.fav_food);
    this.hungry = false;
  },
  party: function() {
    console.log(this.name + " eats your food while you're not looking!");
  }
};

dog.eat();
dog.party();

var takeItToTheVet = function
