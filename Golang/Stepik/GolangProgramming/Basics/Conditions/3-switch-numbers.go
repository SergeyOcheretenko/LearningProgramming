package main

import "fmt"

func main() {
    var number, firstNumber int
    fmt.Scan(&number)
    
    switch {
        case number <= 9:  firstNumber = number
        case number <= 99: firstNumber = number / 10
        case number <= 999: firstNumber = number / 100
        case number <= 9999: firstNumber = number / 1000
        default: firstNumber = 1
    }
    
    fmt.Println(firstNumber)
}
