// Write your solution here!
    let cats = ["Milo", "Otis", "Garfield"];
    function destructivelyAppendCat(name) {
      cats.push(name);
    }
    destructivelyAppendCat("Milo","Otis","Garfield",);
    function destructivelyPrependCat(name) {
      cats.unshift(name);
    }
    destructivelyPrependCat("Milo","Otis","Garfield");

    function destructivelyRemoveLastCat() {
      cats.pop();
    }
    destructivelyRemoveLastCat();

    function destructivelyRemoveFirstCat() {
      cats.shift();
    }
    destructivelyRemoveFirstCat();

    function appendCat(name) {
      return cats.concat(name);
    }
    appendCat("Milo","Otis","Garfield");

    function prependCat(name) {
      return [name, ...cats];
    }
    prependCat("Milo","Otis","Garfield");

    function removeLastCat() {
      return cats.slice(0, -1);
    }
    removeLastCat();

    function removeFirstCat() {
        return cats.slice(1);
    }
    removeFirstCat();


