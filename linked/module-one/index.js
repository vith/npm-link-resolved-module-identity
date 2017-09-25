const semver = require('semver')
const semverTwo = require('module-two')

console.log(`semver: ${typeof semver} ${semver.name}`)
console.log(`semverTwo: ${typeof semver} ${semverTwo.name}`)
console.log(`===? ${semver === semverTwo}`)
