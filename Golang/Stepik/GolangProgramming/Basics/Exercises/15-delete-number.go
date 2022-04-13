package main

import "fmt"

func main() {
    var text, number, current string
    fmt.Scan(&text, &number)
    
    for i := 0; i < len(text); i++ {
        current = string(text[i])
        if current != number {
            fmt.Print(current)   
        }
    }
}
