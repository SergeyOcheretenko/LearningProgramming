package main

import "fmt"

func main() {
    var number, first, middle, right, sum int
    fmt.Scan(&number)
    
    right = number % 10
    middle = (number % 100) / 10
    first = number / 100
    
    sum = first + middle + right
    
    fmt.Println(sum)
}
