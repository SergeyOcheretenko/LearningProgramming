package main

import "fmt"

func main() {
    var (
        number, cash int
        first int = 1
        second int = 1
        result int = -1
    )
    fmt.Scan(&number)
    
    for i := 3; ; i++ {
        cash = second
        second = second + first
        first = cash
        
        if second > number {
            break
        }
        
        if second == number {
            result = i
            break
        }
    }
    
    fmt.Println(result)
}
