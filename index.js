
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