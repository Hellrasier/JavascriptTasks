import assert from 'node:assert/strict'
import {maxArray, sumArray} from arrays_task.js
const max = arr => Math.max(...arr)
const sum = arr => arr.reduce((sum, val) => sum + val, 0)


const test_data = [
    [1, 2, 3, 4, 5, 6, 7],
    [3232, 2321, 32521, 3221, 3213, 3232],
    [-1, -4, -7, -9, 0, 2],
    [-214124, 32323, 3231, -32322232, 3232],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


test_data.forEach(data => assert.strictEqual(sumArray(data), sum(data)))
console.log("SUM ARRAY - OK")

test_data.forEach(data => assert.strictEqual(maxArray(data), max(data)))
console.log("MAXIMUM ARRAY - OK")


