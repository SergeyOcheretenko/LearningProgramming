package main

import "fmt"

func work(number int) int {
    return number * number
}

func main() {
    var number, result int

    m := map[int]int{}

    for i := 0; i < 10; i++ {
        fmt.Scan(&number)
    
        if value, ok := m[number]; ok {
            fmt.Print(value, " ") 
        } else {
            result = work(number)
            fmt.Print(result, " ")
            m[number] = result
        }
    }

    fmt.Println()
    fmt.Println(m)
}
