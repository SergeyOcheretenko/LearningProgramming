package main

import "fmt"

func main() {
    var (
        a, b int
        flag bool = false
    )
    fmt.Scan(&a, &b)
    
    for i := b; i >= a; i-- {
        if i % 7 == 0 {
            fmt.Println(i)
            flag = true
            break
        }
    }
    
    if flag == false {
        fmt.Println("NO")   
    }
}
