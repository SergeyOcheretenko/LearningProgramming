package main

import "fmt"

func main() {
    var (
        number float32
        count int = 0
    )
    fmt.Scan(&number)
    if number <= 0 {
        fmt.Printf("число %2.2f не подходит", number)   
    } else if number > 10000 {
        for ; number >= 10 ; {
            number = number / 10
            count++
        }
        if count < 10 {
            fmt.Printf("%fe+0%d", number, count)
        } else {
            fmt.Printf("%fe+%d", number, count)
        }
    } else {
        fmt.Printf("%.4f", number * number)   
    }
}
