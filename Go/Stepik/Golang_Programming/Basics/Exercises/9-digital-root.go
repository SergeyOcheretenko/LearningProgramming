package main

import "fmt"

func main() {
    var (
        sum int = 0
        result, number int
    )
    
    fmt.Scan(&number)
    
    for ; number > 0; {
        sum = sum + number % 10
        number = number / 10
    }
    
    if sum >= 10 {
        result = sum % 10 + sum / 10   
    } else {
        result = sum
    }
    
    fmt.Println(result)
}
