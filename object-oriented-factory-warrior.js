var warrior_factory = function (name, weapon) {
  var warrior = {};

  warrior.name = name;
  warrior.weapon = weapon;

  warrior.attack = function () {
    console.log(this.name + " weilds his " + this.weapon);

  };

  return warrior;
};

warrior_factory("Thor", "hammer");

console.log (warrior_factory("Thor", "hammer"));
