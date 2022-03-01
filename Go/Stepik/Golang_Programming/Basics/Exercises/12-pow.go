package main

import "fmt"

func main() {
    var number, result int
    fmt.Scan(&number)
    
    for i := 0; ; i++ {
        result = 1
        for j := 1; j <= i; j++ {
            result = result * 2    
        }
        if result > number {
            break
        }
        fmt.Printf("%d ", result)
    }
}
