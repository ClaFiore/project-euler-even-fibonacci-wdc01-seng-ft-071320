function fibonacci(num){
    let first = 0, second = 1, temp
    
    while (num > 1){
        temp = second
        second = first + second
        first = temp 
        console.log(first)
        num--
    }
    return first
}

function fibonacci_even(num){
    let first = 0, second = 1, temp
    let fibonacciSerie = []
    while (num > 1){
        temp = second
        second = first + second
        first = temp 
        fibonacciSerie = [...fibonacciSerie, first]
        num--
    }
    let even = fibonacciSerie.filter(x => x % 2 === 0)
    return even
}