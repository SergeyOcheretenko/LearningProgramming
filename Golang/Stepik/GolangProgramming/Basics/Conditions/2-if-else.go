package main

import "fmt"

func main() {
    var number, first, middle, last int
    fmt.Scan(&number)
    
    last = number % 10
    middle = number % 100 / 10
    first = number / 100
    
    if first != middle && first != last && last != middle {
        fmt.Println("YES")
    } else {
        fmt.Println("NO")
    }
}
