package main

import "fmt"

func main() {
    var (
        numbers string
        max rune = 47
    )
    
    fmt.Scan(&numbers)
    rs := []rune(numbers)
    
    for _, elem := range rs {
        if elem > max {
            max = elem   
        }
    }
    
    fmt.Println(string(max))
}
