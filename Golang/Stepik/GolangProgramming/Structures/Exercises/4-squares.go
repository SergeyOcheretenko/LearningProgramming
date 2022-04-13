package main

import "fmt"

func main() {
    var (
        text string
        number rune
    )
    fmt.Scan(&text)
    rs := []rune(text)
    
    for i, elem := range rs {
        number = elem - 48
        rs[i] = number * number
        fmt.Print(rs[i])
    }

    fmt.Println()
}
