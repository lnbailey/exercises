function biggestSmallest(array {
  array.sort(function(a,b){return a-b});
  console.log(array);
}

nums = [ 4, 12, 43, 2, 54, 32, 11, 17, 2, 3 5 ]
biggestSmallest(nums);
