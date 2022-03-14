package main

import (
    "fmt"
)

func main() {
    var text string
    fmt.Scan(&text)
    rs := []rune(text)
    
    for i, elem := range rs {
        if i % 2 != 0 {
            fmt.Print(string(elem))   
        }
    }
    
    fmt.Println()
}