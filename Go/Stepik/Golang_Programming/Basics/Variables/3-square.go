package main

import "fmt"

func main() {
    var (
        number, squareNumber int
    )

    fmt.Scan(&number)
    squareNumber = number * number 
    fmt.Println(squareNumber)
}
