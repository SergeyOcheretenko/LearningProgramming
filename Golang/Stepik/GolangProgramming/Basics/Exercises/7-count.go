package main

import "fmt"

func main() {
    var (
        n, number int
        count int = 0
    )
    fmt.Scan(&n)
    
    for i := 0; i < n; i++ {
        fmt.Scan(&number)
        if number == 0 {
            count++
        }
    }
    
    fmt.Println(count)
}
