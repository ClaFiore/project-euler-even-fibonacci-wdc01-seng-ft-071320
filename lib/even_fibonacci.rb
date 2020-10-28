def fibonacci(num)
    first = 0
    second = 1
    
    (num - 1).times do
        first, second = second, first + second  #cannot split or it will give wrong result
        puts first
    end
    
end

fibonacci(8) #returns eight number in the fibonacci sequence, with 0 as first


def fibonacci_even(num)
    first = 0
    second = 1
    fibonacci_sequence = []
    (num - 1).times do
        first, second = second, first + second
        fibonacci_sequence.push(first)  #sequence of first 8 Fibonacci numbers
    end
    even = fibonacci_sequence.filter {|n| n % 2 == 0}  #filter only even numbers
    puts even
end

fibonacci_even(8)