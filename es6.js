
// The ES6 code ready for transpiling
['Mark', 'Peter'].map(name => `${name}!`);

// When added to Babel and the ES2015 preset of plugins is selected the code are transoiled to this
"use strict";

["Mark", "Peter"].map(function(name) {
  return name + "!";
});
