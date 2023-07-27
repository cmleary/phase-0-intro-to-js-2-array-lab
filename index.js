const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const allCats = [...cats,name];
  return allCats;
}

function prependCat(name) {
    const allCats = [name,...cats];
  return allCats;
}

function removeLastCat() {
    const allCats = [cats[0],cats[1]];
    return allCats;
}

function removeFirstCat() {
    const allCats = [cats[1],cats[2]];
    return allCats;
}