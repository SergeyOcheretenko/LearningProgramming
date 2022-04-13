package main

import "fmt"

func main() {
    var (
        number int
        message string
    )
    fmt.Scan(&number)
    
    switch {
        case number > 0: message = "Число положительное"
        case number < 0: message = "Число отрицательное"
        default: message = "Ноль"
    }
    
    fmt.Println(message)
}
