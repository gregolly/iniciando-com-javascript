export function isEvenNumber(value) {
    const evenNumber = value % 2
    if(evenNumber === 0) {
        console.log(value + ' E um numero par')
    } else {
        console.log(value + ' nao e um numero par')
    }
}