// Code your solutions in this file

function writeCards(names, events) {
    let messages = []
    for (let count = 0; count < names.length; count++) {
        messages.push(`Thank you, ${names[count]}, for the wonderful ${events} gift!`)
    }
    return messages
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

function countDown(num) {
    for (let count = num; num >= 0; num--) {
        console.log(num)

    }
}
countDown(10)