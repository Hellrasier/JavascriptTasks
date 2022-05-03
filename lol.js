const encrypt = (word) => {
    let enctypted = ''
    for(let i = 0; i < word.length; i += 2) {
        enctypted += word[i+1] || ''
        enctypted +=  word[i]
    }
    return enctypted
}

const encrypt2 = (word) => {
    let enctypted = ''
    for(let i = 0; i < word.length; i++) {
        enctypted += word[i + 1 - 2 * (i % 2)] || word[i]
    }
    return enctypted
}


console.log(encrypt2('move'))
console.log(encrypt2('go!'))
