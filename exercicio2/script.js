const num = Number(prompt("insera um numero"))
const array = [1,2,3,4,5,6,7,8,9,10]
for (let i in array) {
    console.log(`${array[i]} x ${num} = ${array[i]*num}`)
}