var words = ["ground", "control", "to", "major", "tom"];

function map(words, callback) {
  var output = [];
  for(var i = 0; i < words.length; i++) {
    output.push(callback(words[i]));
  }
  console.log(output);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});