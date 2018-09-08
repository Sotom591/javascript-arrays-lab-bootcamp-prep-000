
var kittens = ["Milo", "Otis", "Garlfield"];

function kittens()
{
  return kittens;
}

function destructivelyAppendKitten(name)
{
  var newKitten = kittens.push("Ralph");
}

function destructivelyPrependKitten(name)
{
  var nextNewKitten = kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten()
{
  var destroyLastKitten = kittens.pop();
}

function destructivelyRemoveFirstKitten()
{
  var destroyFirstKitten = kittens.shift();
}

function appendKitten(name)
{
 var kittens = ["Milo", "Otis", "Garlfield"];
 appendKitten("Broom");
 
}