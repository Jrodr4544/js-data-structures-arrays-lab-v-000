// Write your solution here!
var drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name)
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
  return drivers
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

function appendDriver(name) {
  return [].concat(drivers, name)
}

function prependDriver(name) {
  return [].concat(name).concat(drivers)
}

function removeLastDriver() {
  
}