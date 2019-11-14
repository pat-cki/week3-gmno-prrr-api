var test = require("tape");
// var chooseCatOptions = require("./script");
var getGiphy = require("./script");

test("Example test", function(t) {
    t.pass();
    t.end();
  });
  
test("Giphy function", function(t){
    let actual = getGiphy.getGiphy("cat");
    let expected = "https://api.giphy.com/v1/gifs/search?api_key=AKBayfz9FpPmrLSc5ScLLJx9BOzj2gaF&q=$cat&limit=2";
    t.deepEqual(actual, expected, "Should return a giphy");
    t.end();
});