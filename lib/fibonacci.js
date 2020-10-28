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