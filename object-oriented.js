var person = {
  name: 'Ellen',
  location: 'Franklin',
  age: '35',
  hobbies: 'music',
  cat: {
    name: 'Cookie',
    hobbies: [
      "cuddling",
      "sleeping"
    ]
  },
  party: function() {
    console.log('dance, dance, dance!');
  },

  sleep: function () {
    console.log("zzzzzzz.....zzzzzzz");
  }
}
console.log(person.name);
person.party();
