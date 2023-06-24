export function isOddNumber(value) {
    const oddNumber = value % 2
    if(oddNumber === 1) {
        console.log(value + ' E um numero impar')
    } else {
        console.log(value + ' nao e um numero impar')
    }
}