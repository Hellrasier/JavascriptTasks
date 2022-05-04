const array = [1, 2, 3, 4, 5]
console.log(array)
console.log(array.length)
console.log(array[0], array[array.length - 1])

array.push(6)
console.log(array, array.length)

console.log(array.pop(), array, array.length)

console.log(array.slice(0, 3))
